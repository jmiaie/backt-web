import Link from "next/link";
import { TrendingUp } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-emerald-500" />
          <span className="text-2xl font-bold text-white">BACKT</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-slate-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition">
            Pricing
          </Link>
          <Link href="/docs" className="text-slate-300 hover:text-white transition">
            Docs
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
