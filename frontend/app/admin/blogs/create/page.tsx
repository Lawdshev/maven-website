"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, FileText } from "lucide-react";
import * as yup from "yup";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/lib/use-mutation";
import { toast } from "react-toastify";
import { useValidation } from "@/hooks/useValidation";
import { Controller } from "react-hook-form";
import { useApiQuery } from "@/lib/use-query";
import { CategoriesResponse } from "@/types/categoriesData";
import BlogPreview from "../../components/Blogpreview";
import { useState } from "react";
import ModalContainer from "@/components/ui/modal-container";
import Categories from "../../components/Categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-quill-new/dist/quill.snow.css";

interface Category {
  id: string;
  name: string;
}

// Dynamically import React Quill
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
  ),
});

const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  image: yup
    .mixed()
    .optional()
    .test("fileType", "Only image files are allowed", (value) => {
      if (!value) return true;
      const file = value as File | undefined;
      return file
        ? ["image/jpeg", "image/png", "image/gif"].includes(file.type)
        : false;
    }),
  category_id: yup.string().required("Category is required"),
  is_published: yup.boolean().optional(),
});

export type BlogFormData = yup.InferType<typeof blogSchema>;

export default function CreateBlogPage() {
  const router = useRouter();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const createBlogMutation = useApiMutation<{ message: string }, FormData>({
    url: "/blog/posts/create",
    method: "post",
    options: {
      onSuccess: () => {
        toast.success("Blog created successfully");
        queryClient.invalidateQueries({ queryKey: ["/blogs"] });
        router.push("/admin/blogs");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  });

  const { control, submit, isSubmitting, errors, watch } = useValidation({
    schema: blogSchema,
    defaultValues: {
      title: "",
      content: "",
      category_id: "",
      is_published: false,
    },
    onSubmit: (data: BlogFormData) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("category_id", data.category_id);
      formData.append("is_published", String(data.is_published));
      if (data.image) formData.append("image", data.image as File);
      createBlogMutation.mutate(formData);
    },
  });

  const formData = {
    title: watch("title"),
    content: watch("content"),
    category_id: watch("category_id"),
    is_published: watch("is_published"),
    image: watch("image"),
  };

  const { data: categories } = useApiQuery<CategoriesResponse>({
    url: "/categories",
    params: { limit: 10, offset: 0 },
  });

  return (
    <>
      <div className="space-y-6 text-gray-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin/blogs">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create New Blog Post
              </h1>
              <p className="text-gray-600 mt-1">
                Write and publish a new blog article
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={submit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primaryDark"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? "Saving..." : "Save & Publish"}
            </Button>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-6">
          {/* Basic Info Card */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <FileText className="w-5 h-5" />
                <span>Basic Blog Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              {/* Title */}
              <div>
                <Label htmlFor="title">Blog Title *</Label>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      error={errors.title?.message}
                      {...field}
                      placeholder="Enter blog title..."
                    />
                  )}
                />
                {errors.title?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.title?.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category_id">Category *</Label>
                <Controller
                  name="category_id"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col gap-2">
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category..." />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.length ? (
                            categories.map((cat) => (
                              <SelectItem key={cat.id} value={String(cat.id)}>
                                {cat.name}
                              </SelectItem>
                            ))
                          ) : (
                            <div className="px-2 py-1.5 text-sm text-muted-foreground">
                              No categories found
                            </div>
                          )}
                        </SelectContent>
                      </Select>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 self-start"
                        onClick={() => setIsCategoryModalOpen(true)}
                        type="button"
                      >
                        + Add New Category
                      </Button>
                    </div>
                  )}
                />
                {errors.category_id?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.category_id?.message}
                  </p>
                )}
              </div>

              {/* Image */}
              <div>
                <Label htmlFor="image">Featured Image</Label>
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="file"
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] || undefined)
                      }
                      error={errors.image?.message}
                    />
                  )}
                />
                {errors.image?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.image?.message}
                  </p>
                )}
              </div>

              {/* Publish toggle */}
              <div>
                <Label htmlFor="is_published">Publish</Label>
                <Controller
                  name="is_published"
                  control={control}
                  render={({ field }) => (
                    <div className="flex space-x-1 items-center">
                      <Input
                        type="checkbox"
                        checked={field.value || false}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="!w-4 !h-4"
                        error={errors.is_published?.message}
                      />
                      <p>Publish Blog Immediately</p>
                    </div>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <FileText className="w-5 h-5" />
                <span className="mb-8">Blog Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 !min-h-[300px]">
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    className="text-black h-[200px]"
                  />
                )}
              />
              {errors.content?.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.content?.message}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Live Preview */}
          <BlogPreview
            formData={formData as BlogFormData}
            categories={categories}
          />
        </form>
      </div>

      {/* Category Modal */}
      <ModalContainer
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
      >
        <Categories onClose={() => setIsCategoryModalOpen(false)} />
      </ModalContainer>
    </>
  );
}
