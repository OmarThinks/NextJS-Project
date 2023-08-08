import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/products"
        className="text-xl text-center mt-8 font-semibold underline dark:text-white hover:dark:text-neutral-300 hover:text-neutral-400 transition-colors duration-200"
      >
        Products
      </Link>
    </main>
  );
}
