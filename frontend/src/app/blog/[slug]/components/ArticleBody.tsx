/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

export function ArticleBody({ value }: { value: any }) {
    return (
        <article className="col-span-1 lg:col-span-7 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-none font-body">
            <PortableText
                value={value}
                components={{
                    block: {
                        h2: ({ children }) => (
                            <h2 className="text-3xl mt-12 mb-6">{children}</h2>
                        ),
                        normal: ({ children }) => <p>{children}</p>,
                    },

                    types: {
                        image: ({ value }) => (
                            <figure className="my-10">
                                <img
                                    src={value.asset.url}
                                    alt={value.caption || ''}
                                    className="w-full rounded-2xl shadow-lg"
                                />
                                {value.caption && (
                                    <figcaption className="text-center text-sm text-text-muted mt-3">
                                        {value.caption}
                                    </figcaption>
                                )}
                            </figure>
                        ),

                        keyInsight: ({ value }) => (
                            <div className="my-8 p-6 bg-background-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">
                                        lightbulb
                                    </span>
                                    {value.title}
                                </h4>
                                <p className="m-0 text-sm md:text-base">{value.text}</p>
                            </div>
                        ),
                    },

                    list: {
                        bullet: ({ children }) => <ul>{children}</ul>,
                    },

                    listItem: {
                        bullet: ({ children }) => <li>{children}</li>,
                    },
                }}
            />
        </article>
    )
}
