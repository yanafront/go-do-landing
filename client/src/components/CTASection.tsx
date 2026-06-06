import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, BotMessageSquare, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionShell from "@/components/brand/SectionShell";
import SmileDivider from "@/components/brand/SmileDivider";

export default function CTASection() {
  return (
    <SectionShell ariaLabelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="godo-badge mb-8 mx-auto w-fit">
            <Bell className="w-4 h-4 text-godo-blue" />
            Не пропусти свою вакансию
          </div>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Подпишись на <span className="godo-heading-accent">канал</span>
          </h2>

          <SmileDivider className="mb-6" />

          <p className="text-lg text-white/65 mb-3 max-w-2xl mx-auto leading-relaxed">
            Вакансии разлетаются за часы. Подпишись — и откликайся первым, пока другие ещё ищут.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-white/50 mb-8">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              1 200+ уже с нами
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-green-400" />
              +87 за неделю
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button
              size="lg"
              className="godo-btn py-5 px-10 text-lg h-auto group"
              data-testid="button-cta-channel"
              onClick={() => window.open('https://t.me/goDoMinsk', '_blank')}
            >
              <Bell className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Подписаться на канал
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="godo-btn-outline py-4 px-8 text-base h-auto group"
              data-testid="button-cta-bot"
              onClick={() => window.open('https://t.me/go_do_matcher_bot', '_blank')}
            >
              <BotMessageSquare className="w-5 h-5" />
              Или открой бота
            </Button>
          </div>

          <p className="text-xs text-white/35 mb-10">
            Бесплатно · Без спама · Отписаться можно в любой момент
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="godo-glass-card p-5 max-w-md mx-auto"
          >
            <p className="text-white/70 text-sm italic mb-2">
              «Подписался вчера — сегодня уже на собеседовании. Канал реально работает!»
            </p>
            <p className="text-white/40 text-xs">— Андрей, курьер</p>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
