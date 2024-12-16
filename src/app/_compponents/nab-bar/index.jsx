import { Logo } from "@/assets/icons";
import Link from "next/link";

const NabBar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 py-4">
      {/* Navigation Menu */}
      <div className="flex-1 flex justify-center">
        <Logo />
      </div>
      <ul className="flex space-x-6 text-primary text-sm">
        <li>
          <Link href="/" className="cursor-pointer hover:text-accent uppercase">
            DISTRIBUTOR & STOCKISTS
          </Link>
        </li>
        <li>
          <Link href="/" className="cursor-pointer hover:text-accent uppercase">
            STANDARDS & INNOVATION
          </Link>
        </li>
        <li>
          <Link href="/" className="cursor-pointer hover:text-accent uppercase">
            WHO WE ARE
          </Link>
        </li>
        <li>
          <Link href="/" className="cursor-pointer hover:text-accent uppercase">
            NEWS & EVENTS
          </Link>
        </li>
        <li>
          <Link href="/" className="cursor-pointer hover:text-accent uppercase">
            CONTACT
          </Link>{" "}
        </li>
      </ul>

      <div className="bg-accent text-destructive hover:bg-primary px-4 py-2">
        <button>Request a Quote</button>
        <p className="mt-2 text-sm">adamallys@adamallys-llc.com</p>
      </div>
    </nav>
  );
};

export default NabBar;
