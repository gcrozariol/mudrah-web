import Link from "next/link";
import Image from "next/image";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialLink({ href, src, alt }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={32} height={32} />
    </Link>
  );
}
