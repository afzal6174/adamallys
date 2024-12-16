import { servicePhotos } from "@/assets/images";
import PhotoCard from "./photo-card";

export default function Services() {
  return (
    <section className="container mx-auto bg-muted flex flex-col md:flex-row justify-between py-12">
      <div className="w-full md:w-1/4">
        <h2 className="text-accent font-semibold text-3xl uppercase my-4">
          What we do
        </h2>
        <div className="w-20 h-px bg-[#8B8B8B] my-4"></div>
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="font-semibold font-header capitalize text-3xl my-4">
          Services
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {servicePhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              caption={photo.caption}
              image={photo.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
