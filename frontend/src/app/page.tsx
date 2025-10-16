import colors from "@/styles/colors";


export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: colors.backgroundLight, color: colors.textPrimary }}
    >
      {/* Hero */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Flexiti Studio Template
        </h1>
        <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
          A fullstack Next.js starter with Tailwind CSS, Zustand, and dark mode —
          ready to launch your next app faster.
        </p>
      </section>

      {/* Divider */}
      <div
        className="w-24 h-1 rounded mb-8"
        style={{ backgroundColor: colors.accent }}
      ></div>

      {/* How to Use */}
      <section
        className="max-w-2xl p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: colors.primaryLight, color: 'white' }}
      >
        <h2 className="text-2xl font-bold mb-4">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click the &quot;Use this template&quot; button on GitHub</li>
          <li>Clone your new repository</li>
          <li>
            Install dependencies:
            <pre className="bg-black text-green-400 p-2 rounded mt-1">
              npm install
            </pre>
          </li>
          <li>
            Run development server:
            <pre className="bg-black text-green-400 p-2 rounded mt-1">
              npm run dev
            </pre>
          </li>
          <li>Start building your app 🚀</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm" style={{ color: colors.textSecondary }}>
        Built with ❤️ by Flexiti Studio
      </footer>
    </main>
  );
}
