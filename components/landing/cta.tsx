import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Trading Research?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join professional quant researchers who use BACKT to validate,
            optimize, and deploy strategies with confidence.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-emerald-600 font-semibold text-lg hover:bg-slate-50 transition group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
          </Link>
          <p className="text-emerald-100 mt-4 text-sm">
            No credit card required • 10 free backtests
          </p>
        </div>
      </div>
    </section>
  );
}
