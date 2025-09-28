import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, Smartphone, Users, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Employers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-16">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-36 h-36 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '8s' }}></div>

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
              <Users className="w-4 h-4 mr-2" />
              #1 Платформа для поиска исполнителей
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-tight px-4 sm:px-0"
            >
              <span className="text-white drop-shadow-2xl">Найди </span>
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">исполнителя</span>
              <br />
              <span className="text-white drop-shadow-2xl">прямо сейчас</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium px-4 sm:px-0"
            >
              Размещай задания и получай готовые результаты за минуты
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-2xl text-lg sm:text-xl group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 border-0"
                onClick={() => window.open('https://t.me/proxiDBot', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  👥 Разместить вакансию
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
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">2 мин</div>
                <div className="text-white/80 text-base sm:text-lg">до размещения задания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">1000+</div>
                <div className="text-white/80 text-base sm:text-lg">активных исполнителей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
                <div className="text-white/80 text-base sm:text-lg">работает в Telegram</div>
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

      {/* How it works section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Как это работает
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс от создания задания до получения результата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">1. Создай задание</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Опиши что нужно сделать, укажи бюджет и сроки. Это займет 2 минуты
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">2. Выбирай исполнителя</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Получай отклики от проверенных исполнителей и выбирай лучшего
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">3. Получай результат</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Контролируй процесс выполнения и получай готовую работу в срок
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Все преимущества для быстрого и качественного выполнения задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Быстро</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                От размещения задания до получения результата за считанные часы
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Качественно</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Только проверенные исполнители с рейтингом и отзывами
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Удобно</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Все в Telegram - никаких сложных платформ и регистраций
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}