import { logos } from "@/assets/images";

export default function Accreditation() {
  return (
    <section className="container mx-auto bg-accent-gradient py-12">
      <div class="my-12">
        <h2 className="text-destructive text-3xl pb-4">
          Certifications & Memberships
        </h2>
        <div className="w-20 h-px bg-white"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {logos.map((Logo, index) => {
          return (
            <div key={index} className="relative h-32 w-32">
              <Logo className="object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
