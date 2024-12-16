import addresses from "@/app/lib/data/address-book";
import { Logo } from "@/assets/icons";
import Link from "next/link";
import AddressCard from "./address-card";

const AddressBook = () => {
  return (
    <div className="flex justify-between py-8">
      <div className="my-4 w-60 flex flex-col gap-0">
        <Logo className="h-full w-auto" />
        <p className="text-primary texty-sm">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-primary mb-4 uppercase my-4">
          ADAMALLYS GROUP
        </h4>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              Who we are
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              Product & Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              Distribution & Stockists
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              Ship Supply
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              News
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {addresses.map((address) => (
        <AddressCard
          key={address.name}
          name={address.name}
          location={address.location}
          contactDetails={address.contact_details}
          email={address.email}
        />
      ))}
    </div>
  );
};

export default AddressBook;
