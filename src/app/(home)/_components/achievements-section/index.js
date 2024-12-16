import {
  BadgeIcon,
  CalenderIcon,
  DashboardIcon,
  InventoryIcon,
  SailingIcon,
  ShippingIcon,
} from "@/assets/icons";
import { ShipImage } from "@/assets/images";
export default function Achievements() {
  const milestones = [
    { icon: CalenderIcon, value: "50+", label: "Years in Business" },
    { icon: SailingIcon, value: "1 million+", label: "Ship Supplied" },
    { icon: BadgeIcon, value: "250+", label: "Employees" },
    { icon: ShippingIcon, value: "50+", label: "Delivery Trucks/ Reefers" },
    { icon: InventoryIcon, value: "45,000+", label: "Product Lines" },
    {
      icon: DashboardIcon,
      value: "400,000",
      label: "Total Sq.Ft Storage for stock owners spares, and packing",
    },
  ];
  return (
    <section className="bg-destructive-gradient z-1 relative bg-cover bg-center text-destructive">
      <ShipImage className="z-0 object-cover" />
      <div className="p-12 relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-black/15 border-white backdrop-blur border-[0.5px] border-muted-foreground p-6 rounded-lg"
            >
              <div className="text-5xl mb-4">
                <item.icon />
              </div>
              <div className="text-3xl font-bold">{item.value}</div>
              <p className="text-lg leading-6">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Rectangle 4033 */
