interface buttonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit";
}

export default function button({ children, className, type }: buttonProps) {
  const classes =
    "bg-green p-2 rounded text-white text-center text-base md:text-lg";
  return (
    <button
      type={type}
      className={className ? `${classes} ${className}` : classes}
    >
      {children}
    </button>
  );
}
