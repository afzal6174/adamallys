import logo1 from "./logo/logo1.webp";
import logo10 from "./logo/logo10.webp";
import logo11 from "./logo/logo11.webp";
import logo12 from "./logo/logo12.webp";
import logo2 from "./logo/logo2.webp";
import logo3 from "./logo/logo3.webp";
import logo4 from "./logo/logo4.webp";
import logo5 from "./logo/logo5.webp";
import logo6 from "./logo/logo6.webp";
import logo7 from "./logo/logo7.webp";
import logo8 from "./logo/logo8.webp";
import logo9 from "./logo/logo9.webp";

import brand1 from "./brand/brand1.webp";
import brand10 from "./brand/brand10.webp";
import brand11 from "./brand/brand11.webp";
import brand12 from "./brand/brand12.webp";
import brand13 from "./brand/brand13.webp";
import brand14 from "./brand/brand14.webp";
import brand2 from "./brand/brand2.webp";
import brand3 from "./brand/brand3.webp";
import brand4 from "./brand/brand4.webp";
import brand5 from "./brand/brand5.webp";
import brand6 from "./brand/brand6.webp";
import brand7 from "./brand/brand7.webp";
import brand8 from "./brand/brand8.webp";
import brand9 from "./brand/brand9.webp";

import photo3 from "./containers.webp";
import photo2 from "./marine-logistics.webp";
import photo1 from "./ship-supply.webp";
import photo4 from "./warehouse.webp";

import news1 from "./news/news1.webp";
import news2 from "./news/news2.webp";
import news3 from "./news/news3.webp";

import shipImage from "./ship.webp";

import Image from "next/image";

export const ShipImage = (rest) => (
  <Image src={shipImage} alt="background image of ship" fill {...rest} />
);

const ServicePhoto1 = (rest) => (
  <Image src={photo1} alt="Ship Supply" fill {...rest} />
);
const ServicePhoto2 = (rest) => (
  <Image src={photo2} alt="Marine Logistics" fill {...rest} />
);
const ServicePhoto3 = (rest) => (
  <Image src={photo3} alt="containers at ship" fill {...rest} />
);
const ServicePhoto4 = (rest) => (
  <Image src={photo4} alt="warehouse" fill {...rest} />
);

export const servicePhotos = [
  {
    id: 1,
    caption: "Ship Supply",
    image: ServicePhoto1,
  },
  {
    id: 2,
    caption: "Marine Logistics",
    image: ServicePhoto2,
  },
  {
    id: 3,
    caption: "Distributors & Stockists",
    image: ServicePhoto3,
  },
  {
    id: 4,
    caption: "Warehousing",
    image: ServicePhoto4,
  },
];

const Logo1 = (rest) => <Image src={logo1} alt="logo" fill {...rest} />;
const Logo2 = (rest) => <Image src={logo2} alt="logo" fill {...rest} />;
const Logo3 = (rest) => <Image src={logo3} alt="logo" fill {...rest} />;
const Logo4 = (rest) => <Image src={logo4} alt="logo" fill {...rest} />;
const Logo5 = (rest) => <Image src={logo5} alt="logo" fill {...rest} />;
const Logo6 = (rest) => <Image src={logo6} alt="logo" fill {...rest} />;
const Logo7 = (rest) => <Image src={logo7} alt="logo" fill {...rest} />;
const Logo8 = (rest) => <Image src={logo8} alt="logo" fill {...rest} />;
const Logo9 = (rest) => <Image src={logo9} alt="logo" fill {...rest} />;
const Logo10 = (rest) => <Image src={logo10} alt="logo" fill {...rest} />;
const Logo11 = (rest) => <Image src={logo11} alt="logo" fill {...rest} />;
const Logo12 = (rest) => <Image src={logo12} alt="logo" fill {...rest} />;
export const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
];

const Brand1 = (rest) => <Image src={brand1} alt="logo" fill {...rest} />;
const Brand2 = (rest) => <Image src={brand2} alt="logo" fill {...rest} />;
const Brand3 = (rest) => <Image src={brand3} alt="logo" fill {...rest} />;
const Brand4 = (rest) => <Image src={brand4} alt="logo" fill {...rest} />;
const Brand5 = (rest) => <Image src={brand5} alt="logo" fill {...rest} />;
const Brand6 = (rest) => <Image src={brand6} alt="logo" fill {...rest} />;
const Brand7 = (rest) => <Image src={brand7} alt="logo" fill {...rest} />;
const Brand8 = (rest) => <Image src={brand8} alt="logo" fill {...rest} />;
const Brand9 = (rest) => <Image src={brand9} alt="logo" fill {...rest} />;
const Brand10 = (rest) => <Image src={brand10} alt="logo" fill {...rest} />;
const Brand11 = (rest) => <Image src={brand11} alt="logo" fill {...rest} />;
const Brand12 = (rest) => <Image src={brand12} alt="logo" fill {...rest} />;
const Brand13 = (rest) => <Image src={brand13} alt="logo" fill {...rest} />;
const Brand14 = (rest) => <Image src={brand14} alt="logo" fill {...rest} />;
export const brands = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
  Brand10,
  Brand11,
  Brand12,
  Brand13,
  Brand14,
];

export const News1 = (rest) => (
  <Image src={news1} alt="news image" fill {...rest} />
);
export const News2 = (rest) => (
  <Image src={news2} alt="news image" fill {...rest} />
);
export const News3 = (rest) => (
  <Image src={news3} alt="news image" fill {...rest} />
);
