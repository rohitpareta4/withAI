import z, { email } from "zod";

export const registerschema=z.object({
    name:z
    .string()
    .min(3,"minimum 3 charactes needed")
    .max(50,"maximum 50 characters needed"),

    email:z.email(),

    password:z
    .string()
    .min(8,"minimum 8 charactes needed")
})

export const loginschema=z.object({
    email:z.email(),

    password:z
    .string()
    .min(8,"minimum 8 charactes needed")
})

export type RegisterFormData=z.infer<typeof registerschema>
export type LoginFormData=z.infer<typeof loginschema>
