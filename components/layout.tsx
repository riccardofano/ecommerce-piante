import NavBar from "../components/navbar";
import Footer from "../components/footer";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <NavBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
