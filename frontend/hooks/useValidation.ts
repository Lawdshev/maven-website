import { DefaultValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type UseValidationOptions<TSchema extends yup.AnyObjectSchema> = {
  schema: TSchema;
  onSubmit: (data: yup.InferType<TSchema>) => void;
  defaultValues?: DefaultValues<yup.InferType<TSchema>>;
};

export function useValidation<TSchema extends yup.AnyObjectSchema>({
  schema,
  onSubmit,
  defaultValues,
}: UseValidationOptions<TSchema>) {
  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    ...rest
  } = useForm<yup.InferType<TSchema>>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  return {
    register,
    control,
    watch,
    setValue,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    submit: handleSubmit(onSubmit),
    ...rest,
  };
}