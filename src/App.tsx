import { useState, useEffect } from "react";
import { Home } from "./pages/Home.tsx";
import { Navigation } from "./components/Navigation.tsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container mx-auto px-1.5">
      <Navigation />
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <Home />
      )}
    </main>
  );
}
