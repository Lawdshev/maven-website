import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Calendar, Tag, Globe, Lock } from "lucide-react";
import React from "react";
import Image from "next/image";
import { BlogFormData } from "../blogs/create/page";
import { CategoriesResponse, Category } from "@/types/categoriesData";

interface BlogPreviewProps {
  formData: BlogFormData;
  categories?: CategoriesResponse;
}

export default function BlogPreview({
  formData,
  categories,
}: BlogPreviewProps) {
  const hasTitle = formData.title && formData.title.trim().length > 0;
  const hasContent = formData.content && formData.content.trim().length > 0;
  const hasCategory =
    formData.category_id && formData.category_id.trim().length > 0;
  const hasAnyContent = hasTitle || hasContent;

  // Get category name from categories data
  const getCategoryName = (categoryId: string) => {
    if (!categories || !Array.isArray(categories)) return categoryId;
    const category = categories.find((cat: Category) => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
        <CardTitle className="flex items-center space-x-2 text-purple-800">
          <Eye className="w-5 h-5" />
          <span>Blog Preview</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {!hasAnyContent ? (
          <div className="text-center py-12 text-gray-500">
            <div className="mb-4">
              <Eye className="w-12 h-12 mx-auto text-gray-300" />
            </div>
            <p className="text-lg font-medium mb-2">Preview Your Blog</p>
            <p className="text-sm">
              Start typing your title or content to see a live preview of your
              blog post.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Blog Header */}
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {hasTitle ? formData.title : "Your Blog Title"}
              </h1>

              {/* Blog Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>

                {hasCategory && (
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>
                      Category: {getCategoryName(formData.category_id)}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1">
                  {formData.is_published ? (
                    <>
                      <Globe className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Published</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-orange-600" />
                      <span className="text-orange-600">Draft</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {formData.image && (
              <div className="w-full">
                {formData.image instanceof File ? (
                  <Image
                    src={URL.createObjectURL(formData.image)}
                    alt="Blog featured image"
                    width={800}
                    height={256}
                    className="w-full h-64 object-cover rounded-lg shadow-sm"
                  />
                ) : (
                  <Image
                    src={formData.image as string}
                    alt="Blog featured image"
                    width={800}
                    height={256}
                    className="w-full h-64 object-cover rounded-lg shadow-sm"
                  />
                )}
              </div>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {hasContent ? (
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formData.content }}
                />
              ) : (
                <div className="text-gray-400 italic">
                  Start writing your blog content to see it appear here...
                </div>
              )}
            </div>

            {/* Blog Footer */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  {hasContent && (
                    <span>
                      Read time: ~{Math.ceil(formData.content.length / 1000)}{" "}
                      min
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span>Author: Admin</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}