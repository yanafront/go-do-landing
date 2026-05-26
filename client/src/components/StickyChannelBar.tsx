import { Bell, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyChannelBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-godo/95 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 safe-area-bottom">
        <button
          onClick={() => window.open('https://t.me/go_do_minsk', '_blank')}
          className="godo-btn w-full py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2 group"
        >
          <Bell className="w-5 h-5" />
          Подписаться на канал с вакансиями
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
