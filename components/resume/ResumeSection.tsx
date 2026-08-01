interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({
  title,
  children,
}: ResumeSectionProps) {
  return (
    <section className="mt-8">
      {/* Heading */}
      <div className="mb-4 border-b border-gray-300 pb-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="text-sm leading-6 text-gray-700">
        {children}
      </div>
    </section>
  );
}