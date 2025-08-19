"use client"

import type React from "react"

import { useState } from "react"
import { useActionState, useRef } from "react"
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  type BlogPost,
  type BlogFormState,
} from "../app/server-actions/blog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  FileText,
  Calendar,
  User,
  BarChart3,
  ImageIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"

interface AdminDashboardProps {
  blogPosts: BlogPost[]
  logoutAction: () => Promise<void>
}

export default function AdminDashboard({ blogPosts, logoutAction }: AdminDashboardProps) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [createState, createFormAction, createIsPending] = useActionState<BlogFormState, FormData>(createBlogPost, {
    message: "",
    success: false,
  })

  const [editState, editFormAction, editIsPending] = useActionState<BlogFormState, FormData>(
    editingPost ? updateBlogPost.bind(null, editingPost.id) : createBlogPost,
    {
      message: "",
      success: false,
    },
  )

  const createFormRef = useRef<HTMLFormElement>(null)
  const editFormRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const editFileInputRef = useRef<HTMLInputElement>(null)

  // Reset create form on successful submission
  if (createState.success && !createIsPending && createFormRef.current) {
    createFormRef.current.reset()
    setShowCreateForm(false)
    setSelectedImage(null)
    setImagePreview(null)
  }

  // Reset edit form on successful submission
  if (editState.success && !editIsPending && editFormRef.current) {
    editFormRef.current.reset()
    setEditingPost(null)
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    if (editFileInputRef.current) {
      editFileInputRef.current.value = ""
    }
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setShowCreateForm(false)
    setImagePreview(post.featuredImage || null)
    setSelectedImage(null)
  }

  const handleCancelEdit = () => {
    setEditingPost(null)
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleDeletePost = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const result = await deleteBlogPost(id)
      if (result.success) {
        window.location.reload()
      } else {
        alert(result.message)
      }
    }
  }

  const publishedPosts = blogPosts.filter((post) => post.status === "published")
  const draftPosts = blogPosts.filter((post) => post.status === "draft")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="#" className="flex items-center w-[200px]">
            <Image src="/logo-blue.png" alt="Logo" width={0} height={0} className="w-full"/>
          </Link>
            <form action={logoutAction}>
              <Button variant="outline" type="submit" className="flex items-center bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published Posts</p>
                <p className="text-2xl font-[medium] text-gray-900">{publishedPosts.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Edit className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Draft Posts</p>
                <p className="text-2xl font-[medium] text-gray-900">{draftPosts.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-[medium] text-gray-900">{blogPosts.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post Button */}
        {!editingPost && (
          <div className="mb-6">
            <Button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-[#0054aa] hover:bg-[#003d7a] text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              {showCreateForm ? "Cancel" : "Create New Post"}
            </Button>
          </div>
        )}

        {/* Edit Post Form */}
        {editingPost && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-[medium] text-gray-900">Edit Blog Post</h2>
              <Button variant="outline" onClick={handleCancelEdit}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>

            <form ref={editFormRef} action={editFormAction} className="space-y-6">
              {/* Title Field */}
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <Input
                  id="edit-title"
                  name="title"
                  type="text"
                  defaultValue={editingPost.title}
                  placeholder="Enter blog post title"
                  required
                  className="w-full"
                />
                {editState.errors?.title && (
                  <p className="text-red-500 text-xs mt-1">{editState.errors.title.join(", ")}</p>
                )}
              </div>

              {/* Author Field */}
              <div>
                <label htmlFor="edit-author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <Input
                  id="edit-author"
                  name="author"
                  type="text"
                  defaultValue={editingPost.author}
                  placeholder="Author name"
                  required
                  className="w-full"
                />
                {editState.errors?.author && (
                  <p className="text-red-500 text-xs mt-1">{editState.errors.author.join(", ")}</p>
                )}
              </div>

              {/* Featured Image Upload */}
              <div>
                <label htmlFor="edit-featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="mx-auto h-32 w-auto rounded-lg object-cover"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleRemoveImage}
                          className="mt-2 bg-transparent"
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="edit-featuredImage"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#0054aa] hover:text-[#003d7a] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0054aa]"
                          >
                            <span>Upload a file</span>
                            <input
                              ref={editFileInputRef}
                              id="edit-featuredImage"
                              name="featuredImage"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Excerpt Field */}
              <div>
                <label htmlFor="edit-excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt
                </label>
                <Textarea
                  id="edit-excerpt"
                  name="excerpt"
                  defaultValue={editingPost.excerpt}
                  placeholder="Brief description of the blog post"
                  rows={3}
                  required
                  className="w-full"
                />
                {editState.errors?.excerpt && (
                  <p className="text-red-500 text-xs mt-1">{editState.errors.excerpt.join(", ")}</p>
                )}
              </div>

              {/* Content Field */}
              <div>
                <label htmlFor="edit-content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <Textarea
                  id="edit-content"
                  name="content"
                  defaultValue={editingPost.content}
                  placeholder="Write your blog post content here..."
                  rows={10}
                  required
                  className="w-full"
                />
                {editState.errors?.content && (
                  <p className="text-red-500 text-xs mt-1">{editState.errors.content.join(", ")}</p>
                )}
              </div>

              {/* Status Field */}
              <div>
                <label htmlFor="edit-status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="edit-status"
                  name="status"
                  defaultValue={editingPost.status}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0054aa] focus:border-[#0054aa]"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-4">
                <Button type="submit" className="bg-[#0054aa] hover:bg-[#003d7a] text-white" disabled={editIsPending}>
                  {editIsPending ? "Updating..." : "Update Post"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </div>

              {/* Success/Error Message */}
              {editState.message && (
                <p
                  className={`text-center text-sm ${editState.success ? "text-green-600" : "text-red-500"}`}
                  aria-live="polite"
                >
                  {editState.message}
                </p>
              )}
            </form>
          </div>
        )}

        {/* Create Post Form */}
        {showCreateForm && !editingPost && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl font-[medium] text-gray-900 mb-6">Create New Blog Post</h2>

            <form ref={createFormRef} action={createFormAction} className="space-y-6">
              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter blog post title"
                  required
                  className="w-full"
                />
                {createState.errors?.title && (
                  <p className="text-red-500 text-xs mt-1">{createState.errors.title.join(", ")}</p>
                )}
              </div>

              {/* Author Field */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <Input id="author" name="author" type="text" placeholder="Author name" required className="w-full" />
                {createState.errors?.author && (
                  <p className="text-red-500 text-xs mt-1">{createState.errors.author.join(", ")}</p>
                )}
              </div>

              {/* Featured Image Upload */}
              <div>
                <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="mx-auto h-32 w-auto rounded-lg object-cover"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleRemoveImage}
                          className="mt-2 bg-transparent"
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="featuredImage"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#0054aa] hover:text-[#003d7a] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0054aa]"
                          >
                            <span>Upload a file</span>
                            <input
                              ref={fileInputRef}
                              id="featuredImage"
                              name="featuredImage"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Excerpt Field */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt
                </label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief description of the blog post"
                  rows={3}
                  required
                  className="w-full"
                />
                {createState.errors?.excerpt && (
                  <p className="text-red-500 text-xs mt-1">{createState.errors.excerpt.join(", ")}</p>
                )}
              </div>

              {/* Content Field */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your blog post content here..."
                  rows={10}
                  required
                  className="w-full"
                />
                {createState.errors?.content && (
                  <p className="text-red-500 text-xs mt-1">{createState.errors.content.join(", ")}</p>
                )}
              </div>

              {/* Status Field */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0054aa] focus:border-[#0054aa]"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-4">
                <Button type="submit" className="bg-[#0054aa] hover:bg-[#003d7a] text-white" disabled={createIsPending}>
                  {createIsPending ? "Saving..." : "Save Post"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>

              {/* Success/Error Message */}
              {createState.message && (
                <p
                  className={`text-center text-sm ${createState.success ? "text-green-600" : "text-red-500"}`}
                  aria-live="polite"
                >
                  {createState.message}
                </p>
              )}
            </form>
          </div>
        )}

        {/* Blog Posts List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-[medium] text-gray-900">Blog Posts</h2>
          </div>

          {blogPosts.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No blog posts yet. Create your first post!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        {post.featuredImage && (
                          <div className="flex-shrink-0">
                            <img
                              src={post.featuredImage || "/placeholder.svg"}
                              alt={post.title}
                              className="h-16 w-16 rounded-lg object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-normal text-gray-900">{post.title}</h3>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                post.status === "published"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {post.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{post.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
