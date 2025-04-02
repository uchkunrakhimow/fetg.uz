import { createRoot } from "react-dom/client";
import "@fontsource-variable/open-sans/wght.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system">
    <App />
  </ThemeProvider>
);
