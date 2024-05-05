import React from "react";
import ServiceItem from "./ServiceItem";

const WebData = {
  title: "Web",
  Headline: "Quality and Excellence",
  Text: "Discover the range of services we offer, tailored to your needs.",
  items: [
    "Custom Development",
    "Consulting",
    "Project Management",
    "Support & Maintenance",
  ],
};

const MotionData = {
  title: "Motion",
  Headline: "Quality and Excellence",
  Text: "Discover the range of services we offer, tailored to your needs.",
  items: [
    "Custom Development",
    "Consulting",
    "Project Management",
    "Support & Maintenance",
  ],
};

function Service() {
  return (
    <section className=" px-48">
      <ServiceItem
        title={WebData.title}
        Headline={WebData.Headline}
        Text={WebData.Text}
        items={WebData.items}
      />
      <ServiceItem
        title={MotionData.title}
        Headline={MotionData.Headline}
        Text={MotionData.Text}
        items={MotionData.items}
      />
    </section>
  );
}

export default Service;
