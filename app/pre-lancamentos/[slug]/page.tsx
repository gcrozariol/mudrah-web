import { ExternalLink, Headphones } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { previews } from "@/data.json";

type ReleaseSlug = keyof typeof previews;

function isReleaseSlug(slug: string): slug is ReleaseSlug {
  return slug in previews;
}

export function generateStaticParams() {
  return Object.keys(previews).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/pre-lancamentos/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  if (!isReleaseSlug(slug)) {
    return {};
  }

  const release = previews[slug];

  return {
    title: `${release.title} | ${release.artist}`,
    description: `Ouça uma prévia e faça o pre-save de ${release.title}.`,
  };
}

export default async function PreReleasePage({
  params,
}: PageProps<"/pre-lancamentos/[slug]">) {
  const { slug } = await params;

  if (!isReleaseSlug(slug)) {
    notFound();
  }

  const release = previews[slug];

  return (
    <main className="relative isolate flex min-h-dvh w-full items-center justify-center overflow-hidden px-5 py-10 text-center">
      <Image
        src={release.cover}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-110 object-cover blur-2xl"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />

      <section className="flex w-full max-w-xl flex-col items-center">
        <Image
          src="/logo-white.png"
          alt="Mudrah"
          width={256}
          height={256}
          className="mb-8 h-32 w-32 object-contain sm:h-40 sm:w-40 scale-150"
        />

        <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <Headphones aria-hidden="true" size={16} />
          Ouça em primeira mão
        </div>

        <h1 className="text-4xl font-bold leading-tight text-white">
          {release.title}
        </h1>

        <audio
          className="mt-8 w-full max-w-md"
          controls
          controlsList="nodownload"
          preload="metadata"
          aria-label={`Prévia de ${release.title}`}
        >
          <source src={release.audio} type="audio/mpeg" />
          Seu navegador não suporta a reprodução de áudio.
        </audio>

        <Link
          href={release.preSaveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 border border-white bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Faça o pre-save
          <ExternalLink aria-hidden="true" size={17} />
        </Link>
      </section>
    </main>
  );
}
