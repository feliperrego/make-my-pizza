import { AnySchema, ValidationError } from 'yup';

export const isValidSchema = async (schema: AnySchema<unknown>, values: unknown): Promise<any> => {
  const validationErrors = {};
  let isValid;

  try {
    await schema.validate(values, { abortEarly: false });
    isValid = true;
  } catch (err) {
    if (err instanceof ValidationError) {
      err.inner.forEach((error) => {
        if (error?.path) {
          (validationErrors as any)[error.path] = error.message;
        }
      });
      isValid = false;
    }
  }

  return { isValid, validationErrors };
};
