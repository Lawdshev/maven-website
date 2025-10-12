"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Tag } from "lucide-react";
import * as yup from "yup";
import Link from "next/link";
import { useValidation } from "@/hooks/useValidation";
import { Controller } from "react-hook-form";
import { useApiMutation } from "@/lib/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CreateCategoryRequest } from "@/types/categoriesData";

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

export default function CreateCategoryPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createCategoryMutation = useApiMutation<
    { message: string; success: boolean },
    CreateCategoryRequest
  >({
    url: "/categories/create",
    method: "post",
    options: {
      onSuccess: (data) => {
        if (data.success) {
          toast.success("Category created successfully");
          queryClient.invalidateQueries({ queryKey: ["/categories"] });
          router.push("/admin/categories");
        } else {
          toast.error(data.message || "Failed to create category");
        }
      },
      onError: (error) => {
        toast.error(error.message || "Error creating category");
      },
    },
  });

  const { control, submit, isSubmitting, errors, watch } = useValidation({
    schema: categorySchema,
    defaultValues: {
      name: "",
      description: "",
    },
    onSubmit: (data: CategoryFormData) => {
      const requestData: CreateCategoryRequest = {
        name: data.name,
        ...(data.description && { description: data.description }),
      };
      createCategoryMutation.mutate(requestData);
    },
  });

  const watchedName = watch("name");
  const watchedDescription = watch("description");

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
            <h1 className="text-3xl font-bold text-nav">Create New Category</h1>
            <p className="text-footer-text mt-1">
              Add a new category to organize your blog posts
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
            {isSubmitting ? "Creating..." : "Create Category"}
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
                      {(watchedName || "category-name")
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
                      0 posts
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
