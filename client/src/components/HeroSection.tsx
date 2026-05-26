import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, Bell, Megaphone, BotMessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/components/img/logo.png";
import SmileDivider from "@/components/brand/SmileDivider";

export default function HeroSection() {
  return (
    <section className="godo-hero-bg relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16" aria-label="Главная секция">
      <div className="absolute top-24 left-[10%] w-64 h-64 bg-godo-blue/20 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-32 right-[8%] w-80 h-80 bg-godo-blue-dark/15 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="godo-badge mb-8"
          >
            <Megaphone className="w-4 h-4 text-godo-blue" />
            Уже 1 200+ подписчиков
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex justify-center mb-6"
          >
            <img
              src={logoImage}
              alt="GoDo"
              className="w-auto max-w-[280px] sm:max-w-[340px] drop-shadow-godo-glow"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          >
            <span className="text-white">Все вакансии Минска </span>
            <br className="hidden sm:block" />
            <span className="godo-heading-accent">в одном канале</span>
          </motion.h1>

          <SmileDivider className="mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Подпишись — и получай свежие вакансии каждый день. Пока другие листают десятки пабликов, ты уже откликаешься первым.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-sm text-orange-400/80 font-medium mb-8"
          >
            🔥 Сегодня уже опубликовано 300 новых вакансий
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          >
            <Button
              size="lg"
              className="godo-btn py-4 px-8 sm:py-5 sm:px-10 text-base sm:text-lg h-auto group"
              data-testid="button-subscribe-channel"
              onClick={() => window.open('https://t.me/go_do_minsk', '_blank')}
            >
              <Bell className="w-5 h-5" />
              Подписаться на канал
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="godo-btn-outline py-4 px-8 sm:py-5 sm:px-10 text-base sm:text-lg h-auto group"
              data-testid="button-open-bot"
              onClick={() => window.open('https://t.me/go_do_job_bot', '_blank')}
            >
              <BotMessageSquare className="w-5 h-5" />
              Открыть бота
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-white/40 mb-12"
          >
            Бесплатно · Без регистрации · Отписаться можно в любой момент
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10"
          >
            {[
              { value: "1 200+", label: "подписчиков канала" },
              { value: "50+", label: "вакансий в неделю" },
              { value: "Бесплатно", label: "навсегда" },
            ].map((stat) => (
              <div key={stat.label} className="godo-glass-card px-6 py-5 text-center">
                <div className="godo-stat-value mb-1">{stat.value}</div>
                <div className="text-white/55 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hidden sm:flex flex-wrap items-center justify-center gap-8 text-white/55"
          >
            {[
              { icon: Users, text: "Растущее сообщество" },
              { icon: CheckCircle, text: "Проверенные вакансии" },
              { icon: Zap, text: "Обновления каждый день" },
            ].map(({ icon: Icon, text }) => (
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
