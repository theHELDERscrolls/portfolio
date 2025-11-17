import { DesktopNavbar } from "./DesktopNavbar";
import { Outlet } from "react-router-dom";

export const DesktopLayout = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center bg-neutral-950 text-neutral-100">
      <header className="absolute top-0 flex w-full items-center justify-center border-2 border-blue-500">
        HEADER
      </header>

      <aside className="fixed left-0 top-0 z-50 h-dvh">
        <DesktopNavbar />
      </aside>

      <Outlet />

      <footer>
        <p>FOOTER</p>
      </footer>
    </main>
  );
};
