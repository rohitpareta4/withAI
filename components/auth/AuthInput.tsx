import { UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function AuthInput({
  label,
  type,
  placeholder,
  register,
  error,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-slate-900 px-4 py-3 text-white outline-none transition

        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-slate-700 focus:border-cyan-400"
        }`}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}