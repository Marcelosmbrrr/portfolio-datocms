import * as React from "react";
import { performRequest } from "@/libs/datocms";

interface Stack {
  name: string;
  description: string;
  icons: string[];
  studied: boolean;
}

const QUERY = `
  query {
    allStacks {
      id
      name
      icons
      description
      studied
    }
  }
`;

export async function StackList() {
  const {
    data: { allStacks },
  } = await performRequest({ query: QUERY });

  function getIconCdn(icon: string) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
  }

  function renderIcons(icons: string[]) {
    return icons.map((icon) => (
      <img
        key={icon}
        src={getIconCdn(icon)}
        className="h-10 w-10"
        alt={`${icon} icon`}
      />
    ));
  }

  return (
    <div className="max-w-7xl px-5 lg:px-0 mx-auto bg-transparent">
      <div className="flex items-center gap-2">
        <div className="text-gray-800 dark:text-gray-200">
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
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          <span className="text-red-600 dark:text-red-500">Tecnologias</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 mt-6">
        {allStacks &&
          allStacks.map((stack: Stack) => (
            <div
              className="flex flex-col p-2 gap-2 basis-72 h-36"
              key={stack.name}
            >
              <div
                className={`h-auto flex gap-2 ${
                  stack.studied ? "opacity-1" : "opacity-30"
                }`}
              >
                {renderIcons(stack.icons)}
              </div>
              <div className="h-auto">
                <span
                  className={`font-semibold ${
                    stack.studied
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {stack.name}
                </span>
              </div>
              <div className="h-full w-full text-justify">
                <p
                  className={`text-sm ${
                    stack.studied
                      ? "text-gray-800 dark:text-gray-300"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {stack.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
