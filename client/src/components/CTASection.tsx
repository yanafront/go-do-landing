import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTASection() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const tags = [
    { text: "Бесплатно", size: "lg", delay: 0 },
    { text: "Голосом или текстом", size: "md", delay: 0.1 },
    { text: "Персонализированный подбор", size: "xl", delay: 0.2 },
    { text: "Все вакансии в одном канале", size: "lg", delay: 0.3 },
    { text: "Быстрое трудоустройство", size: "md", delay: 0.4 },
  ];

  const getTagSize = (size: string) => {
    switch (size) {
      case "xl":
        return "text-xl sm:text-2xl px-6 py-3";
      case "lg":
        return "text-lg sm:text-xl px-5 py-2.5";
      case "md":
        return "text-base sm:text-lg px-4 py-2";
      default:
        return "text-base px-4 py-2";
    }
  };

  return (
    <section className="py-24 bg-[#0C0A25] relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/20 to-[#3A7BFF]/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF4FC3]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF4FC3]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#fff]/20 backdrop-blur-md text-[#fff] text-sm font-semibold mb-8 border border-[#fff]">
            <Zap className="w-4 h-4 mr-2" />
            Начни искать работу прямо сейчас
          </div>

          <h2 id="cta-heading" className="text-5xl md:text-6xl font-black text-[#FF4FC3] mb-8 drop-shadow-2xl">
            Готов начать?
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
            Просто скажи боту город и свои навыки. Он задаст уточняющие вопросы и пришлёт подходящие вакансии. Все вакансии в одном канале — больше не нужно искать по разным пабликам.
          </p>

          <div className="flex flex-col gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[#6B4BFF] hover:bg-[#3A7BFF] text-white font-black py-6 px-12 rounded-3xl transition-all duration-300 transform hover:scale-110 group shadow-2xl text-xl border-0"
              data-testid="button-cta-main"
              onClick={() => window.open('https://t.me/go_do_job_bot', '_blank')}
            >
              <Zap className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Открыть бота в Telegram
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

          </div>

          {/* Interactive Tag Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative min-h-[200px] sm:min-h-[250px] flex items-center justify-center my-12"
          >
            <div className="relative w-full max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {tags.map((tag) => (
                  <motion.div
                    key={tag.text}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: tag.delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredTag(tag.text)}
                    onMouseLeave={() => setHoveredTag(null)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      hoveredTag === tag.text
                        ? "scale-110 z-20"
                        : hoveredTag
                        ? "scale-95 opacity-60"
                        : "scale-100"
                    }`}
                  >
                    <div
                      className={`${getTagSize(
                        tag.size
                      )} bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 ${
                        hoveredTag === tag.text
                          ? "bg-white/30 border-white/50"
                          : ""
                      }`}
                    >
                      {tag.text}
                    </div>
                    {hoveredTag === tag.text && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute -inset-2 bg-white/10 rounded-full blur-xl -z-10"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
