interface buttonProps {
  children: React.ReactNode;
}

export default function button({ children }: buttonProps) {
  return (
    <button className="bg-green p-2 rounded mt-2 text-white text-center">
      {children}
    </button>
  );
}
