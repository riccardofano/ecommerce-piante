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
  handleClick,
  disabled,
}: buttonProps) {
  const color = disabled ? "bg-gray" : "bg-green";
  const classes = `${color} p-2 rounded text-white text-center text-base md:text-lg`;
  return (
    <button
      onClick={handleClick}
      type={type}
      className={className ? `${classes} ${className}` : classes}
    >
      {children}
    </button>
  );
}
