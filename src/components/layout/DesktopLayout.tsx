import { Outlet } from "react-router-dom";

export const DesktopLayout = () => {
  return (
    <main className="relative flex flex-col justify-center items-center w-full min-h-dvh bg-neutral-800">
      <header className="absolute top-0">HEADER</header>
      <aside className="fixed top-0 left-0 h-dvh bg-red-500">aside</aside>
      <Outlet />
      <footer>
        <p>FOOTER</p>
      </footer>
    </main>
  );
};
