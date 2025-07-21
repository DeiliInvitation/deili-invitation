import PricingBox from "@/components/PricingBox";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Link from "next/link";
import { PricingPlanData } from "@/data/data";

const Pricing: React.FC = () => {
  return (
    <div className="mx-5 md:mx-10 my-20 xl:mx-20 flex flex-col gap-5">
      <div>
        <Subtitle>👑 See Our Plan</Subtitle>
        <div className="flex items-center justify-between">
            <Title>Pricing Plan</Title>
            <Link href={`/pricing`} className="underline font-light">To Pricing Page</Link>
        </div>
        <p className="font-light text-sm md:text-base">Some information about our pricing. For more detail, check our pricing page.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
        {PricingPlanData.map((item, index) => (
          <PricingBox name={item.name} price={item.price} discount={item.discount} feature={item.featureList} mostUsed={item.mostUsed} buttonText="Lihat Detail" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
