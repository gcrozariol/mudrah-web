import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Download,
  FileText,
  Mail,
  Music,
  Sparkles,
} from "lucide-react";

type DownloadItem = {
  title: string;
  description: string;
  href: string;
};

type ArtistPhoto = {
  src: string;
  alt: string;
  description: string;
};

const pressDownloads: DownloadItem[] = [
  {
    title: "Logo branco — PNG",
    description: "Versão principal para fundos escuros.",
    href: "/media-kit/logos/mudrah-logo-white.png",
  },
  {
    title: "Logo preto — PNG",
    description: "Versão para fundos claros e materiais impressos.",
    href: "/media-kit/logos/mudrah-logo-black.png",
  },
  {
    title: "Logo branco vetorial — SVG",
    description: "Arquivo em alta qualidade para produção gráfica.",
    href: "/media-kit/logos/mudrah-logo-white.svg",
  },
  {
    title: "Logo preto vetorial — SVG",
    description: "Arquivo em alta qualidade para produção gráfica.",
    href: "/media-kit/logos/mudrah-logo-black.svg",
  },
  {
    title: "Release da banda — PDF",
    description: "Biografia, ficha técnica e informações para contratação.",
    href: "/media-kit/mudrah-release.pdf",
  },
];

const artistPhotos: ArtistPhoto[] = [
  {
    src: "/media-kit/photos/portuga.png",
    alt: "Foto promocional da banda Mudrah",
    description: "Portuga: Vocal e guitarra",
  },
  {
    src: "/media-kit/photos/gui.png",
    alt: "Mudrah em sessão de fotos promocional",
    description: "Gui: Bateria",
  },
  {
    src: "/media-kit/photos/gabs.png",
    alt: "Mudrah tocando ao vivo",
    description: "Gabs: Guitarra",
  },
  {
    src: "/media-kit/photos/deryk.png",
    alt: "Mudrah tocando ao vivo",
    description: "Deryk: Baixo",
  },
];

const highlights = [
  "Rock autoral brasileiro com peso, atmosfera e refrões marcantes.",
  "Material pronto para divulgação: logos, fotos, release e contatos.",
];

function validateMediaKitData() {
  const downloadLinksAreValid = pressDownloads.every(
    (item) => item.title && item.description && item.href.startsWith("/"),
  );
  const photosAreValid = artistPhotos.every(
    (photo) => photo.src.startsWith("/") && photo.alt.length > 0,
  );
  const highlightsAreValid =
    highlights.length === 2 && highlights.every(Boolean);

  return downloadLinksAreValid && photosAreValid && highlightsAreValid;
}

export default function Page() {
  const dataIsValid = validateMediaKitData();

  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-8 text-white sm:px-6 lg:px-8">
      {!dataIsValid ? (
        <div className="mb-6 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
          Revise os dados do media kit: algum link, título ou texto alternativo
          está vazio.
        </div>
      ) : null}

      <header className="flex items-center justify-between gap-4">
        <Link href="/" className="">
          <Image
            src="/logo-white.png"
            alt="Mudrah"
            width={128}
            height={128}
            className=""
          />
        </Link>

        <Link
          href="mailto:booking@mudrahoficial.com.br"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/85"
        >
          <Mail size={16} />
          Contratar
        </Link>
      </header>

      <section className="grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white/70 backdrop-blur">
            <Sparkles size={14} />
            Media kit
          </div>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            <span className="opacity-50">Tudo sobre a</span> Mudrah{" "}
            <span className="opacity-50">para o seu evento</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Uma página direta para contratantes conhecerem a banda, acessarem
            materiais de divulgação em alta qualidade e entrarem em contato com
            rapidez.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/media-kit/mudrah-release.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white/85"
            >
              <FileText size={18} />
              Baixar PDF
            </Link>

            <Link
              href="#downloads"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/30 hover:bg-white/15"
            >
              <Download size={18} />
              Ver arquivos
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
          <Image
            src="/cover.jpg"
            alt="Capa promocional da Mudrah"
            width={900}
            height={900}
            className="aspect-square w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="py-14">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">
              Sobre a banda
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              <span className="opacity-50">Som</span> pesado,{" "}
              <span className="opacity-50">identidade</span> forte{" "}
              <span className="opacity-50">e</span> presença de palco
            </h2>
          </div>

          <div className="rounded-4xl border border-white/10 bg-black/35 p-6 text-base leading-8 text-white/70 backdrop-blur">
            <p>
              A Mudrah é uma banda brasileira de rock autoral que une peso,
              melodia e intensidade. Este media kit reúne os principais
              materiais para divulgação, imprensa e contratação, incluindo logos
              em alta, release oficial e fotos promocionais.
            </p>
            <p className="mt-5">
              Use os arquivos abaixo em cartazes, posts, matérias, chamadas de
              programação e propostas comerciais. Para formatos específicos,
              entre em contato com nosso time de marketing.
            </p>
            <Link
              href="mailto:marketing@mudrahoficial.com.br?subject=Contratação%20Mudrah"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-black/80"
            >
              <Mail size={18} />
              marketing@mudrahoficial.com.br
            </Link>
          </div>
        </div>
      </section>

      <section id="downloads" className="py-10">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">
              Divulgação e produção gráfica
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              Arquivos em alta qualidade
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pressDownloads.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              download
              className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
            >
              <span>
                <span className="block text-lg font-bold text-white">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-white/55">
                  {item.description}
                </span>
              </span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:scale-105">
                <Download size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
            Fotos dos artistas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {artistPhotos.map((photo) => (
            <Link
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-2 backdrop-blur transition hover:-translate-y-1 hover:border-white/25"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={700}
                height={900}
                className="aspect-4/5 rounded-3xl object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-b-3xl rounded-t-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  {photo.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10 overflow-hidden rounded-4xl border border-white/10 bg-white p-6 text-black sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Music size={14} />
              Booking
            </div>
            <h2 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              Quer levar a Mudrah para o seu palco?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">
              Envie detalhes do evento para o contato da banda.
            </p>
          </div>

          <Link
            href="mailto:booking@mudrahoficial.com.br?subject=Contratação%20Mudrah"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-black/80"
          >
            <Mail size={18} />
            booking@mudrahoficial.com.br
          </Link>
        </div>
      </section>
    </main>
  );
}
