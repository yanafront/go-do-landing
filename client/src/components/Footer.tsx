import { MessageCircle } from "lucide-react";
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-foreground">GoDo</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Быстрая работа и поиск исполнителей прямо в Telegram.
              Зарабатывай сегодня или найди работника прямо сейчас.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>@godo_bot</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link href="/employers" className="block text-muted-foreground hover:text-primary transition-colors">
                Для работодателей
              </Link>
              <Link href="/workers" className="block text-muted-foreground hover:text-primary transition-colors">
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

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} GoDo. Все права защищены.
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <Link href="/user-agreement" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Пользовательское соглашение
              </Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
