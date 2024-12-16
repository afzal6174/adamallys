import {
  CallIcon,
  FlyingBirdIcon,
  LinkedinIcon,
  MailIcon,
  SIcon,
  TIcon,
} from "@/assets/icons";

export default function VerticalIconMenu() {
  return (
    <div className="fixed right-4 top-1/4 flex flex-col items-center space-y-4 z-50">
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <MailIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <CallIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <LinkedinIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <FlyingBirdIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <SIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 shadow-lg">
        <TIcon className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
}
