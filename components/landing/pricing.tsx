import Link from "next/link";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out QuantEdge",
    features: [
      { name: "10 backtests/month", included: true },
      { name: "Walk-forward validation", included: true },
      { name: "SHAP explainability", included: true },
      { name: "REST API access", included: true },
      { name: "Hyperparameter optimization", included: false },
      { name: "Statistical validation", included: false },
      { name: "Regime detection", included: false },
    ],
    cta: "Start Free",
    href: "/dashboard",
    popular: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "For serious quantitative researchers",
    features: [
      { name: "100 backtests/month", included: true },
      { name: "All Free features", included: true },
      { name: "Hyperparameter optimization", included: true },
      { name: "Statistical validation", included: true },
      { name: "Transaction cost modeling", included: true },
      { name: "Regime detection", included: false },
      { name: "Portfolio optimization", included: false },
    ],
    cta: "Start Trial",
    href: "/dashboard",
    popular: true,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "For professional traders and funds",
    features: [
      { name: "Unlimited backtests", included: true },
      { name: "All Starter features", included: true },
      { name: "Regime detection", included: true },
      { name: "Portfolio optimization", included: true },
      { name: "Memory stack (OMPA/Locus)", included: true },
      { name: "Multi-asset support", included: true },
      { name: "Priority support", included: true },
    ],
    cta: "Start Trial",
    href: "/dashboard",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-400">
            Start free, upgrade as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition ${
                tier.popular
                  ? "border-emerald-500 bg-slate-900/50 relative"
                  : "border-slate-800 bg-slate-900/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-slate-400 ml-2">/{tier.period}</span>
                </div>
                <p className="text-slate-400">{tier.description}</p>
              </div>

              <Link
                href={tier.href}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition mb-8 ${
                  tier.popular
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-slate-600 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-white" : "text-slate-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-emerald-400 hover:text-emerald-300">
              Contact us
            </Link>{" "}
            for Enterprise pricing
          </p>
        </div>
      </div>
    </section>
  );
}
