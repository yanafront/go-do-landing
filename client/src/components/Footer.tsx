import { MessageCircle } from "lucide-react";
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-[#0C0A25] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/10 to-[#3A7BFF]/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-white">GoDo</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Умный бот для поиска работы в Telegram. Скажи город и навыки голосом или текстом — получи персонализированные вакансии. Все вакансии в одном канале.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <MessageCircle className="w-4 h-4 text-[#32B4F2]" />
                <a href="https://t.me/go_do_job_bot" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4FC3] transition-colors">@go_do_job_bot</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <MessageCircle className="w-4 h-4 text-[#32B4F2]" />
                <a href="https://t.me/go_do_minsk" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4FC3] transition-colors">Канал с вакансиями</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link href="/employers" className="block text-white/70 hover:text-[#FF4FC3] transition-colors">
                Для работодателей
              </Link>
              <Link href="/workers" className="block text-white/70 hover:text-[#FF4FC3] transition-colors">
                Для исполнителей
              </Link>
            </div>
          </div>

          {/* Contact - Hidden for now */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@godo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} GoDo. Все права защищены.
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <Link href="/user-agreement" className="text-white/70 hover:text-[#FF4FC3] text-sm transition-colors">
                Пользовательское соглашение
              </Link>
              <Link href="/privacy-policy" className="text-white/70 hover:text-[#FF4FC3] text-sm transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
