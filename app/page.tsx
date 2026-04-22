import SocialLink from "@/components/social-link";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";

import data from "@/data.json";
import CardFeatured from "@/components/card-featured";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 h-dvh max-w-145 mx-auto items-center">
      <header className="pt-8">
        <Image src="/logo-white.png" alt="Logo" width={256} height={256} />
        <div className="mt-4 flex justify-center space-x-4">
          {data.socials.map((item) => (
            <SocialLink
              key={item.id}
              href={item.href}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </header>
      <main className="flex flex-col gap-3.5 py-4 w-full max-w-143.75 px-3.5">
        {data.projects.map((item) =>
          item.featured ? (
            <CardFeatured key={item.id} item={item} />
          ) : (
            <Card key={item.id} item={item} />
          ),
        )}
      </main>
      <footer className="text-sm text-gray-200">
        Developed by{" "}
        <Link
          href="https://instagram.com/mixlab.wav"
          target="_blank"
          className="underline"
        >
          @mixlab.wav
        </Link>
      </footer>
    </div>
  );
}
