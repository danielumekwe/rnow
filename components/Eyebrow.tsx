type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-5 w-1.5 bg-accent" aria-hidden="true" />
      <p className="text-lg font-bold text-accent">{children}</p>
    </div>
  );
}
