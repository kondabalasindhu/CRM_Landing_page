import { cmr_image, discover_1, discover_2, discover_3 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: discover_1,
    title: "Technology Partners",
  },
  {
    id: 2,
    image: cmr_image,
    title: "CRM",
  },
  {
    id: 3,
    image: discover_3,
    title: "Groups",
  },
];

const DiscoverCard = ({ card }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={card.image} alt="discover_image" />
      <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
        {card.title}
      </div>
    </div>
  );
};

export default function Discover() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <SectionTitle title="discover" />
          <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <DiscoverCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
