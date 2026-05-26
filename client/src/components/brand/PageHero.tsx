import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import SmileDivider from "@/components/brand/SmileDivider";

type Stat = { value: string; label: string };
type Trust = { icon: LucideIcon; text: string };

type PageHeroProps = {
  badge: ReactNode;
  title: ReactNode;
  subtitle: string;
  ctaLabel: string;
  ctaIcon?: ReactNode;
  onCta: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaIcon?: ReactNode;
  onSecondaryCta?: () => void;
  stats: Stat[];
  trust: Trust[];
};

export default function PageHero({
  badge,
  title,
  subtitle,
  ctaLabel,
  ctaIcon,
  onCta,
  secondaryCtaLabel,
  secondaryCtaIcon,
  onSecondaryCta,
  stats,
  trust,
}: PageHeroProps) {
  return (
    <section className="godo-hero-bg relative min-h-[90vh] flex items-center justify-center pt-20 pb-16">
      <div className="absolute top-24 left-[8%] w-56 h-56 bg-godo-blue/15 rounded-full blur-[90px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-24 right-[8%] w-72 h-72 bg-godo-blue-dark/12 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="godo-badge mb-8"
          >
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          <SmileDivider className="mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="godo-btn py-4 px-8 sm:py-5 sm:px-10 text-base sm:text-lg h-auto group"
              onClick={onCta}
            >
              {ctaIcon}
              {ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {secondaryCtaLabel && onSecondaryCta && (
              <Button
                size="lg"
                className="godo-btn-outline py-4 px-8 sm:py-5 sm:px-10 text-base sm:text-lg h-auto group"
                onClick={onSecondaryCta}
              >
                {secondaryCtaIcon}
                {secondaryCtaLabel}
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="godo-glass-card px-5 py-4 text-center">
                <div className="godo-stat-value mb-1">{stat.value}</div>
                <div className="text-white/55 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="hidden sm:flex flex-wrap justify-center gap-8 text-white/55"
          >
            {trust.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-godo-blue" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
