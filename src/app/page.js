import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen w-full bg-cyan-100 flex items-center">
        <div className="flex flex-col ml-20">
          <h2 className="text-3xl text-gray-300">Thank you for visiting.</h2>
          <h1 className="text-6xl text-gray-500">Takeuchi Minori Portfolio</h1>
        </div>
      </section>
      <section className="min-h-screen w-full bg-white">profile</section>
    </main>
  );
}
