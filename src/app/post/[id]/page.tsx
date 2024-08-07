import * as React from 'react';
import { performRequest } from '@/libs/datocms';

interface Post {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string;
    image: { url: string }[];
    created_at: string;
    updated_at: string;
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
            image {
                url
            }
        }
    }`;

    const { data: { post } } = await performRequest({ query: QUERY });

    console.log(post.description)

    return (
        <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-50 antialiased">
            <img id="background" className="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" />
            <div className="relative min-h-screen">
                
                <div className="flex justify-between text-gray-800 px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl">
                        <header className="mb-4 lg:mb-6">
                            <address className="flex items-center mb-6">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900">MarceloSmbr</a>
                                        <p className="text-base text-gray-500"><time>Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">Best practices for successful prototypes</h1>
                        </header>
                        <p className="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
                        <p>But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
                        <figure className='my-5'>
                            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="Digital art by Anonymous" />
                            <figcaption>{''}</figcaption>
                        </figure>
                        <p>First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</p>
                        <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and datepickers which you can optionally include into your project via CDN or NPM.</p>
                        <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart guide</a> to explore the elements by including the CDN files into your project. But if you want to build a project with Flowbite I recommend you to follow the build tools steps so that you can purge and minify the generated CSS.</p>
                        <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help you get started with your projects even faster. You can check out this <a href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand the differences between the open-source and pro version of Flowbite.</p>
                    </article>
                </div>

            </div>
        </div>
    )

}