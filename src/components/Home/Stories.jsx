import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import random from "../../assets/random.png";
import automation from "../images/automation.jpg";

const NewsCard = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={automation} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Pat Sullivan</h1>
        <p className="text-[#BFBFC8]">@Pat Sullivan222</p>
      </div>
    </div>
  </div>
);

export default function Stories() {
  return (
    <section className="my-14">
      <Container>
        <div className="pt-14 pb-4 h-[700px] overflow-auto bg-[#F7F7F7] flex items-center lg:flex-nowrap flex-wrap gap-1">
          <article className="lg:w-1/2 w-full lg:pb-0 pb-4 flex flex-col lg:items-start items-center lg:ml-14 lg:mt-52">
            <SectionTitle title="Customer Relationship Infographics" />
            {/* <p className="text-[#5B6469]">Let's see what people say about us</p> */}
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto">
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Data Analytics: Use graphs and charts to showcase key CRM metrics, such as customer acquisition, retention rates, and customer lifetime value " />
              <NewsCard text="Sales Funnel: Create a funnel diagram illustrating the stages of the sales process, from lead generation to closing deals, with data on conversion rates at each stage. " />
              <NewsCard text="Customer Segmentation: Use pie charts or bar graphs to display how your customer base is segmented by demographics, behaviors, or preferences." />
            </div>
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Customer Satisfaction: Show survey results or Net Promoter Scores (NPS) to represent customer satisfaction levels with graphical elements like smiley faces or scales" />
              <NewsCard text="Communication Channels: Visualize the different channels of communication you use, such as email, social media, and phone, and how they are utilized in your CRM strategy." />
              <NewsCard text="Automation and Technology: Illustrate how CRM software and automation tools streamline customer interactions and data management." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
