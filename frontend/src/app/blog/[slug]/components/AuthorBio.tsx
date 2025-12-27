// app/blog/[slug]/components/AuthorBio.tsx
import { Globe, Mail } from 'lucide-react';
import { Author } from './types';

interface AuthorBioProps {
    author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
    return (
        <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-16">
            <div className="max-w-[800px] mx-auto px-4 flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar */}
                <div className="shrink-0">
                    <div className="relative size-24 rounded-full overflow-hidden">
                        <img
                            src={author.avatar}
                            alt={`Portrait of ${author.name}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">
                        Written by {author.name}
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 mb-4 leading-relaxed">
                        {author.bio}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <button className="text-primary font-bold text-sm hover:underline">
                            View Profile
                        </button>
                        <div className="flex gap-3">
                            {author.twitter && (
                                <a
                                    href={author.twitter}
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Globe className="w-5 h-5" />
                                </a>
                            )}
                            {author.linkedin && (
                                <a
                                    href={author.linkedin}
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}