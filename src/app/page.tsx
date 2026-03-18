import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6">
        <span className="text-sm font-bold tracking-widest uppercase text-gray-900">
          Punts &amp; Pints
        </span>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-900 underline underline-offset-4">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            About us
          </a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Blog
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center px-10">
        {/* Text */}
        <div className="relative z-10 max-w-md flex-shrink-0">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Coming
            <br />
            soon
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-500">
            Punts and pints — the best way to enjoy
            Cambridge. Guided punting tours paired with
            the finest local craft beers. Stay tuned.
          </p>
          <div className="mt-8 max-w-sm">
            <WaitlistForm />
          </div>
        </div>

        {/* Illustration */}
        <div className="absolute inset-y-0 right-0 flex w-[65%] items-center">
          <Image
            src="/punt1.jpg"
            alt="Illustration of people punting on the river"
            width={1400}
            height={800}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </section>
    </div>
  );
}
