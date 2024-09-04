import * as React from "react";
import Link from "next/link";
import { performRequest } from "@/libs/datocms";
import { ListFilter } from "./others/ListFilter";

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

const QUERY1 = `
  query {
    allPosts(filter: {isPublished: {eq: true}}) {
        category
        description
        id
        name
        tags
        image {
        url
        }
    }
}`;

const QUERY2 = `
  query($group: String) {
    allPosts(filter: {
      isPublished: { eq: true }
      category: { eq: $group }
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

export async function PostList(props: { group?: string }) {

  const { group } = props;

  const {
    data: { allPosts },
  } = await performRequest({
    query: !group || group === "Todos" ? QUERY1 : QUERY2,
    variables: { group: group },
  });

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
          <span className="text-red-400">Posts</span>
        </h1>
      </div>

      <div className="flex space-x-3 mt-3">
        <ListFilter
          groups={["Todos", "Filosofia", "Tecnologia"]}
          list={"post"}
        />
      </div>

      <div className="flex justify-start flex-wrap pb-3 gap-3 mt-5 cursor-pointer rounded-l-lg">
        {allPosts.length > 0 &&
          allPosts.map((post: Post) => (
            <Link
              href={"/post/" + post.id}
              key={post.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-xl transition-all"
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
                  <h5 className="text-xl mr-2 font-bold tracking-tight text-gray-900">
                    {post.name}
                  </h5>
                  <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="h-20 text-gray-800 break-words text-justify mt-2">
                  {post.description}
                </div>
              </div>
            </Link>
          ))}

        {allPosts.length === 0 && (
          <div>
            <span className="text-gray-800">Nenhum post encontrado.</span>
          </div>
        )}
      </div>
    </div>
  );
}
