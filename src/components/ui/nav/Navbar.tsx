interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", href: "#", icon: "icon-home" },
  { id: "about", href: "#sect-about", icon: "icon-info" },
  { id: "experience", href: "#sect-work-exp", icon: "icon-work" },
  { id: "projects", href: "#sect-projects", icon: "icon-projects" },
  { id: "contact", href: "#sect-contact", icon: "icon-share" },
];

const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <nav className="sticky z-50 flex items-center justify-center w-full top-2 bottom-1 sm:top-4 ">
      <ul className="flex gap-8 px-4 py-2 rounded-full shadow-lg sm:gap-4 sm:p-4 bg-indigo-900/10 backdrop-blur-md w-fit">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>
              <svg
                className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-400 scale-110 drop-shadow-[0_0_5px_#6366f1]"
                    : "text-neutral-400 hover:text-indigo-500"
                }`}
              >
                <use href={`/spriteSheet.svg#${item.icon}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
