import Image from "next/image";
import Title from "../components/Title";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen w-full bg-cyan-100 flex items-center">
        <div className="flex flex-col ml-20">
          <h2 className="text-3xl text-gray-300">Thank you for visiting.</h2>
          <h1 className="text-6xl text-gray-500">Takeuchi Minori Portfolio</h1>
        </div>
      </section>

      {/* profile */}
      <section className="min-h-screen w-full bg-white">
        <Title title="Profile" />
        profile
      </section>

      {/* skills */}
      <section className="min-h-screen w-full bg-white">
        <Title title="Skills" />
        skills
      </section>

      {/* works */}
      <section className="min-h-screen w-full bg-white">
        <Title title="Works" />
        works
      </section>

      {/* contact */}
      <section className="min-h-[500px] w-full bg-cyan-100">
        <Title title="Contact" />
        contact
      </section>
    </main>
  );
}
