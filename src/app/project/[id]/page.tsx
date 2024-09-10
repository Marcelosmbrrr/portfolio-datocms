import * as React from "react";
import { performRequest } from "@/libs/datocms";
import { format } from "date-fns";

interface Project {
  name: string;
  tags: string;
  id: string;
  description: string;
  category: string;
  _updatedAt: string;
  text: {
    value: {
      document: {
        children: {
          type: "paragraph";
          children: {
            value: string;
          }[];
        }[];
      };
    };
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const QUERY = `
    query {
        post(filter: {id: {eq: ${params.id}}}) {
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

  const {
    data: { post },
  } = await performRequest({ query: QUERY });

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-50 antialiased">
      <img
        id="background"
        className="absolute -left-20 top-0 max-w-[877px]"
        src="https://laravel.com/assets/img/welcome/background.svg"
      />
      <div className="relative min-h-screen">
        <div className="flex justify-between text-gray-800 px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900"
                    >
                      MarceloSmbr
                    </a>
                    <p className="text-base text-gray-500">{post.category}</p>
                    <p className="text-base text-gray-500">
                      <time>{format(new Date(post._updatedAt), 'MMM. d, yyyy')}</time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {post.name}
              </h1>
            </header>
            <figure className="my-5">
              <img
                src={post.image.url}
                alt="Digital art by Anonymous"
                className="rounded-md"
              />
              <figcaption>{""}</figcaption>
            </figure>
            {post.text.value.document.children.map(
              (
                paragraph: {
                  type: "paragraph";
                  children: { type: "span"; value: string }[];
                },
                index: number
              ) => (
                <p key={index} className="my-2">
                  {paragraph.children[0].value}
                </p>
              )
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
