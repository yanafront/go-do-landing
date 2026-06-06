import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialProofBanner() {
  return (
    <section className="py-12 bg-godo relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-godo-blue/10 via-transparent to-godo-blue/10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="godo-glass-card p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="flex items-center gap-2 text-godo-blue text-sm font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                Сейчас в канале
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Users className="w-4 h-4" />
                1 200+ подписчиков
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                +87 за неделю
              </div>
            </div>
            <p className="text-white font-bold text-lg sm:text-xl mb-1">
              Пока ты думаешь — другие уже нашли работу
            </p>
            <p className="text-white/55 text-sm">
              Каждый день в канале появляются вакансии, которые разбирают за часы. Не упусти свою.
            </p>
          </div>
          <Button
            className="godo-btn py-4 px-8 text-base h-auto group shrink-0"
            onClick={() => window.open('https://t.me/goDoMinsk', '_blank')}
          >
            Подписаться
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-5 text-white/40 text-xs"
        >
          <Clock className="w-3.5 h-3.5" />
          Последняя вакансия опубликована 12 мин назад
        </motion.div>
      </div>
    </section>
  );
}
