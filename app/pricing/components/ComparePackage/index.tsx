import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

const pricingFeatures = [
  {
    feature: "Section 1",
    basic: true,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 2",
    basic: true,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 3",
    basic: true,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 4",
    basic: true,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 5",
    basic: false,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 6",
    basic: false,
    premium: true,
    vip: true,
  },
  {
    feature: "Section 7",
    basic: false,
    premium: false,
    vip: true,
  },
  {
    feature: "Section 8",
    basic: false,
    premium: false,
    vip: true,
  },
];

const addPack = [
  {
    addFeat: "Additional Feature 1",
    price: 50000
  },
  {
    addFeat: "Additional Feature 2",
    price: 30000
  },
  {
    addFeat: "Additional Feature 3",
    price: 25000
  },
  {
    addFeat: "Additional Feature 4",
    price: 150000
  },
  {
    addFeat: "Additional Feature 5",
    price: 75000
  },
  {
    addFeat: "Additional Feature 6",
    price: 25000
  },
  {
    addFeat: "Additional Feature 7",
    price: 30000
  },
  {
    addFeat: "Additional Feature 8",
    price: 50000
  },
]

const ComparePackage: React.FC = () => {
  return (
    <div className="my-10 md:my-20 flex flex-col gap-5">
      <div className="flex flex-col items-center ">
        <Subtitle>👑 Compare Package</Subtitle>
        <Title>Choose what fits for you</Title>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=""># Feature</TableHead>
              <TableHead className="text-center">Basic</TableHead>
              <TableHead className="text-center">Premium</TableHead>
              <TableHead className="text-center bg-[#FFF6F6] rounded-t-xl">VIP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingFeatures.map((pricing) => (
              <TableRow key={pricing.feature} className="">
                <TableCell className="font-light">{pricing.feature}</TableCell>
                <TableCell className="">{pricing.basic ? <FaRegCircleCheck className="text-blue w-full"/> : <FaRegCircleXmark className="text-red-500  w-full"/>}</TableCell>
                <TableCell className="">{pricing.premium ? <FaRegCircleCheck className="text-blue w-full"/> : <FaRegCircleXmark className="text-red-500 w-full"/>}</TableCell>
                <TableCell className={`bg-[#FFF6F6]`}>
                  {pricing.vip ? <FaRegCircleCheck className="text-blue w-full"/> : <FaRegCircleXmark className="text-red-500 w-full"/>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Additional Pack/Feature</TableHead>
              <TableHead className="text-center bg-[#FFF6F6] rounded-t-xl">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {addPack.map((feature) => (
              <TableRow key={feature.addFeat} className="">
                <TableCell className="font-light">{feature.addFeat}</TableCell>
                <TableCell className={`bg-[#FFF6F6] font-bold text-center`}>
                  Rp{feature.price.toLocaleString("id-ID")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparePackage;
