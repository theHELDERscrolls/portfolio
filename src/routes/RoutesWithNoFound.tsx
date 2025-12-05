import { NotFoundPage } from "@/pages";
import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface RoutesWithNoFoundProps {
  children: ReactNode;
}

export const RoutesWithNoFound = ({ children }: RoutesWithNoFoundProps) => {
  return (
    <Routes>
      {children}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
