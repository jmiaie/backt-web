import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <Zap className="h-4 w-4 mr-2" />
          Professional-Grade Quant Research
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Stop Guessing.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Start Optimizing.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
          Automated hyperparameter optimization, statistical validation, and regime-adaptive
          strategies — professional tools that serious quant researchers can't live without.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/dashboard"
            className="px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg transition flex items-center justify-center group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            href="#features"
            className="px-8 py-4 rounded-lg border-2 border-slate-700 hover:border-slate-600 text-white font-semibold text-lg transition"
          >
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-emerald-400">+30%</div>
            <div className="text-sm text-slate-400 mt-1">Sharpe Improvement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">-50%</div>
            <div className="text-sm text-slate-400 mt-1">Max Drawdown</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-slate-400 mt-1">Confidence Interval</div>
          </div>
        </div>
      </div>
    </section>
  );
}
