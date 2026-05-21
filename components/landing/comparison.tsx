import { X, Check } from "lucide-react";

const comparisons = [
  { problem: "Manual parameter tuning", solution: "Bayesian Optimization" },
  { problem: "Unknown significance", solution: "Statistical Validation" },
  { problem: "Blind to market regimes", solution: "Regime Detection" },
  { problem: "Single-asset only", solution: "Portfolio Optimization" },
  { problem: "Overoptimistic returns", solution: "Transaction Cost Modeling" },
  { problem: "Guessed position sizes", solution: "Kelly Criterion Sizing" },
];

export function Comparison() {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stop Working Harder. Work Smarter.
          </h2>
          <p className="text-xl text-slate-400">
            Traditional approaches vs. QuantEdge
          </p>
        </div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              {/* Problem */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <span className="text-slate-400">{item.problem}</span>
              </div>

              {/* Solution */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-white font-semibold">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
