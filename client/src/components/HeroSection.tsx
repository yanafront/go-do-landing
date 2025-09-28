import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from 'wouter';

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-16">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      <div className="absolute bottom-1/3 right-10 w-36 h-36 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '8s' }}></div>

      {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
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
            #1 Платформа для быстрого заработка
          </motion.div>

          {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
            <span className="text-white drop-shadow-2xl">Зарабатывай </span>
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">сегодня</span>
          </motion.h1>

          {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium"
            >
            Находи работу за минуты или найми исполнителя за секунды
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
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-6 px-12 rounded-2xl text-xl group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 border-0"
              data-testid="button-find-work"
              onClick={() => setLocation('/workers')}
            >
              <span className="relative z-10 flex items-center">
                💰   Начать зарабатывать
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-12 rounded-2xl text-xl group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 border-0"
              data-testid="button-find-worker"
              onClick={() => setLocation('/employers')}
            >
              <span className="relative z-10 flex items-center">
                👥{' '} Найти исполнителя
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
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">5 мин</div>
              <div className="text-white/80 text-lg">до первого заказа</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">1000+</div>
              <div className="text-white/80 text-lg">активных исполнителей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-white/80 text-lg">работает в Telegram</div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center space-x-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <Smartphone className="w-6 h-6" />
              <span className="text-lg font-medium">В Telegram</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Безопасно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-medium">Мгновенно</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
