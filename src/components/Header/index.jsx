import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[100px] flex items-center justify-end bg-teal-100 font-comic text-3xl">
      <nav className="flex justify-between mr-8">
        <Link href="/" className="hover:opacity-50">
          Home
        </Link>
      </nav>
    </header>
  );
}
