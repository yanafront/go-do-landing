import { Megaphone, Clock, Filter, RefreshCcw } from "lucide-react";
import SectionShell from "@/components/brand/SectionShell";
import SmileDivider from "@/components/brand/SmileDivider";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Megaphone,
      title: "Всё в одном канале",
      description:
        "Не нужно листать десятки пабликов — мы собрали лучшие вакансии Минска в одном Telegram-канале.",
    },
    {
      icon: RefreshCcw,
      title: "Обновляется ежедневно",
      description:
        "Свежие предложения каждый день. Подпишись — и не пропустишь ни одной подходящей вакансии.",
    },
    {
      icon: Filter,
      title: "Только проверенные",
      description:
        "Мы фильтруем дубли и неактуальные объявления. В канале — только живые вакансии от реальных заказчиков.",
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description:
        "Вместо часов поиска — просто открой канал. Работа сама найдёт тебя через уведомления.",
    },
  ];

  return (
    <SectionShell ariaLabelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Почему наш канал
          </h2>
          <SmileDivider />
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mt-4">
            Подпишись один раз — и вакансии всегда под рукой.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="godo-glass-card p-6 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-godo-blue/15 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-godo-blue/20">
                    <Icon className="w-6 h-6 text-godo-blue" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
