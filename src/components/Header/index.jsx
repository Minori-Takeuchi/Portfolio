import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[100px] flex items-center justify-end text-3xl fixed top-0 left-0 z-50 font-comic">
      <nav className="flex mr-8 space-x-5">
        <Link href="/" className="hover:opacity-50">
          Home
        </Link>
        <Link href="/profile" className="hover:opacity-50">
          Profile
        </Link>
        <Link href="#" className="hover:opacity-50">
          Skills
        </Link>
        <Link href="#" className="hover:opacity-50">
          Works
        </Link>
        <Link href="#" className="hover:opacity-50">
          Contact
        </Link>
      </nav>
    </header>
  );
}