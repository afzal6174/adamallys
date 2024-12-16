import { newsEvents } from "../../lib/data";
import NewsCard from "./news-card";

export default function NewsEvent() {
  return (
    <section className="container ml-auto flex flex-col md:flex-row justify-between py-12">
      <div className="w-full md:w-1/4">
        <h2 className="text-accent font-bold text-3xl uppercase my-4">News</h2>
        <div className="w-20 h-px bg-[#8B8B8B] my-4"></div>
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="font-semibold font-header capitalize text-3xl my-4">
          News & Events
        </h2>
        <div className="flex gap-4">
          {newsEvents.map((news) => (
            <NewsCard
              key={news.id}
              heading={news.heading}
              date={news.published_date}
              image={news.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
