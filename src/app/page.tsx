import * as React from "react";
import Head from "next/head";
import { ProjectList } from "@/components/lists/ProjectList";
import { StackList } from "@/components/lists/StackList";
import { PostList } from "@/components/lists/PostList";

import { Button } from "@/components/ui/button";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    post?: string;
    project?: string;
  };
}) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/b2fdcd6264.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="bg-neutral-900 p-1">
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
                    <ul className="flex items-center mt-4 font-medium space-x-3">
                      <li>
                        <a
                          href="mailto:profissionalsmbr@gmail.com"
                          target="_blank"
                          className="block text-white cursor-pointer"
                        >
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/Marcelosmbrrr"
                          target="_blank"
                          className="block text-white cursor-pointer"
                        >
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/marcelosmbr/"
                          target="_blank"
                          className="flex text-white cursor-pointer"
                        >
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                              clipRule="evenodd"
                            />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <span className="block text-gray-700">
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                              clipRule="evenodd"
                            />
                            <path
                              fill="currentColor"
                              d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                            />
                          </svg>
                        </span>
                      </li>
                      <li>
                        <span className="block text-gray-600">
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <svg
                              className="w-7 h-7"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </svg>
                        </span>
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
                    href="mailto:marcelosm.dev@gmail.com"
                    target="_blank"
                    className="mr-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-stone-800 bg-white rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Entre em Contato
                  </a>
                  <a
                    href="documents/cv.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-stone-800 bg-white rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Currículo
                  </a>
                </div>
              </section>
              <section>
                <StackList />
                <ProjectList category={searchParams?.project} />
                <PostList category={searchParams?.post} />
              </section>
            </main>
            <footer>
              <div className="w-full p-4 md:py-8">
                <hr className="my-6 border-stone-800 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2024 <span className="text-red-400">Portfolio SMBR</span>.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
