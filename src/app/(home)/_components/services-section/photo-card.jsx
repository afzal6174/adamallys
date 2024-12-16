export default function PhotoCard({ caption, image }) {
  const Photo = image;
  return (
    <div className="relative h-60 w-auto first:col-span-2 last:col-span-2 col-span-3">
      <Photo className="object-cover z-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(203.33deg, rgba(0, 0, 0, 0) 44.78%, #000000 118.03%)",
        }}
      ></div>
      <p className="absolute top-48 left-4 text-base text-destructive z-50">
        {caption}
      </p>
    </div>
  );
}
