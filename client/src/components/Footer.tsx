import { MessageCircle, Bell, BotMessageSquare } from "lucide-react";
import { Link } from 'wouter';
import Logo from "@/components/brand/Logo";
import SmileDivider from "@/components/brand/SmileDivider";

export default function Footer() {
  return (
    <footer className="bg-godo border-t border-white/[0.06] py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-godo-blue/[0.06] to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmileDivider className="mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Logo imageClassName="h-9 mb-5" link={false} />
            <p className="text-white/60 mb-5 max-w-md text-sm leading-relaxed">
              Все вакансии Минска в одном Telegram-канале. Подпишись — и получай свежие предложения каждый день. Также доступен умный бот для персонального подбора.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/goDoMinsk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-godo-blue font-medium hover:text-white transition-colors"
              >
                <Bell className="w-4 h-4 shrink-0" />
                Канал с вакансиями — @goDoMinsk
              </a>
              <a
                href="https://t.me/go_do_matcher_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-godo-blue transition-colors"
              >
                <BotMessageSquare className="w-4 h-4 shrink-0" />
                Бот — @go_do_matcher_bot
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link href="/employers" className="block text-white/60 hover:text-godo-blue text-sm transition-colors">
                Ищу работника
              </Link>
              <Link href="/workers" className="block text-white/60 hover:text-godo-blue text-sm transition-colors">
                Ищу работу
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Партнерство</h3>
            <a
              href="https://t.me/yanadubeshko"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-godo-blue text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-godo-blue shrink-0" />
              Связаться с нами
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-8">
          <p className="text-white/30 text-xs leading-relaxed mb-6 max-w-3xl">
            GoDo — работа в Минске, вакансии и подработка на сегодня. Свежие вакансии Минска каждый день: грузчики, курьеры, разнорабочие, промоутеры, мастера, работа для студентов. Подработка в Минске без опыта и с опытом. Telegram-канал с вакансиями @goDoMinsk — подпишись бесплатно и откликайся первым. Найти работу в Минске ещё никогда не было так просто.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} GoDo. Все права защищены.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
              <Link href="/user-agreement" className="text-white/50 hover:text-godo-blue text-sm transition-colors">
                Пользовательское соглашение
              </Link>
              <Link href="/privacy-policy" className="text-white/50 hover:text-godo-blue text-sm transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
