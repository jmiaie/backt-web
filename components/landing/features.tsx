import { Activity, BarChart3, Brain, Target, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Automated Optimization",
    description:
      "Bayesian optimization finds optimal parameters overnight. No more weeks of manual tuning.",
    metric: "+15-30% Sharpe",
  },
  {
    icon: BarChart3,
    title: "Statistical Validation",
    description:
      "Permutation tests, deflated Sharpe ratio, bootstrap CI. Know if your strategy is real or luck.",
    metric: "95% Confidence",
  },
  {
    icon: Activity,
    title: "Regime Detection",
    description:
      "Adaptive strategies that adjust position sizing based on market volatility and trend strength.",
    metric: "-30-50% Drawdown",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Optimization",
    description:
      "Markowitz, risk parity, max Sharpe. Professional portfolio construction tools.",
    metric: "+20-40% Sharpe",
  },
  {
    icon: Target,
    title: "Transaction Costs",
    description:
      "Realistic modeling of slippage, spread, and commissions. Prevent overoptimistic backtests.",
    metric: "Real Returns",
  },
  {
    icon: Zap,
    title: "Kelly Sizing",
    description:
      "Optimal position sizing for maximum long-term growth. Mathematically proven capital allocation.",
    metric: "+15-25% Returns",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional-Grade Tools
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to validate, optimize, and deploy quantitative
            trading strategies with confidence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition group"
            >
              <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition">
                <feature.icon className="h-6 w-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-400 mb-4">{feature.description}</p>

              <div className="text-sm font-semibold text-emerald-400">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
