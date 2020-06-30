interface buttonProps {
  children: React.ReactNode;
}

export default function button({ children }: buttonProps) {
  return (
    <button className="bg-green p-2 rounded text-white text-center md:text-lg">
      {children}
    </button>
  );
}
