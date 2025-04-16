import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const theme = localStorage.getItem("theme") as "light" | "dark" || "dark";
  const toggleTheme = () => {
    console.log("Theme toggle in NotFound is disabled");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-islamic-green mb-6">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-islamic-green hover:bg-islamic-green/90 text-white">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
