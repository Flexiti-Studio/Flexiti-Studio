// app/blog/[slug]/components/AuthorBio.tsx
interface AuthorBioProps {
    author: {
        name: string;
        title?: string;
        avatar: string;
        bio?: string;
    };
}

export default function AuthorBio({ author }: AuthorBioProps) {
    if (!author.bio) return null;

    return (
        <section className="w-full px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="relative size-20 md:size-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                                <img
                                    src={author.avatar}
                                    alt={author.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="flex-1">
                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-text-main dark:text-white">
                                    {author.name}
                                </h3>
                                {author.title && (
                                    <p className="text-sm text-text-muted dark:text-gray-400">
                                        {author.title}
                                    </p>
                                )}
                            </div>

                            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                                {author.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}