import PricingBox from "@/components/PricingBox";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Link from "next/link";
import { PricingPlanData } from "@/data/data";
import ComparePackage from "./components/ComparePackage";
import Faq from "./components/Faq";

const PricingPage: React.FC = () => {
  return (
    <div className="mx-5 md:mx-10 my-10 md:my-20">
      <div className="flex flex-col items-center ">
        <Subtitle>👑 See Our Plan</Subtitle>
        <Title>Pricing Plan</Title>
        <p className="font-light text-sm md:text-base text-center">
          Some information about our pricing. For more detail, check our pricing
          page.
        </p>
      </div>
      <hr className="mt-4 mb-8" />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
        {PricingPlanData.map((item, index) => (
          <PricingBox
            name={item.name}
            price={item.price}
            discount={item.discount}
            feature={item.featureList}
            mostUsed={item.mostUsed}
            buttonText="Contact Us"
            key={index}
          />
        ))}
      </div>
      <ComparePackage />
      <Faq />
    </div>
  );
};

export default PricingPage;
