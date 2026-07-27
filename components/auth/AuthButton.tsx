interface AuthButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function AuthButton({
  children,
  disabled,
}: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}