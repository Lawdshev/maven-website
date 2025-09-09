"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { WarningModal } from "@/components/ui/warning-modal";


interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: "published" | "draft";
}

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<Article | null>(null);

  // 📝 Dummy blog list
  const blogs: Article[] = [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      excerpt:
        "Next.js 15 introduces exciting new features for faster builds and better developer experience...",
      author: "Jane Doe",
      publishedAt: "2025-08-01T10:00:00Z",
      status: "published",
    },
    {
      id: "2",
      title: "Understanding React Server Components",
      excerpt:
        "Server Components are a new way to build fast, scalable React apps without shipping unnecessary JavaScript...",
      author: "John Smith",
      publishedAt: "2025-07-15T15:30:00Z",
      status: "draft",
    },
  ];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (blog: Article) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete?.id) return;
    setIsDeleting(blogToDelete.id);

    // ⏳ Mock delete delay
    await new Promise((res) => setTimeout(res, 800));

    setIsDeleting(null);
    setShowDeleteModal(false);
    setBlogToDelete(null);
    alert(`Deleted "${blogToDelete.title}" (mock only)`);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  };

  return (
    <>
      <div className="space-y-6 w-[95%] max-w-[1780px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-1">
              Manage your blog content and articles
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/admin/blogs/create">
              <Button className="bg-primary hover:bg-primaryDark">
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search blogs by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">All ({blogs.length})</Button>
                <Button variant="outline">
                  Published ({blogs.filter((b) => b.status === "published").length})
                </Button>
                <Button variant="outline">
                  Drafts ({blogs.filter((b) => b.status === "draft").length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Published</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <h3 className="font-medium text-gray-900">{blog.title}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </td>
                      <td className="py-4 px-4">{blog.author}</td>
                      <td className="py-4 px-4">
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
                          <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Link href={`/admin/blogs/edit/${blog.id}`}>
                            <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
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
                <p className="text-gray-500">No blog posts found.</p>
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
