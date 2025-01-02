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

      <section className="flex-grow mt-8 flex flex-col items-center gap-12 mb-16">
        <h1 className="text-6xl font-bold text-white">About</h1>
        <div className="flex flex-col gap-8 w-[60%] mx-auto">
          <p className="text-xl text-gray-300 mx-auto">
            GloStream Tech is a software services and consulting company that
            specializes in building custom software solutions for businesses.
            Including data analytics dashboards and cloud infrastructure. We
            specialize in Python backend development, data engineering, and
            full-stack development with React and NextJS.
          </p>
          <div className="flex flex-col justify-start gap-6">
            <h2 className="text-2xl font-semibold text-white">
              Technologies We Work With:
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Backend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Django</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">AI</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>OpenAI, LLama, Gemini</li>
                  <li>LangChain</li>
                  <li>AWS Sagemaker</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Frontend
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Shadcn UI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Cloud & DevOps
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>Terraform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Data Engineering
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Apache Airflow</li>
                  <li>Apache Spark</li>
                  <li>dbt</li>
                  <li>Snowflake</li>
                  <li>BigQuery</li>
                </ul>
              </div>
            </div>
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
            <div className="flex flex-col items-center">
              <span>© 2024 GloStream Limited. All rights reserved</span>
              <span className="text-xs mt-1">
                1st Floor Oliaji Trade Center, Victoria, Seychelles
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
