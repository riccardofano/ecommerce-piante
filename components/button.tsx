interface buttonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit";
  disabled?: boolean;
  handleClick?: () => void;
}

export default function button({
  children,
  className,
  type,
  disabled,
}: buttonProps) {
  const color = disabled
    ? "bg-gray-dark cursor-not-allowed"
    : "bg-green-dark hover:bg-green-light";
  const classes = `${color} p-2 rounded text-white text-center text-base md:text-lg`;
  return (
    <button
      type={type}
      className={className ? `${classes} ${className}` : classes}
    >
      {children}
    </button>
  );
}
