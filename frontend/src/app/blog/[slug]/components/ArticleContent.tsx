// app/blog/[slug]/components/ArticleContent.tsx
import { Article } from './types'

interface ArticleContentProps {
    article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
    return (
        <article className="col-span-1 lg:col-span-7 lg:col-start-4 prose prose-lg prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-none font-body">
            {/* Introduction */}
            <p className="lead text-xl md:text-2xl text-text-main dark:text-white font-medium mb-8" id="intro">
                We are standing at the precipice of a major shift in how digital products are designed. For the last decade, &apos;smart&apos; meant responsive. Tomorrow, it means predictive.
            </p>

            <p>
                The integration of Artificial Intelligence into User Experience design is not just about chatbots or automated recommendations. It&apos;s a fundamental reimagining of the user journey. We are moving away from static interfaces—where users must learn the system—to dynamic, adaptive systems that learn the user.
            </p>

            {/* Predictive UX Section */}
            <h2 className="text-3xl mt-12 mb-6" id="predictive">The Rise of Predictive UX</h2>
            <p>
                Traditional UX relies on explicit user inputs. A user clicks a button, fills a form, or navigates a menu. AI-driven UX flips this model. By analyzing user behavior, context, and historical data, interfaces can now anticipate needs before they are explicitly expressed.
            </p>

            {/* Key Insight Box */}
            <div className="my-8 p-6 bg-background-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                    Key Insight
                </h4>
                <p className="m-0 text-sm md:text-base">
                    &apos;The best interface is no interface. AI allows us to reduce friction by removing steps the user didn&apos;t even know were redundant.&apos;
                </p>
            </div>

            <p>
                Consider a travel app. Instead of asking &apos;Where do you want to go?&apos;, an AI-enhanced version might suggest, &apos;It looks like you have a free weekend next month and flights to Lisbon are historically low. Shall I draft an itinerary?&apos; This shifts the interaction from <strong>command-based</strong> to <strong>intent-based</strong>.
            </p>

            {/* Generative Interfaces Section */}
            <h2 className="text-3xl mt-12 mb-6" id="generative">Generative Interfaces</h2>
            <p>
                Beyond prediction, we are entering the era of Generative UI. Currently, every user sees the same dashboard, the same layout, and the same navigation. Generative AI can create bespoke interfaces on the fly, tailored to the specific task and user preference at that exact moment.
            </p>

            {/* Image with Caption */}
            <figure className="my-10">
                <img
                    alt="Concept art of a generative interface changing layout based on user context"
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                    className="w-full rounded-2xl shadow-lg"
                />
                <figcaption className="text-center text-sm text-text-muted mt-3">
                    Dynamic layouts adapt to user context in real-time.
                </figcaption>
            </figure>

            <p>
                If a user is visually impaired, the system might prioritize high-contrast text and voice controls automatically. If a power user logs in, the simplified onboarding screens dissolve into a dense, data-rich dashboard. The interface becomes fluid, living software.
            </p>

            {/* Challenges Section */}
            <h2 className="text-3xl mt-12 mb-6" id="challenges">Ethical Challenges &amp; Trust</h2>
            <p>
                With great power comes great responsibility. As interfaces become more &apos;human&apos; and predictive, the line between helpfulness and manipulation blurs.
            </p>

            <ul>
                <li><strong>Privacy:</strong> How much data is too much for an interface to know?</li>
                <li><strong>Agency:</strong> Does predictive UX strip users of control?</li>
                <li><strong>Bias:</strong> Are our AI models reinforcing existing societal biases in design?</li>
            </ul>

            <p>
                Designers must now become ethicists. We aren&apos;t just arranging pixels; we are orchestrating relationships between humans and intelligent systems. Transparency will be the currency of trust in this new era.
            </p>

            {/* Conclusion */}
            <h2 className="text-3xl mt-12 mb-6" id="conclusion">Conclusion</h2>
            <p>
                The future of AI in UX is not about replacing designers. It is about elevating the designer&apos;s role from creating static artifacts to designing living systems. It challenges us to think less about &apos;screens&apos; and more about &apos;states of being.&apos; The tools are changing, but the core mission remains: to make technology more human.
            </p>

            {/* Tags */}
            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
                <p className="font-bold text-sm text-text-muted uppercase tracking-wider mb-4">Tags</p>
                <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-surface-dark rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}