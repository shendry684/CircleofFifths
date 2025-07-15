import Link from "next/link";
import CircleWheel from "../components/CircleWheel/CircleWheel";

const Page = () => {
  return (
    <main className="p-6 text-slate-900 dark:text-slate-100">
      <h1 className="text-4xl font-bold mb-4">🧭 Circle of Fifths</h1>
      <p className="text-lg mb-2">
        Welcome! This is your visual navigator through music theory.
      </p>
      <p className="text-md mb-6">
        <strong>Tip:</strong> Click any note in the circle to hear its sound and
        explore its role in each key 🎵
      </p>
      <CircleWheel />

      <nav className="flex gap-4">
        <Link
          href="/scales"
          className="text-blue-500 underline hover:text-blue-400"
        >
          Explore Scales
        </Link>
        <Link
          href="/chords"
          className="text-blue-500 underline hover:text-blue-400"
        >
          Build Chords
        </Link>
        <Link
          href="/glossary"
          className="text-blue-500 underline hover:text-blue-400"
        >
          Music Glossary
        </Link>
      </nav>
    </main>
  );
};

export default Page;
