import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface TemplateBoxProps {
  name: string;
  price: number;
  disc: number;
  type: string;
  image: StaticImageData;
}

const TemplateBox: React.FC<TemplateBoxProps> = ({
  name,
  price,
  disc,
  type,
  image,
}) => {
  return (
    <div className="rounded-2xl border border-black">
      <div className="relative group h-[300px]">
        <Image
          src={image}
          alt="image"
          className="object-cover object-top h-full max-h-[300px] rounded-t-xl"
        />
        <div className="absolute inset-0 w-full h-full rounded-t-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bg-black opacity-50 w-full h-full rounded-t-xl" />
          <Link
            href="/pricing"
            className="text-white font-semibold z-10 py-1 px-5 text-sm rounded-full border-[1px] border-white"
          >
            Lihat Detail
          </Link>
        </div>
        <span className="absolute bottom-0 right-0 text-white font-semibold text-xl bg-pinky py-2 px-4 rounded-tl-xl">
          #{type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold"># {name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-lightGray text-sm font-semibold line-through">
            {disc === 0 ? "" : "Rp" + (price / disc).toLocaleString("id-ID")}{" "}
          </p>
          <p className="text-lg font-semibold text-blue">
            Rp{price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateBox;
