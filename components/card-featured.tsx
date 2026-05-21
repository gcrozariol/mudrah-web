import Link from "next/link";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

interface CardFeaturedProps {
  item: {
    href: string;
    image: string;
    title: string;
  };
}

export default function CardFeatured({ item }: CardFeaturedProps) {
  const { href, image, title } = item;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center w-full p-3 pb-0 rounded-[28px] border-[1.5px] hover:bg-white/10 transition-colors"
    >
      <Image
        src={image}
        alt=""
        width={600}
        height={600}
        className="rounded-[20px] border-[1.5px] border-gray-200/20 object-cover max-h-75 lg:max-h-150"
      />
      <div className="flex w-full py-5">
        <span className="font-medium text-sm text-center flex-1 pl-12">
          {title}
        </span>
        <div className="pr-1 opacity-50">
          <EllipsisVertical className="h-4" />
        </div>
      </div>
    </Link>
  );
}
