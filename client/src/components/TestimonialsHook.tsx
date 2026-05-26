import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionShell from "@/components/brand/SectionShell";
import SmileDivider from "@/components/brand/SmileDivider";

const testimonials = [
  {
    text: "Подписался на канал утром — к обеду уже договорился о подработке. Реально работает!",
    name: "Алексей",
    role: "Грузчик",
  },
  {
    text: "Раньше тратила по 2 часа на поиск вакансий в разных пабликах. Теперь просто открываю один канал.",
    name: "Марина",
    role: "Мастер маникюра",
  },
  {
    text: "Разместил вакансию — 4 отклика за первый час. Быстрее, чем на любом сайте.",
    name: "Дмитрий",
    role: "Владелец кафе",
  },
];

export default function TestimonialsHook() {
  return (
    <SectionShell>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Уже работает для сотен людей
          </h2>
          <SmileDivider />
          <p className="text-white/60 max-w-xl mx-auto mt-4">
            Присоединяйся — канал растёт каждый день.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="godo-glass-card p-6 relative"
            >
              <Quote className="w-8 h-8 text-godo-blue/30 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-godo-blue fill-godo-blue" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                «{t.text}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-godo-blue/20 flex items-center justify-center text-godo-blue font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/45 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
