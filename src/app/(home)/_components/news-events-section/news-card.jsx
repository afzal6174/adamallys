export default function NewsCard({ heading, date, image }) {
  const Photo = image;
  return (
    <div className="bg-[#f5f6f8]">
      <div className="relative h-60 w-96">
        <Photo className="object-content" />
      </div>
      <p className="text-xl text-primary my-4">{date}</p>
      <p className="text-xl text-card-foreground my-4">{heading}</p>
    </div>
  );
}
