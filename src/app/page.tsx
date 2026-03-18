import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import { RecommendGuestButton } from "@/components/recommend-guest-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
     <div className="mx-auto max-w-6xl px-8">
      {/* Nav */}
      <nav className="flex items-center justify-between py-6">
        <span className="hidden text-sm font-bold tracking-widest uppercase text-gray-900 sm:inline">
          Taking A Punt
        </span>
        <div className="sm:hidden">
          <RecommendGuestButton />
        </div>
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#" className="text-sm font-medium text-gray-900 underline underline-offset-4">
            Home
          </a>
          <RecommendGuestButton />
          <a href="https://www.foundersfunders.tech/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Founders &amp; Funders
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center">
        {/* Text */}
        <div className="relative z-10 w-full md:max-w-md md:flex-shrink-0">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Taking A Punt
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-widest text-gray-400">
            Season 1 Coming Soon
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-500">
            A different kind of podcast. Brought to you by{" "}
            <a
              href="https://www.foundersfunders.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 hover:underline"
            >
              Founders &amp; Funders
            </a>
            .
          </p>
          <div className="mt-8 max-w-sm">
            <WaitlistForm />
          </div>
          {/* Mobile illustration */}
          <div className="mt-8 md:hidden">
            <Image
              src="/punt1.jpg"
              alt="Illustration of people punting on the river"
              width={1400}
              height={800}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Desktop illustration */}
        <div className="absolute inset-y-0 right-0 hidden w-[65%] items-center md:flex">
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
    </div>
  );
}
