import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Data Collection",
    text: "The first step in CRM is to collect and centralize customer data. This data can include contact information, purchase history, communication history, and more. This information is gathered from various sources, such as online forms, email interactions, social media, and sales transactions. The goal is to create database."
  },
  {
    id: 2,
    icon: how_2,
    heading: "Data Analysis",
    text: "Once the data is collected, it needs to be analyzed. CRM software uses data analytics tools to examine customer behavior, preferences, and patterns. This analysis helps businesses gain insights into their customers, such as what products or services they prefer, their communication preferences, and their purchase history.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Customer Engagement",
    text: "With the insights gained from data analysis, businesses marketing cam. CRM software allows companies to segment their customer base, so they can send the right messages to the right people at the right time. This can lead to more effective communication and improved customer engagement.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Feedback and Improvement",
    text: "CRM is an ongoing process. It's essential to collect feedback from customers and monitor the results of your CRM efforts. Businesses can use feedback to refine their strategies, improve customer experiences, and ultimately strengthen customer relationships. This feedback loop helps in making continuous improvements.",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="how CRM works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
