import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProjectPdfCinema from "./pages/ProjectPdfCinema.tsx";
import ProjectCscDigital from "./pages/ProjectCscDigital.tsx";
import ProjectFilmesDesmontados from "./pages/ProjectFilmesDesmontados.tsx";
import ProjectNavi from "./pages/ProjectNavi.tsx";
import ProjectHabitPet from "./pages/ProjectHabitPet.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import LanguageToggle from "./components/LanguageToggle.tsx";
import { LanguageProvider } from "./i18n/LanguageContext.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <LanguageToggle />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projetos/pdf-cinema" element={<ProjectPdfCinema />} />
          <Route path="/projetos/csc-digital" element={<ProjectCscDigital />} />
          <Route path="/projetos/filmes-desmontados" element={<ProjectFilmesDesmontados />} />
          <Route path="/projetos/navi" element={<ProjectNavi />} />
          <Route path="/projetos/habitpet" element={<ProjectHabitPet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
