import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    price: "234,378,123",
    date: "14.05.24",
    topic: "CRM helps you to eliminate the repetitive work load and mundane tasks by automating the workflow. You can do so by setting triggers based on the ",
    image: funds_1,
    circleText: "Workflow automation",
  },
  {
    id: 2,
    price: "103,000",
    date: "14.05.24",
    topic:
      "Sales automation involves software that helps to automate the entire sales activities thus reducing the repetitive and manual work load setting triggers based .",
    image: funds_2,
    circleText: "Sales Automation",
  },
  {
    id: 3,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "lead management helps you keep track of the prospects that are pouring in. The CRM stores all the information about the leads in  setting triggers based ",
    image: funds_8,
    circleText: "Lead management",
  },
  {
    id: 4,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Pipeline management in CRM helps to track and manage each and every sales opportunity that passes etting triggers based  through the sales funnel in order",
    image: funds_7,
    circleText: "Pipeline management",
  },
  {
    id: 5,
    price: "234,378,123",
    date: "14.05.24",
    topic: "Marketing automation is automating the marketing activities that help you target the customers setting triggers based  and audiences with personalized  ",
    image: funds_7,
    circleText: "Marketing automation",
  },
  {
    id: 6,
    price: "103,000",
    date: "14.05.24",
    topic: "Customer service is important for business as it helps to retain and increase the lifetime value of  setting triggers based  a customer. CRM has a complete database",
    image: funds_8,
    circleText: "Customer service",
  },
  {
    id: 7,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "CRM software can manage the entire work force of an organization. Businesses can leverage this technology  setting triggers based in order to equip the human resources working",
    image: funds_1,
    circleText: "Human Resource Management",
  },
  {
    id: 8,
    price: "3,120,000",
    date: "14.05.24",
    topic: "Sales automation involves software that helps to automate the entire sales activities thus reducing the setting triggers based  repetitive and manual work load.",
    image: funds_2,
    circleText: "Business reporting",
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
