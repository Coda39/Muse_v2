import Image from "next/image";

type HeaderProps = {
  logoSrc: string; // Path to the logo image
  logoAlt: string; // Alt text for the logo image
  options: string[]; // Array of text options for the menu
};

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt, options }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 font-serif text-xl text-yellow-200">
      <div className="">
        <Image src={logoSrc} alt={logoAlt} width={250} height={100} />
      </div>
      <nav className="navigation ">
        <ul className="flex space-x-4">
          {options.map((option) => (
            <li key={option}>
              <a href="#" className="hover:text-yellow-100 hover:underline">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
