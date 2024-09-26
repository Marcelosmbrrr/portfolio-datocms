import * as React from "react";
import Link from "next/link";
import { performRequest } from "@/libs/datocms";
import { FilterSelector } from "../others/FilterSelector";

interface Post {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string;
  image: { url: string };
  created_at: string;
  updated_at: string;
}

const QUERY = `
  query($category: String) {
    allPosts(filter: {
      isPublished: { eq: true }
      category: { eq: $category }
    }) {
      category
      description
      id
      name
      tags
      image {
        url
      }
    }
  }
`;

export async function PostList(props: { category?: string }) {
  const { category } = props;

  const {
    data: { allPosts },
  } = await performRequest({
    query: QUERY,
    variables: {
      category: !category || category === "Tecnologia" ? "Tecnologia" : "Filosofia",
    },
  });

  return (
    <div className="max-w-7xl px-5 md:px-0 mx-auto mt-10">
      <div className="flex items-center gap-2">
        <div className="text-white">
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
          <span className="text-red-400">Blog</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3 mt-3">
        <div>
          <span className="text-white">Filtro:</span>
        </div>
        <FilterSelector options={["Tecnologia", "Outros"]} list={"post"} currentOption={category ?? "Tecnologia"} />
      </div>

      <div className="flex justify-start flex-wrap pb-3 gap-3 mt-5 cursor-pointer rounded-l-lg">
        {allPosts.length > 0 &&
          allPosts.map((post: Post) => (
            <Link
              href={"/post/" + post.id}
              key={post.id}
              className="max-w-sm border border-zinc-800 rounded-lg shadow hover:scale-105 transition-all"
            >
              <div className="relative h-56 w-full overflow-y-hidden">
                <img
                  className="rounded-t-lg h-full w-full"
                  src={post.image.url}
                  alt="post image"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-xl mr-2 font-bold tracking-tight text-white">
                    {post.name}
                  </h5>
                  <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="h-20 text-gray-200 break-words text-justify mt-2">
                  {post.description}
                </div>
              </div>
            </Link>
          ))}

        {allPosts.length === 0 && (
          <div>
            <span className="text-gray-500">Nenhum post encontrado.</span>
          </div>
        )}
      </div>
    </div>
  );
}
