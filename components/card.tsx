import Link from "next/link";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

interface CardProps {
  item: {
    href: string;
    image: string;
    title: string;
  };
}

export default function Card({ item }: CardProps) {
  const { href, image, title } = item;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-1.5 px-1.5 rounded-full flex justify-between items-center border-[1.5px] hover:bg-white/10 transition-colors"
    >
      <Image
        src={image}
        alt=""
        width={48}
        height={48}
        className="rounded-full"
      />
      <span className="font-medium text-sm px-2 text-center">{title}</span>
      <div className="pr-1 opacity-50">
        <EllipsisVertical className="h-4" />
      </div>
    </Link>
  );
}
