"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Tag } from "lucide-react";
import Link from "next/link";
import { useApiQuery } from "@/lib/use-query";
import { useApiMutation } from "@/lib/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  Category,
  CategoriesResponse,
  DeleteCategoryResponse,
} from "@/types/categoriesData";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  categoryName: string;
  isLoading: boolean;
}

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
  isLoading,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-nav">Delete Category</h3>
            <p className="text-sm text-footer-text">
              This action cannot be undone
            </p>
          </div>
        </div>

        <p className="text-footer-text mb-6">
          Are you sure you want to delete the category "{categoryName}"? This
          will remove the category from all associated blog posts.
        </p>

        <div className="flex space-x-3 justify-end">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            className="border-border hover:bg-[#f8fafc]"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {isLoading ? "Deleting..." : "Delete Category"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null
  );

  const queryClient = useQueryClient();

  // Fetch categories
  const {
    data: categories = [],
    isLoading,
    error,
  } = useApiQuery<CategoriesResponse>({
    url: "/categories",
    params: { limit: 100, offset: 0 },
  });

  // Delete category mutation
  const deleteCategoryMutation = useApiMutation<DeleteCategoryResponse, string>(
    {
      url: "/categories",
      method: "delete",
      options: {
        onSuccess: (data) => {
          if (data.success) {
            toast.success("Category deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["/categories"] });
            setShowDeleteModal(false);
            setCategoryToDelete(null);
          } else {
            toast.error(data.message || "Failed to delete category");
          }
        },
        onError: (error) => {
          toast.error(error.message || "Error deleting category");
        },
        onSettled: () => {
          setIsDeleting(null);
        },
      },
    }
  );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (category: Category) => {
    setCategoryToDelete(category);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!categoryToDelete?.id) return;
    setIsDeleting(categoryToDelete.id);
    deleteCategoryMutation.mutate(categoryToDelete.id);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0054aa] mx-auto mb-4"></div>
          <p className="text-footer-text">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Tag className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-nav mb-2">
          Error Loading Categories
        </h2>
        <p className="text-footer-text mb-6">
          There was an error loading the categories.
        </p>
        <Button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ["/categories"] })
          }
          className="bg-[#0054aa] hover:bg-[#003d7f]"
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6 w-[95%] max-w-[1780px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-nav">Blog Categories</h1>
            <p className="text-footer-text mt-1">
              Manage your blog categories and organize your content
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/admin/categories/create">
              <Button className="bg-[#0054aa] hover:bg-[#003d7f] text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                New Category
              </Button>
            </Link>
          </div>
        </div>

        {/* Search */}
        <Card className="border-border shadow-sm">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-footer-text w-5 h-5" />
              <Input
                placeholder="Search categories by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#0054aa]/10 rounded-lg flex items-center justify-center">
                  <Tag className="w-6 h-6 text-[#0054aa]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-nav">
                    {categories.length}
                  </p>
                  <p className="text-sm text-footer-text">Total Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-nav">
                    {categories.filter((c) => (c.postCount || 0) > 0).length}
                  </p>
                  <p className="text-sm text-footer-text">Active Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-nav">
                    {categories.filter((c) => (c.postCount || 0) === 0).length}
                  </p>
                  <p className="text-sm text-footer-text">Unused Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Table */}
        <Card className="border-border shadow-sm">
          <CardHeader className="bg-[#fafbfc] border-b border-border">
            <CardTitle className="text-nav">All Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Description
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Posts
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Created
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-nav">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCategories.map((category) => (
                    <tr
                      key={category.id}
                      className="border-b border-border hover:bg-[#f8fafc] transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#0054aa]/10 rounded-full flex items-center justify-center">
                            <Tag className="w-4 h-4 text-[#0054aa]" />
                          </div>
                          <div>
                            <h3 className="font-medium text-nav">
                              {category.name}
                            </h3>
                            {category.slug && (
                              <p className="text-xs text-footer-text">
                                /{category.slug}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-footer-text text-sm max-w-xs truncate">
                          {category.description || "No description"}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#0054aa]/10 text-[#0054aa]">
                          {category.postCount || 0} posts
                        </span>
                      </td>
                      <td className="py-4 px-4 text-footer-text text-sm">
                        {new Date(category.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Link href={`/admin/categories/edit/${category.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-[#0054aa] hover:text-[#003d7f] hover:bg-[#f0f7ff] border-border hover:border-[#0054aa] transition-all duration-150"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 border-border hover:border-red-300 transition-all duration-150"
                            onClick={() => handleDeleteClick(category)}
                            disabled={isDeleting === category.id}
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

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#0054aa]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-[#0054aa]" />
                </div>
                <h3 className="text-lg font-medium text-nav mb-2">
                  {searchTerm ? "No categories found" : "No categories yet"}
                </h3>
                <p className="text-footer-text mb-6">
                  {searchTerm
                    ? "Try adjusting your search terms"
                    : "Create your first category to organize your blog posts"}
                </p>
                {!searchTerm && (
                  <Link href="/admin/categories/create">
                    <Button className="bg-[#0054aa] hover:bg-[#003d7f]">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Category
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        categoryName={categoryToDelete?.name || ""}
        isLoading={isDeleting === categoryToDelete?.id}
      />
    </>
  );
}
