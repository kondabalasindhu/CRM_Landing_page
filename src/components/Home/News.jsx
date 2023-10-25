import React from "react";
import { news_2, news_3, news_4, news_5 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    topic: "Management",
    text:
      "Management is the administration of organizations, whether they are a business, a nonprofit organization, or a government body through business administration, nonprofit management, or the political science sub-field of public administration respectively",
    image: news_2,
  },
  {
    id: 2,
    text: "Marketing is the process of identifying goods and services for the satisfaction and retention of those customers. It is one of the primary components of business management and commerce",
    topic: "Marketing",
    image: news_3,
  },
  {
    id: 3,
    text: "Automation describes a wide range of technologies that reduce human intervention in processes, namely by predetermining decision criteria, subprocess relationships, and related actions, as well as embodying those predeterminations in machines ",
    topic:
      "Automation",
    image: news_4,
  },
  {
    id: 4,
    text: "Software is a set of computer programs and associated documentation and data. This is in contrast to hardware, from which the system is built and which actually performs the work. ",
    topic: "software",
    image: news_5,
  },
  {
    id: 5,
    text: "Business is the practice of making one's living or making money by producing or buying and selling products. It is also any activity or enterprise entered into for profit. ",
    topic: "Bussiness",
    image: news_2,
  },
  {
    id: 6,
    text: "Analytics is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data. It also entails applying data patterns toward effective decision-making",
    topic:
      "Analytics",
    image: news_3,
  },
  {
    id: 7,
    text: "Enterprise resource planning is the integrated management of main business processes, often in real-time and mediated by software and technology ",
    topic:
      "Enterprise resource planning",
    image: news_5,
  },
  {
    id: 8,
    text: "Lead management is a set of methodologies, systems, and practices designed to generate new potential business clientele, generally operated through a variety of marketing campaigns or programs. ",
    topic: "Lead management",
    image: news_4,
  },
];

export default function News() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <SectionTitle title="some topics related to customer relationship management (CRM)" classes="text-center" />
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-4 mt-8">
            {cards.map((card) => (
              <div
                className="h-auto w-[320px] mx-auto px-2 pt-2 pb-4 rounded-md border-2 border-gray-200 relative z-10"
                key={card.id}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img src={card.image} alt="fund1" />
                </div>
                <article className="px-2">
                  <h2 className="font-bold text-[25px] hover:text-[#6D9886] transition-colors cursor-pointer my-4">
                    {card.topic}
                  </h2>
                  <p className="font-light text-[14px]">{card.text}</p>
                  <button className="block mx-auto text-[#6D9886] mt-6">
                    Read more
                  </button>
                </article>
              </div>
            ))}
          </div>
          <div className="text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
            <a className="cursor-pointer">More Topics</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
