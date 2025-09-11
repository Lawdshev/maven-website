"use server";

import { revalidatePath } from "next/cache";
import { checkAuth } from "./auth";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: "draft" | "published";
  featuredImage?: string;
}

export interface BlogFormState {
  message: string;
  success: boolean;
  errors?: {
    title?: string[];
    content?: string[];
    excerpt?: string[];
    author?: string[];
  };
}

// In-memory storage - in production, use a database
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with AI Development",
    content:
      "Artificial Intelligence is transforming the way we build applications...",
    excerpt: "Learn the fundamentals of AI development and how to get started.",
    author: "Admin",
    publishedAt: new Date().toISOString(),
    status: "published",
  },
  {
    id: "2",
    title: "The Future of Web Development",
    content:
      "Web development continues to evolve with new frameworks and technologies...",
    excerpt:
      "Explore the latest trends and technologies shaping web development.",
    author: "Admin",
    publishedAt: new Date().toISOString(),
    status: "draft",
  },
];

export async function createBlogPost(
  prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return {
      message: "Unauthorized",
      success: false,
    };
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const status = formData.get("status") as "draft" | "published";
  const featuredImage = formData.get("featuredImage") as File;

  // Validation
  const errors: BlogFormState["errors"] = {};

  if (!title || title.trim().length < 3) {
    errors.title = ["Title must be at least 3 characters long"];
  }

  if (!content || content.trim().length < 10) {
    errors.content = ["Content must be at least 10 characters long"];
  }

  if (!excerpt || excerpt.trim().length < 10) {
    errors.excerpt = ["Excerpt must be at least 10 characters long"];
  }

  if (!author || author.trim().length < 2) {
    errors.author = ["Author name must be at least 2 characters long"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "Please fix the errors below",
      success: false,
      errors,
    };
  }

  // Handle image upload (in production, upload to cloud storage)
  let imageUrl = "";
  if (featuredImage && featuredImage.size > 0) {
    // For demo purposes, we'll create a placeholder URL
    // In production, upload to cloud storage like AWS S3, Cloudinary, etc.
    imageUrl = `/uploads/${Date.now()}-${featuredImage.name}`;
  }

  // Create new blog post
  const newPost: BlogPost = {
    id: Date.now().toString(),
    title: title.trim(),
    content: content.trim(),
    excerpt: excerpt.trim(),
    author: author.trim(),
    publishedAt: new Date().toISOString(),
    status: status || "draft",
    featuredImage: imageUrl || undefined,
  };

  blogPosts.unshift(newPost);
  revalidatePath("/admin/blogs");

  return {
    message: `Blog post ${
      status === "published" ? "published" : "saved as draft"
    } successfully!`,
    success: true,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return [];
  }
  return blogPosts;
}

export async function deleteBlogPost(
  id: string
): Promise<{ success: boolean; message: string }> {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return { success: false, message: "Unauthorized" };
  }

  const index = blogPosts.findIndex((post) => post.id === id);
  if (index === -1) {
    return { success: false, message: "Blog post not found" };
  }

  blogPosts.splice(index, 1);
  revalidatePath("/admin/blogs");

  return { success: true, message: "Blog post deleted successfully" };
}

export async function updateBlogPost(
  id: string,
  prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return {
      message: "Unauthorized",
      success: false,
    };
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const status = formData.get("status") as "draft" | "published";
  const featuredImage = formData.get("featuredImage") as File;

  // Find the post to update
  const postIndex = blogPosts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return {
      message: "Blog post not found",
      success: false,
    };
  }

  // Validation
  const errors: BlogFormState["errors"] = {};

  if (!title || title.trim().length < 3) {
    errors.title = ["Title must be at least 3 characters long"];
  }

  if (!content || content.trim().length < 10) {
    errors.content = ["Content must be at least 10 characters long"];
  }

  if (!excerpt || excerpt.trim().length < 10) {
    errors.excerpt = ["Excerpt must be at least 10 characters long"];
  }

  if (!author || author.trim().length < 2) {
    errors.author = ["Author name must be at least 2 characters long"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "Please fix the errors below",
      success: false,
      errors,
    };
  }

  // Handle image upload (keep existing image if no new one is uploaded)
  let imageUrl = blogPosts[postIndex].featuredImage || "";
  if (featuredImage && featuredImage.size > 0) {
    imageUrl = `/uploads/${Date.now()}-${featuredImage.name}`;
  }

  // Update the blog post
  blogPosts[postIndex] = {
    ...blogPosts[postIndex],
    title: title.trim(),
    content: content.trim(),
    excerpt: excerpt.trim(),
    author: author.trim(),
    status: status || "draft",
    featuredImage: imageUrl || undefined,
  };

  revalidatePath("/admin/blogs");

  return {
    message: `Blog post updated successfully!`,
    success: true,
  };
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    return null;
  }

  return blogPosts.find((post) => post.id === id) || null;
}
