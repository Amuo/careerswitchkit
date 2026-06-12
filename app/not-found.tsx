import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070719] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-sora text-8xl font-black text-white/10 leading-none">404</p>
        <h1 className="mt-4 font-sora text-2xl font-bold text-white">Page not found</h1>
        <p className="mt-3 text-white/50 text-base">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-8 inline-block bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
