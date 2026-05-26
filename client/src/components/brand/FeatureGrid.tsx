import { LucideIcon } from "lucide-react";
import SectionShell from "@/components/brand/SectionShell";
import SmileDivider from "@/components/brand/SmileDivider";
import { motion } from "framer-motion";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  title: string;
  subtitle: string;
  steps: Step[];
  columns?: 2 | 3;
};

export function StepsGrid({ title, subtitle, steps }: FeatureGridProps) {
  return (
    <SectionShell>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
          <SmileDivider />
          <p className="text-white/60 max-w-xl mx-auto mt-4">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-godo-blue/15 flex items-center justify-center mx-auto mb-5 ring-1 ring-godo-blue/25">
                  <Icon className="w-8 h-8 text-godo-blue" />
                </div>
                <span className="text-xs font-bold text-godo-blue tracking-wider">ШАГ {index + 1}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

type Benefit = { icon: LucideIcon; title: string; description: string };

export function BenefitsGrid({ title, subtitle, steps: benefits }: FeatureGridProps & { steps: Benefit[] }) {
  return (
    <SectionShell>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
          <SmileDivider />
          <p className="text-white/60 max-w-xl mx-auto mt-4">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="godo-glass-card p-8"
              >
                <Icon className="w-10 h-10 text-godo-blue mb-5" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
