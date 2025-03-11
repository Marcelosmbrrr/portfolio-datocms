import * as React from "react";
import { performRequest } from "@/libs/datocms";
import { format } from "date-fns";

import { ModeToggle } from "@/components/theming/ModeToggle";

interface Post {
  id: string;
  name: string;
  tags: string;
  text: {
    value: {
      schema: string;
      document: {
        type: string;
        children: Array<Paragraph | List>;
      };
    };
  };
  image: {
    url: string;
  };
  description: string;
  category: string;
  _updatedAt: string;
}

interface Paragraph {
  type: "paragraph";
  children: Array<Span | Link>;
}

interface List {
  type: "list";
  style: "bulleted";
  children: Array<ListItem>;
}

interface ListItem {
  type: "listItem";
  children: Array<Paragraph>;
}

interface Span {
  type: "span";
  value: string;
  marks?: Array<string>;
}

interface Link {
  type: "link";
  url: string;
  children: Array<Span>;
}

interface Data {
  post: Post;
}

interface Response {
  data: Data;
}

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
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <img
        id="background"
        className="absolute -left-20 top-0 max-w-[877px]"
        src="https://laravel.com/assets/img/welcome/background.svg"
      />
      <div className="relative min-h-screen">
        <div className="fixed bottom-4 right-4">
          <ModeToggle />
        </div>
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6">
                <div className="inline-flex items-center mr-3 text-sm">
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      MarceloSmbr
                    </a>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      {data.post.category}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      <time>
                        {format(new Date(data.post._updatedAt), "MMM. d, yyyy")}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
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
                block: { type: string; children: any[] },
                index: React.Key | null | undefined
              ) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="my-2">
                      {block.children.map((span, spanIndex) => (
                        <span
                          key={spanIndex}
                          className={
                            span.marks && span.marks.includes("strong")
                              ? "font-bold text-xl text-gray-900 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }
                        >
                          {span.value}
                        </span>
                      ))}
                    </p>
                  );
                } else if (block.type === "list") {
                  return (
                    <ul key={index} className="list-disc pl-5">
                      {block.children.map((listItem, listItemIndex) => (
                        <li key={listItemIndex}>
                          {listItem.children.map(
                            (
                              paragraph: { children: any[] },
                              paragraphIndex: React.Key | null | undefined
                            ) => (
                              <p key={paragraphIndex} className="my-2">
                                {paragraph.children.map((span, spanIndex) => (
                                  <span
                                    key={spanIndex}
                                    className={
                                      span.marks &&
                                      span.marks.includes("strong")
                                        ? "font-bold text-xl text-gray-900 dark:text-white"
                                        : "text-gray-700 dark:text-gray-300"
                                    }
                                  >
                                    {span.value}
                                  </span>
                                ))}
                              </p>
                            )
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              }
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
