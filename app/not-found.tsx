import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <div className="text-center animate-fadeIn">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-2xl font-medium "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
