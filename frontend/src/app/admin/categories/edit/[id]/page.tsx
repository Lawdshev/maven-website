"use client";

import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Tag, Loader2 } from "lucide-react";
import * as yup from "yup";
import Link from "next/link";
import { useValidation } from "@/hooks/useValidation";
import { Controller } from "react-hook-form";
import { useApiQuery } from "@/lib/use-query";
import { useApiMutation } from "@/lib/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Category, UpdateCategoryRequest } from "@/types/categoriesData";
import { useEffect } from "react";

const categorySchema = yup.object().shape({
  name: yup
    .string()
    .required("Category name is required")
    .min(2, "Category name must be at least 2 characters")
    .max(50, "Category name must be less than 50 characters"),
  description: yup
    .string()
    .optional()
    .max(200, "Description must be less than 200 characters"),
});

export type CategoryFormData = yup.InferType<typeof categorySchema>;

export default function EditCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params.id as string;
  const queryClient = useQueryClient();

  // Fetch category data
  const {
    data: category,
    isLoading,
    error,
  } = useApiQuery<Category>({
    url: `/categories/${categoryId}`,
    enabled: !!categoryId,
  });

  const updateCategoryMutation = useApiMutation<
    { message: string; success: boolean },
    UpdateCategoryRequest
  >({
    url: `/categories/${categoryId}`,
    method: "put",
    options: {
      onSuccess: (data) => {
        if (data.success) {
          toast.success("Category updated successfully");
          queryClient.invalidateQueries({ queryKey: ["/categories"] });
          queryClient.invalidateQueries({
            queryKey: [`/categories/${categoryId}`],
          });
          router.push("/admin/categories");
        } else {
          toast.error(data.message || "Failed to update category");
        }
      },
      onError: (error) => {
        toast.error(error.message || "Error updating category");
      },
    },
  });

  const { control, submit, isSubmitting, errors, watch, reset } = useValidation(
    {
      schema: categorySchema,
      defaultValues: {
        name: "",
        description: "",
      },
      onSubmit: (data: CategoryFormData) => {
        const requestData: UpdateCategoryRequest = {
          name: data.name,
          ...(data.description && { description: data.description }),
        };
        updateCategoryMutation.mutate(requestData);
      },
    }
  );

  // Reset form when category data is loaded
  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
        description: category.description || "",
      });
    }
  }, [category, reset]);

  const watchedName = watch("name");
  const watchedDescription = watch("description");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#0054aa] mx-auto mb-4" />
          <p className="text-footer-text">Loading category...</p>
        </div>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Tag className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-nav mb-2">Category Not Found</h2>
        <p className="text-footer-text mb-6">
          The category you're looking for doesn't exist or has been deleted.
        </p>
        <Link href="/admin/categories">
          <Button className="bg-[#0054aa] hover:bg-[#003d7f]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-[95%] max-w-[1780px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/categories">
            <Button
              variant="outline"
              className="border-border hover:bg-[#f8fafc] hover:text-[#0054aa] hover:border-[#0054aa]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-nav">Edit Category</h1>
            <p className="text-footer-text mt-1">
              Update category information and settings
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={submit}
            disabled={isSubmitting}
            className="bg-[#0054aa] hover:bg-[#003d7f] text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? "Updating..." : "Update Category"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={submit} className="space-y-6">
            {/* Basic Info Card */}
            <Card className="border-border shadow-sm">
              <CardHeader className="bg-[#fafbfc] border-b border-border">
                <CardTitle className="flex items-center space-x-2 text-nav">
                  <Tag className="w-5 h-5" />
                  <span>Category Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {/* Name */}
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-nav mb-2 block"
                  >
                    Category Name *
                  </Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter category name..."
                        className="border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
                        error={errors.name?.message}
                      />
                    )}
                  />
                  {errors.name?.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-footer-text">
                    Choose a clear, descriptive name for your category
                  </p>
                </div>

                {/* Description */}
                <div>
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-nav mb-2 block"
                  >
                    Description
                  </Label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        placeholder="Enter category description (optional)..."
                        className="border-border focus:border-[#0054aa] focus:ring-[#0054aa] min-h-[100px]"
                        rows={4}
                      />
                    )}
                  />
                  {errors.description?.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-footer-text">
                    Optional description to help explain what this category is
                    for
                    {watchedDescription && (
                      <span className="ml-2">
                        ({watchedDescription.length}/200 characters)
                      </span>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Category Stats */}
            <Card className="border-border shadow-sm">
              <CardHeader className="bg-[#fafbfc] border-b border-border">
                <CardTitle className="text-nav text-sm">
                  Category Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0054aa]/5 rounded-lg">
                    <p className="text-2xl font-bold text-[#0054aa]">
                      {category.postCount || 0}
                    </p>
                    <p className="text-sm text-footer-text">Blog Posts</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">
                      {new Date(category.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-footer-text">Created</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>

        {/* Preview */}
        <div className="lg:col-span-1">
          <Card className="border-border shadow-sm sticky top-6">
            <CardHeader className="bg-[#fafbfc] border-b border-border">
              <CardTitle className="text-nav text-sm">Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0054aa]/10 rounded-full flex items-center justify-center">
                    <Tag className="w-5 h-5 text-[#0054aa]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-nav">
                      {watchedName || "Category Name"}
                    </h3>
                    <p className="text-xs text-footer-text">
                      /
                      {(watchedName || category.name || "category-name")
                        .toLowerCase()
                        .replace(/\s+/g, "-")}
                    </p>
                  </div>
                </div>

                {(watchedDescription || watchedName) && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-footer-text">
                      {watchedDescription || "No description provided"}
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-footer-text">
                    <span>Posts</span>
                    <span className="bg-[#0054aa]/10 text-[#0054aa] px-2 py-1 rounded-full">
                      {category.postCount || 0} posts
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border text-xs text-footer-text">
                  <p>
                    Last updated:{" "}
                    {new Date(category.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
