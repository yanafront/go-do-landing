import { Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UrgencyStrip() {
  const items = [
    "🔥 3 новые вакансии за последний час",
    "📌 Курьер — от 80 BYN/день — Минск",
    "📌 Грузчик на склад — от 60 BYN/день",
    "📌 Промоутер — 50 BYN за 4 часа",
  ];

  return (
    <section className="py-10 bg-godo relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-godo-blue/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/25 px-5 py-2 text-sm font-semibold text-orange-400 mb-4">
            <Flame className="w-4 h-4" />
            Горячие вакансии прямо сейчас
          </div>
          <p className="text-white/50 text-sm">Эти вакансии уже в канале — подпишись, чтобы видеть все</p>
        </motion.div>

        <div className="space-y-3 mb-8">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="godo-glass-card px-5 py-3.5 flex items-center justify-between"
            >
              <span className="text-white/80 text-sm">{item}</span>
              {i === 0 ? (
                <span className="text-xs text-godo-blue font-medium shrink-0 ml-3">только что</span>
              ) : (
                <span className="text-xs text-white/30 shrink-0 ml-3">{i * 12 + 5} мин назад</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => window.open('https://t.me/go_do_minsk', '_blank')}
            className="inline-flex items-center gap-2 text-godo-blue hover:text-white font-semibold text-sm transition-colors group"
          >
            Смотреть все вакансии в канале
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
