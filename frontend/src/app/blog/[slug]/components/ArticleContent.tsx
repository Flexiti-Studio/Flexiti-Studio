import Image from 'next/image'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Article, BlockContent, ImageAsset, KeyInsight } from './types'
import { urlFor } from '@/sanity/client'

interface ArticleContentProps {
    article: Article
}

// Define how to render Portable Text blocks
const portableTextComponents: PortableTextComponents = {
    block: {
        normal: ({ children }) => (
            <p className="mb-6 text-text-main dark:text-white leading-relaxed">{children}</p>
        ),
        h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-6 mt-12" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-4 mt-10">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-bold mb-4 mt-8">{children}</h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-text-main dark:text-white">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="mb-2">{children}</li>
        ),
        number: ({ children }) => (
            <li className="mb-2">{children}</li>
        ),
    },
    types: {
        image: ({ value }: { value: ImageAsset }) => {
            if (!value?.asset?._ref) return null

            return (
                <figure className="my-10">
                    <Image
                        src={urlFor(value).width(1200).height(630).url()}
                        alt={value.alt || 'Article image'}
                        width={1200}
                        height={630}
                        className="w-full rounded-2xl shadow-lg"
                        priority
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-text-muted mt-3">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
        keyInsight: ({ value }: { value: KeyInsight }) => (
            <div className="my-8 p-6 bg-background-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                    {value.title || 'Key Insight'}
                </h4>
                <p className="m-0 text-sm md:text-base">
                    {value.text}
                </p>
            </div>
        )
    }
}

export default function ArticleContent({ article }: ArticleContentProps) {
    return (
        <article className="col-span-1 lg:col-span-7 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-none font-body">
            {/* Introduction - using article.description */}
            <p className="lead text-xl md:text-2xl text-text-main dark:text-white font-medium mb-8" id="intro">
                {article.description}
            </p>

            {/* Main Content - Portable Text */}
            {article.body && (
                <PortableText
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value={article.body as any}
                    components={portableTextComponents}
                />
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
                    <p className="font-bold text-sm text-text-muted uppercase tracking-wider mb-4">Tags</p>
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                            <span
                                key={tag.id}
                                className="px-3 py-1 bg-gray-100 dark:bg-surface-dark rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    )
}