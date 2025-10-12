export interface Category {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  postCount?: number;
}

export type CategoriesResponse = Category[];

export interface CategoryFormData {
  name: string;
  description?: string;
}

export interface CreateCategoryRequest {
  name: string;
  description?: string;
}

export interface UpdateCategoryRequest {
  name?: string;
  description?: string;
}

export interface DeleteCategoryResponse {
  success: boolean;
  message: string;
}
