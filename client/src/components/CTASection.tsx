import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-8 border border-white/30">
            <Zap className="w-4 h-4 mr-2" />
            Начни зарабатывать сегодня
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 drop-shadow-2xl">
            Готов начать?
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
            Присоединяйся к тысячам людей, которые уже зарабатывают и находят исполнителей через наш бот в Telegram.
          </p>

          <div className="flex flex-col gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-700 font-black py-6 px-12 rounded-3xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 group shadow-2xl text-xl border-0"
              data-testid="button-cta-main"
              onClick={() => window.open('https://t.me/proxiDBot', '_blank')}
            >
              <Zap className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Попробовать бесплатно
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <div className="text-lg text-white/80 font-medium mt-2">
              Бесплатно • Без регистрации • Прямо в Telegram
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 text-white/80">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span className="text-lg font-semibold">5000+ пользователей</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span className="text-lg font-semibold">Работаем 24/7</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span className="text-lg font-semibold">Безопасные сделки</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
