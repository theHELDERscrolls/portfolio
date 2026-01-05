import {
  AppLoaderWrapper,
  DesktopLayout,
  MobileLayout,
  ScrollToTop,
} from "@/components";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNoFound } from "./RoutesWithNoFound";
import { useMediaQuery } from "@/hooks";
import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const AboutPage = lazy(() => import("@/pages/about/AboutPage"));
const ExperiencePage = lazy(() => import("@/pages/experience/ExperiencePage"));
const ProjectsPage = lazy(() => import("@/pages/projects/ProjectsPage"));

export const AppRouter = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <BrowserRouter>
      <ScrollToTop />
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
