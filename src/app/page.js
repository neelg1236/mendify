import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Mendify!</h2>
        <p className="text-gray-600 mb-6">
          This is a simple card component styled with <span className="font-semibold text-blue-600">Tailwind CSS</span>.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
