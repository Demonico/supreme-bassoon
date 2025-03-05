import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z
    .string({ required_error: 'Please enter your email.' })
    .min(1, 'Please enter your email.')
    .email('The email address is badly formatted.'),
  password: z
    .string({ required_error: 'Please enter your password.' })
    .min(6, 'Your password must have 6 characters or more.'),
});

export const UpdateUserSchema = CreateUserSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  {
    message: 'At least one field must be provided',
  },
);

// Types
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
