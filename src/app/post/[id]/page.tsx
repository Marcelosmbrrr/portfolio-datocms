import * as React from "react";
import { performRequest } from "@/libs/datocms";
import { format } from "date-fns";

export default async function Page({ params }: { params: { id: string } }) {
  const QUERY = `
    query GetPost($id: ItemId) {
        post(filter: {id: {eq: $id}}) {
            category
            description
            id
            name
            tags
            text {
                value
            }
            image {
                url
            }
            _updatedAt
        }
    }`;

  const variables = {
    id: params.id,
  };

  const { data } = await performRequest({ query: QUERY, variables });

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-stone-950 antialiased">
      <img
        id="background"
        className="absolute -left-20 top-0 max-w-[877px]"
        src="https://laravel.com/assets/img/welcome/background.svg"
      />
      <div className="relative min-h-screen">
        <div className="flex justify-between text-white px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-white"
                    >
                      MarceloSmbr
                    </a>
                    <p className="text-base text-gray-400">
                      {data.post.category}
                    </p>
                    <p className="text-base text-gray-400">
                      <time>
                        {format(new Date(data.post._updatedAt), "MMM. d, yyyy")}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
                {data.post.name}
              </h1>
            </header>
            <figure className="my-5">
              <img
                src={data.post.image.url}
                alt="Digital art by Anonymous"
                className="rounded-md"
              />
              <figcaption>{""}</figcaption>
            </figure>
            {data.post.text.value.document.children.map(
              (
                paragraph: {
                  type: "paragraph";
                  children: {
                    type: "span";
                    value: string;
                    marks?: string[];
                  }[];
                },
                index: number
              ) => (
                <p key={index} className="my-2">
                  {paragraph.children.map((span, spanIndex) => (
                    <span
                      key={spanIndex}
                      className={span.marks && span.marks.includes("strong") ? "font-bold text-xl": "text-gray-300"}
                    >
                      {span.value}
                    </span>
                  ))}
                </p>
              )
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
