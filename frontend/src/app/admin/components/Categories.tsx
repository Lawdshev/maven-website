import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useApiMutation } from "@/lib/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { useValidation } from "@/hooks/useValidation";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Save, Tag } from "lucide-react";
import { CreateCategoryRequest } from "@/types/categoriesData";

const categorySchema = yup.object().shape({
  name: yup
    .string()
    .required("Category name is required")
    .min(2, "Category name must be at least 2 characters")
    .max(50, "Category name must be less than 50 characters"),
});

export type CategoriesResponse = yup.InferType<typeof categorySchema>;

export default function Categories({ onClose }: { onClose: () => void }) {
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
          onClose();
        } else {
          toast.error(data.message || "Failed to create category");
        }
      },
      onError: (error) => {
        toast.error(error.message || "Error creating category");
      },
    },
  });

  const { control, submit, isSubmitting, errors } = useValidation({
    schema: categorySchema,
    defaultValues: {
      name: "",
    },
    onSubmit: (data: CategoriesResponse) => {
      createCategoryMutation.mutate({ name: data.name });
    },
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 bg-[#0054aa]/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Tag className="w-6 h-6 text-[#0054aa]" />
        </div>
        <h2 className="text-xl font-semibold text-nav">Create New Category</h2>
        <p className="text-sm text-footer-text mt-1">
          Add a new category to organize your blog posts
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter category name..."
                className="border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
                disabled={isSubmitting}
                error={errors.name?.message}
              />
            )}
          />
          {errors.name?.message && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
            className="border-border hover:bg-[#f8fafc]"
          >
            Cancel
          </Button>
          <Button
            onClick={submit}
            disabled={isSubmitting}
            className="bg-[#0054aa] hover:bg-[#003d7f] text-white font-medium transition-all duration-200"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? "Creating..." : "Create Category"}
          </Button>
        </div>
      </form>
    </div>
  );
}
