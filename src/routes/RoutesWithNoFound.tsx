import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface RoutesWithNoFoundProps {
  children: ReactNode;
}

export const RoutesWithNoFound = ({ children }: RoutesWithNoFoundProps) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  );
};
