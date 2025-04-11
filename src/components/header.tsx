import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <header className="py-4 px-16 border-b ">
      <div className="flex justify-between items-center border-2">
        <h1 className="ml-4 text-2xl font-extrabold">Where in the world?</h1>
        <nav>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
