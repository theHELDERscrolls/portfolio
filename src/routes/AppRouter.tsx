import { AboutPage, ExperiencePage, HomePage, ProjectsPage } from "@/pages";
import { AppLoaderWrapper, DesktopLayout } from "@/components";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNoFound } from "./RoutesWithNoFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLoaderWrapper>
        <RoutesWithNoFound>
          {/* Añadir comprobación de tamaño de pantalla */}
          <Route path="/" element={<DesktopLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </RoutesWithNoFound>
      </AppLoaderWrapper>
    </BrowserRouter>
  );
};
