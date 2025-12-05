import { AboutPage, ExperiencePage, HomePage, ProjectsPage } from "@/pages";
import { AppLoaderWrapper, DesktopLayout, MobileLayout } from "@/components";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNoFound } from "./RoutesWithNoFound";
import { useMediaQuery } from "@/hooks";

export const AppRouter = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <BrowserRouter>
      <AppLoaderWrapper>
        <RoutesWithNoFound>
          <Route
            path="/"
            element={isDesktop ? <DesktopLayout /> : <MobileLayout />}
          >
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
