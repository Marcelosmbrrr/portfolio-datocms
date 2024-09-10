import * as React from "react";
import { performRequest } from "@/libs/datocms";

interface Project {
  id: string;
  name: string;
  phase: string;
  description: string;
  technologies: string;
  image: { url: string };
  repositoryLink: string;
  deployLink: string;
}

const QUERY = `
  query {
    allProjects {
    name
    phase
    technologies
    id
    description
    repositoryLink
    deployLink
    image {
      url
    }
  }
}`;

export async function ProjectList() {
  const {
    data: { allProjects },
  } = await performRequest({ query: QUERY });

  return (
    <div className="max-w-7xl px-5 md:px-0 mx-auto mt-10">
      <div className="flex items-center gap-2">
        <div className="text-red-400">
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
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-red-400">Estudos e Projetos</span>
        </h1>
      </div>
      <div className="flex justify-start flex-wrap pb-3 mt-5 gap-3 rounded-l-lg">
        {allProjects.length > 0 &&
          allProjects.map((project: Project) => (
            <div
              key={project.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="p-5">
                <div className="h-10 flex justify-between items-center mb-2">
                  <h5 className="text-xl mr-2 font-bold tracking-tight text-gray-900">
                    {project.name}
                  </h5>
                  <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800">
                    Status: {project.phase}
                  </div>
                </div>
                <div className="h-20 text-gray-800 break-words text-justify mt-2">
                  {project.description}
                </div>
                <div className="h-fit flex flex-wrap gap-1">
                  {project.technologies
                    .split(",")
                    .map((item) => item.trim())
                    .map((tech: string) => (
                      <div
                        key={tech}
                        className="h-fit min-w-fit text-white bg-neutral-800 font-medium px-1 py-0.5 rounded border border-gray-700 inline-flex items-center justify-center"
                      >
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                </div>
                <div className="text-gray-800 break-words underline text-right mt-2">
                  {project.repositoryLink && (
                    <a href={project.repositoryLink} target="_blank">
                      Repositório
                    </a>
                  )}
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      className="ml-3"
                      target="_blank"
                    >
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        {allProjects.length === 0 && (
          <div>
            <span className="text-gray-800">Nenhum projetado encontrado.</span>
          </div>
        )}
      </div>
    </div>
  );
}
