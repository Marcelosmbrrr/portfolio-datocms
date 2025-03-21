import * as React from "react";
import { performRequest } from "@/libs/datocms";
import { FilterSelector } from "../others/FilterSelector";

interface Project {
  id: string;
  name: string;
  phase: string;
  description: string;
  technologies: string;
  image: { url: string };
  repositoryLink: string;
  deployLink: string;
  category: string;
}

const QUERY = `
  query($category: String) {
    allProjects(filter: {
      category: { eq: $category }
    }) {
      name
      phase
      technologies
      id
      description
      repositoryLink
      deployLink
      category
      image {
        url
      }
    }
  }
`;

export async function ProjectList(props: { category?: string }) {
  const { category } = props;

  const {
    data: { allProjects },
  } = await performRequest({
    query: QUERY,
    variables: {
      category: !category || category === "Estudo" ? "Estudo" : "Projeto",
    },
  });

  return (
    <div className="max-w-7xl px-5 md:px-0 mx-auto mt-10">
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
          <span className="text-red-600 dark:text-red-500">Projetos</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3 mt-3">
        <div>
          <span className="text-gray-800 dark:text-gray-200">Filtro:</span>
        </div>
        <FilterSelector
          options={["Estudo", "Projeto"]}
          list={"project"}
          currentOption={category ?? "Estudo"}
        />
      </div>

      <div className="flex justify-start flex-wrap pb-3 mt-5 gap-3 rounded-l-lg">
        {allProjects.length > 0 &&
          allProjects.map((project: Project) => (
            <div
              key={project.id}
              className="max-w-sm rounded-lg flex flex-col shadow bg-white dark:bg-gray-800"
            >
              <div className="p-5 w-96 flex-grow">
                <div className="h-10 flex justify-between items-center mb-2">
                  <h5 className="text-xl mr-2 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {project.name}
                  </h5>
                  <div className="space-x-2"></div>
                </div>
                <div className="h-20 text-gray-700 dark:text-gray-300 break-words text-justify mt-2">
                  {project.description}
                </div>
                <div className="h-fit flex flex-wrap gap-1">
                  {project.technologies
                    .split(",")
                    .map((item) => item.trim())
                    .map((tech: string) => (
                      <div
                        key={tech}
                        className="h-fit min-w-fit text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 font-medium p-1 rounded shadow-sm"
                      >
                        <span className="text-xs">{tech}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="text-gray-800 dark:text-gray-200 break-words underline text-right mt-2 py-2 px-3">
                {project.repositoryLink && (
                  <a
                    className="hover:text-red-600 dark:hover:text-red-500"
                    href={project.repositoryLink}
                    target="_blank"
                  >
                    Repositório
                  </a>
                )}
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    className="ml-3 hover:text-red-600 dark:hover:text-red-500"
                    target="_blank"
                  >
                    Deploy
                  </a>
                )}
              </div>
            </div>
          ))}

        {allProjects.length === 0 && (
          <div>
            <span className="text-gray-500 dark:text-gray-400">
              Nenhum projeto encontrado.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}