import { DesktopHeader } from "../shared/header";
import { DesktopNavbar } from "./DesktopNavbar";
import { Outlet } from "react-router-dom";

export const DesktopLayout = () => {
  return (
    <main className="relative flex flex-col items-center justify-center w-full min-h-dvh bg-neutral-950 text-neutral-100">
      <DesktopHeader />

      <aside className="fixed top-0 left-0 z-50 h-dvh">
        <DesktopNavbar />
      </aside>

      <Outlet />

      <section className="flex items-center justify-center w-full h-dvh bg-neutral-800">
        CONTACT ME
      </section>

      <footer>
        <p>FOOTER</p>
      </footer>
    </main>
  );
};
