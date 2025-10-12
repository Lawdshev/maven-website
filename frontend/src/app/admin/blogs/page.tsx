"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { WarningModal } from "@/components/ui/warning-modal";
import {
  getBlogPosts,
  deleteBlogPost,
  type BlogPost,
} from "../../server-actions/blog";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blog posts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setBlogs(blogPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (blog: BlogPost) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete?.id) return;
    setIsDeleting(blogToDelete.id);

    try {
      const result = await deleteBlogPost(blogToDelete.id);
      if (result.success) {
        // Remove the blog from the local state
        setBlogs(blogs.filter((blog) => blog.id !== blogToDelete.id));
        setShowDeleteModal(false);
        setBlogToDelete(null);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog post");
    } finally {
      setIsDeleting(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0054aa] mx-auto mb-4"></div>
          <p className="text-footer-text">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6 w-[95%] max-w-[1780px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-nav">Blog Posts</h1>
            <p className="text-footer-text mt-1">
              Manage your blog content and articles
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/admin/blogs/create">
              <Button className="bg-[#0054aa] hover:bg-[#003d7f] text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters + Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-footer-text w-5 h-5" />
                <Input
                  placeholder="Search blogs by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-border text-nav hover:bg-[#f8fafc] hover:text-[#0054aa] hover:border-[#0054aa]"
                >
                  All ({blogs.length})
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-nav hover:bg-[#f8fafc] hover:text-[#0054aa] hover:border-[#0054aa]"
                >
                  Published (
                  {blogs.filter((b) => b.status === "published").length})
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-nav hover:bg-[#f8fafc] hover:text-[#0054aa] hover:border-[#0054aa]"
                >
                  Drafts ({blogs.filter((b) => b.status === "draft").length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Table */}
        <Card className="border-border shadow-sm">
          <CardHeader className="bg-[#fafbfc] border-b border-border">
            <CardTitle className="text-nav">All Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Author
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Published
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-border hover:bg-[#f8fafc] transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <h3 className="font-medium text-nav">{blog.title}</h3>
                        <p className="text-sm text-footer-text mt-1 line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </td>
                      <td className="py-4 px-4 text-footer-text">
                        {blog.author}
                      </td>
                      <td className="py-4 px-4 text-footer-text">
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            blog.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-[#0054aa] hover:text-[#003d7f] hover:bg-[#f0f7ff] border-border hover:border-[#0054aa] transition-all duration-150"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Link href={`/admin/blogs/edit/${blog.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 hover:text-green-700 hover:bg-green-50 border-border hover:border-green-300 transition-all duration-150"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 border-border hover:border-red-300 transition-all duration-150"
                            onClick={() => handleDeleteClick(blog)}
                            disabled={isDeleting === blog.id}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-footer-text">No blog posts found.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Modal */}
      <WarningModal
        isOpen={showDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Blog Post"
        description={`Are you sure you want to delete "${
          blogToDelete?.title || "this blog post"
        }"? `}
        confirmText="Delete Blog Post"
        cancelText="Cancel"
        isLoading={isDeleting === blogToDelete?.id}
        variant="destructive"
      />
    </>
  );
}
