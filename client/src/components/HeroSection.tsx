import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from 'wouter';

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0A25] pt-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/20 to-[#3A7BFF]/20"></div>
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#6B4BFF]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-[#3A7BFF]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#6B4BFF]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#FF4FC3]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      <div className="absolute bottom-1/3 right-10 w-36 h-36 bg-[#3A7BFF]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '8s' }}></div>

      {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30"
          >
            🤖 Умный бот для поиска работы
          </motion.div>

          {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-tight px-4 sm:px-0"
            >
            <span className="text-white drop-shadow-2xl">Найди работу </span>
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent drop-shadow-2xl">быстро и легко</span>
          </motion.h1>

          {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium px-4 sm:px-0"
            >
            Просто скажи боту город и свои навыки голосом или текстом. Он задаст уточняющие вопросы и пришлёт подходящие вакансии. Всё в одном месте — больше не нужно искать по разным Telegram-каналам.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-[#6B4BFF] hover:bg-[#3A7BFF] text-white font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-2xl text-lg sm:text-xl group relative overflow-hidden shadow-2xl hover:shadow-[#3A7BFF]/25 transform hover:scale-110 transition-all duration-300 border-0"
              data-testid="button-find-work"
              onClick={() => setLocation('/workers')}
            >
              <span className="relative z-10 flex items-center">
                💼 Найти работу
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              size="lg"
              className="bg-[#6B4BFF] hover:bg-[#3A7BFF] text-white font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-2xl text-lg sm:text-xl group relative overflow-hidden shadow-2xl hover:shadow-[#3A7BFF]/25 transform hover:scale-110 transition-all duration-300 border-0"
              data-testid="button-find-worker"
              onClick={() => setLocation('/employers')}
            >
              <span className="relative z-10 flex items-center">
                👥 Найти сотрудника
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">1 мин</div>
              <div className="text-white/80 text-base sm:text-lg">до первых вакансий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">Персонализация</div>
              <div className="text-white/80 text-base sm:text-lg">только подходящие вакансии</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-white/80 text-base sm:text-lg">в Telegram</div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden sm:flex sm:flex-row items-center justify-center space-x-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <Smartphone className="w-6 h-6" />
                <span className="text-base sm:text-lg font-medium">В Telegram</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">Безопасно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6" />
              <span className="text-base sm:text-lg font-medium">Мгновенно</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
