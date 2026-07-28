"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthButton from "./AuthButton";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

import { login } from "@/services/auth.service";
import {
  LoginFormData,
  loginschema,
} from "@/schemas/auth.schemas";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginschema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await login(data);
      console.log("*****************",res)

      toast.success(res.message);

      router.push("/");
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to continue your placement journey."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
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
          {isSubmitting ? "Logging In..." : "Login"}
        </AuthButton>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Register
        </Link>
      </p>
    </AuthCard>
  );
}