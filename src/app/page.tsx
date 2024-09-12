import * as React from "react";
import { ProjectList } from "@/components/lists/ProjectList";
import { StackList } from "@/components/lists/StackList";
import { PostList } from "@/components/lists/PostList";
// Shadcn
import { Button } from "@/components/ui/button";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    post?: string;
  };
}) {
  return (
    <div className="bg-stone-950 text-black/50">
      <img
        id="background"
        className="absolute -left-20 top-0 max-w-[877px]"
        src="https://laravel.com/assets/img/welcome/background.svg"
      />
      <div className="relative min-h-screen flex flex-col items-center justify-center selection:text-white">
        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
          <header>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center text-white md:text-red-500">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap">
                    smbr
                  </span>
                </div>
                <div className="flex justify-between items-center w-auto order-1">
                  <ul className="flex items-center mt-4 font-medium space-x-8">
                    {/* <li>
                      <a
                        href="https://www.linkedin.com/in/marcelosmbr/"
                        target="_blank"
                        className="flex py-2 text-white rounded lg:p-0 hover:text-red-400 cursor-pointer"
                      >
                        Blog
                      </a>
                    </li>*/}
                    <li>
                      <a
                        href="https://github.com/Marcelosmbrrr"
                        target="_blank"
                        className="block py-2 text-white rounded lg:p-0 hover:text-red-400 cursor-pointer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/marcelosmbr/"
                        target="_blank"
                        className="flex py-2 text-white rounded lg:p-0 hover:text-red-400 cursor-pointer"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <main className="mt-6">
            <section className="grid max-w-screen-xl mt-10 px-4 mx-auto lg:gap-8 xl:gap-0 py-20 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-4xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">
                  Marcelo<span className="text-red-500">SMBR</span>
                </h1>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
                  Desenvolvedor Fullstack
                </p>
                <a
                  href="mailto:profissionalsmbr@gmail.com"
                  target="_blank"
                  className="inline-flex mr-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg"
                >
                  Entre em Contato
                </a>
                <a
                  href="documents/cv.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg"
                >
                  Currículo
                </a>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
                {/* <img
                  src="images/praise.png"
                  className="hover:scale-105 transition duration-500 ease-in-out transform"
                  alt="hero-draw"
                /> */}
              </div>
            </section>
            <section>
              <StackList />
              <ProjectList />
              <PostList group={searchParams?.post} />
            </section>
          </main>
          <footer>
            <div className="w-full p-4 md:py-8">
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024 <span className="text-red-400">Portfolio SMBR</span>.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
