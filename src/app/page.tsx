import { Mail, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center gap-4 pt-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-5xl font-bold text-white">
              GloStream Tech
            </span>
            <span className="text-xl text-gray-300">
              Software services & consulting
            </span>
          </div>
          <a
            href="mailto:jbarrella@glostreamtech.com"
            className="flex flex-row rounded-md border-2 border-white px-4 py-2 text-white transition-colors duration-200 hover:bg-white hover:text-black w-fit"
          >
            <Mail className="mr-2" />
            Contact Us
          </a>
        </div>
        <Image
          src="/logo-sqaure-zinc-900.png"
          alt="GloStream Tech"
          width={200}
          height={200}
        />
      </div>

      <div className="w-[40%] mx-auto border border-gray-700 my-8"></div>

      <section className="flex-grow mt-8 flex flex-col items-center gap-12 mb-16">
        <h1 className="text-6xl font-bold text-white">
          Our Projects <BriefcaseBusiness className="inline-block w-8 h-8" />
        </h1>
        <div className="flex flex-row gap-8">
          <div>
            <a href="https://keyseer.com" target="_blank">
              <div className="flex flex-col items-center justify-center gap-4 p-4 w-[440px] h-[240px] rounded-md bg-[url('/keyseer-screenshot.png')] bg-cover bg-center hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <span className="text-white bg-black text-xl p-2 rounded-md font-semibold z-10">
                  KeySeer
                </span>
              </div>
            </a>
          </div>
          <div>
            <a href="https://zoomprop.com" target="_blank">
              <div className="flex flex-col items-center justify-center gap-4 p-4 w-[440px] h-[240px] rounded-md bg-[url('/zoomprop-screenshot.png')] bg-cover bg-center hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <span className="text-white bg-black text-xl p-2 rounded-md font-semibold z-10">
                  Zoomprop
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 max-sm:flex-col max-sm:gap-2">
            <span className="text-white max-sm:scale-75">
              <Image
                src="/logo-sqaure-zinc-900.png"
                alt="GloStream Tech"
                width={50}
                height={50}
              />
            </span>
            © 2024 GloStream Limited. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
