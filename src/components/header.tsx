import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <header className="py-4 px-4 md:px-16 shadow-md dark:bg-card">
      <div className="flex justify-between items-center">
        <h1 className="ml-4 text-md md:text-2xl font-extrabold">
          Where in the world?
        </h1>
        <nav>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
