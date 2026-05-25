import {z} from 'zod'

export const userSchema = z.object({
    name: z.string().min(2,'Min 2 char'),
    email: z.string().email('Min 2 char'),
    password: z.string().min(6,'Password must be 6 char'),

})
export type UserFormData = z.infer<typeof userSchema>