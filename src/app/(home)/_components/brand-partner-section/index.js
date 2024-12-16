import { brands } from "@/assets/images";

export default function BrandPartner() {
  return (
    <section className="container mx-auto py-12">
      <div class="my-8">
        <h2 className="text-accent font-bold text-3xl uppercase my-4">
          Our Brands
        </h2>
        <div className="w-20 h-px bg-[#8B8B8B] my-4"></div>
      </div>
      <p className="text-muted text-base leading-4 my-4">
        Adamallys is the authorized distributor or stockist reseller for
        numerous premium brands used in the marine and industrial sectors.
        Elevate your operations with reliable, immediate access to the
        UAE&apos;s most extensive range of top-quality marine stores, ensuring
        you receive only the best in performance and durability.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 my-4">
        {brands.map((BrandLogo, index) => {
          return (
            <div key={index} className="relative h-32 w-full">
              <BrandLogo className="object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
