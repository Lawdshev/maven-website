import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useApiMutation } from "@/lib/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { useValidation } from "@/hooks/useValidation";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const categorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
});
export type CategoriesResponse = yup.InferType<typeof categorySchema>;

export default function Categories({onClose}: {onClose: () => void}) {
  const queryClient = useQueryClient();

  const createCategoryMutation = useApiMutation<
    { message: string },
    CategoriesResponse
  >({
    url: "/categories/create",
    method: "post",
    options: {
      onSuccess: () => {
        toast.success("Category created successfully");
        queryClient.invalidateQueries({ queryKey: ["/categories"] });
        onClose();
      },
      onError: (error) => {
        toast.error(error.message || "Error creating category");
      },
    },
  });

  const { control, submit, isSubmitting } = useValidation({
    schema: categorySchema,
    onSubmit: (data: CategoriesResponse) => {
      createCategoryMutation.mutate(data);
    },
  });

  return (
    <div className="w-full">
      <form onSubmit={submit} className="space-y-6">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Category Name"
            //   variant="ghost"
              disabled={isSubmitting}
            />
          )}
              />
              <div className="flex justify-end">
                  
        <Button
          onClick={submit}
          disabled={isSubmitting}
          className="bg-primary hover:bg-primaryDark"
        >
          <Save className="w-4 h-4 mr-2" />
          {isSubmitting ? "Creating..." : "Create Category"}
        </Button>
              </div>
      </form>
    </div>
  );
}