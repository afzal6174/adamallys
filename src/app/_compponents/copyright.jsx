import Link from "next/link";
import { FaceBookIcon, InstagramIcon, LinkedInIcon } from "../../assets/icons";

const CopyRight = () => {
  return (
    <div className="mt-8 pt-8 flex justify-between items-center">
      <div className="flex gap-1">
        <Link href="#" className="text-primary hover:text-muted">
          <FaceBookIcon className="h-12 w-12" />
        </Link>
        <Link href="#" className="text-primary hover:text-muted">
          <InstagramIcon className="h-12 w-12" />
        </Link>
        <Link href="#" className="text-primary hover:text-muted">
          <LinkedInIcon className="h-12 w-12" />
        </Link>
      </div>
      <p className="text-sm text-primary">
        © 2024 Adamallys . All rights reserved
      </p>
    </div>
  );
};

export default CopyRight;
