import Link from "next/link";
import { TrendingUp, Mail, MessageCircle, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">BACKT</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Professional quantitative trading research platform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-slate-400 hover:text-white text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-slate-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-slate-400 hover:text-white text-sm">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2026 BACKT. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <Link href="https://github.com/jmiaie/backt-web" className="text-slate-400 hover:text-white">
              <Globe className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/backt" className="text-slate-400 hover:text-white">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="mailto:support@backt.io" className="text-slate-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
