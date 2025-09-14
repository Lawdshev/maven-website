"use client";

import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, FileText, Loader2 } from "lucide-react";
import * as yup from "yup";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useValidation } from "@/hooks/useValidation";
import { Controller } from "react-hook-form";
import BlogPreview from "../../../components/Blogpreview";
import { useState, useEffect } from "react";
import ModalContainer from "@/components/ui/modal-container";
import Categories from "../../../components/Categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getBlogPost,
  updateBlogPost,
  type BlogPost,
} from "../../../../server-actions/blog";
import "react-quill-new/dist/quill.snow.css";
import { CategoriesResponse } from "@/types/categoriesData";

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
  excerpt: yup.string().required("Excerpt is required"),
  author: yup.string().required("Author is required"),
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

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [categories] = useState<Category[]>([
    { id: "1", name: "Technology" },
    { id: "2", name: "Business" },
    { id: "3", name: "Development" },
    { id: "4", name: "AI/ML" },
  ]);

  // Fetch blog post data
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const post = await getBlogPost(blogId);
        setBlogPost(post);
        if (post) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setIsLoading(false);
      }
    };

    if (blogId) {
      fetchBlogPost();
    }
  }, [blogId]);

  const { control, submit, isSubmitting, errors, watch, reset } = useValidation(
    {
      schema: blogSchema,
      defaultValues: {
        title: "",
        content: "",
        excerpt: "",
        author: "",
        category_id: "",
        is_published: false,
      },
      onSubmit: async (data: BlogFormData) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("excerpt", data.excerpt);
        formData.append("author", data.author);
        formData.append("category_id", data.category_id);
        formData.append("status", data.is_published ? "published" : "draft");
        if (data.image) formData.append("featuredImage", data.image as File);

        const result = await updateBlogPost(
          blogId,
          { message: "", success: false },
          formData
        );
        if (result.success) {
          router.push("/admin/blogs");
        }
      },
    }
  );

  // Reset form when blog post data is loaded
  useEffect(() => {
    if (blogPost) {
      reset({
        title: blogPost.title,
        content: blogPost.content,
        excerpt: blogPost.excerpt,
        author: blogPost.author,
        category_id: "",
        is_published: blogPost.status === "published",
      });
    }
  }, [blogPost, reset]);

  const formData = {
    title: watch("title"),
    content: watch("content"),
    excerpt: watch("excerpt"),
    author: watch("author"),
    category_id: watch("category_id"),
    is_published: watch("is_published"),
    image: watch("image"),
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading blog post...</span>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-black -900 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-black -600 mb-6">
          The blog post you're looking for doesn't exist.
        </p>
        <Link href="/admin/blogs">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6 text-black -500 max-w-[1780px] text-sm xl:text-base mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin/blogs">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-black -900">
                Edit Blog Post
              </h1>
              <p className="text-black -600 mt-1">Update your blog article</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={submit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primaryDark"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? "Updating..." : "Update Blog"}
            </Button>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-6">
          {/* Basic Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0054aa]">
                <FileText className="w-5 h-5" />
                <span>Basic Blog Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              {/* Title */}
              <div>
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="title">Blog Title *</Label>
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

              {/* Author */}
              <div>
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="author">Author *</Label>
                <Controller
                  name="author"
                  control={control}
                  render={({ field }) => (
                    <Input
                      error={errors.author?.message}
                      {...field}
                      placeholder="Author name..."
                    />
                  )}
                />
                {errors.author?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.author?.message}
                  </p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="excerpt">Excerpt *</Label>
                <Controller
                  name="excerpt"
                  control={control}
                  render={({ field }) => (
                    <Input
                      error={errors.excerpt?.message}
                      {...field}
                      placeholder="Brief description of the blog post..."
                    />
                  )}
                />
                {errors.excerpt?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.excerpt?.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="category_id">Category *</Label>
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
                          {categories.length ? (
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
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="image">Featured Image</Label>
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
                {blogPost.featuredImage && !watch("image") && (
                  <div className="mt-2">
                    <p className="text-sm text-black -600 mb-2">Current image:</p>
                    <img
                      src={blogPost.featuredImage}
                      alt="Current featured image"
                      className="h-32 w-auto rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Publish toggle */}
              <div>
                <Label className="mb-2 xl:mb-3  text-sm xl:text-base" htmlFor="is_published">Publish</Label>
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
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <FileText className="w-5 h-5" />
                <span >Blog Content</span>
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
                    className="text-black h-[200px] text-sm xl:text-base"
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
            categories={categories as CategoriesResponse}
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
