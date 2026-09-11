import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
        <p>
          © {new Date().getFullYear()} Gaurav Garg. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
