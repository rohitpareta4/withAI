"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthButton from "./AuthButton";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

import { register as registerUser } from "@/services/auth.service";
import {
  RegisterFormData,
  registerschema,
} from "@/schemas/auth.schemas";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerschema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await registerUser(data);

      toast.success(res.message);

      router.push("/login");
    } catch {
      toast.error("Registration failed");
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start your placement journey with AI."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          register={register("name")}
          error={errors.name?.message}
        
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email")}
          error={errors.email?.message}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password")}
          error={errors.password?.message}
        />

        <AuthButton disabled={isSubmitting}>
          {isSubmitting
            ? "Creating Account..."
            : "Create Account"}
        </AuthButton>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  );
}