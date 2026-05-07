import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-sm text-gray-200 pb-18 bottom-0 w-full text-center">
      Developed by{" "}
      <Link
        href="https://instagram.com/mixlab.wav"
        target="_blank"
        className="underline"
      >
        @mixlab.wav
      </Link>
    </footer>
  );
}
