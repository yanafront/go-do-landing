import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmileDivider from "@/components/brand/SmileDivider";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-godo relative overflow-hidden">
      <SEO
        title="Политика конфиденциальности"
        description="Политика конфиденциальности GoDo — как мы обрабатываем персональные данные пользователей сервиса поиска работы в Минске."
        canonical="/privacy-policy"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-godo-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <Navigation />
      <div className="relative z-10 pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            Политика конфиденциальности
          </h1>
          <SmileDivider className="mb-10" />
          <div className="godo-glass-card p-8 sm:p-10 space-y-8">
            <p className="text-white/60 text-sm">
              <strong className="text-white">Дата последнего обновления:</strong>{" "}
              {new Date().toLocaleDateString('ru-RU')}
            </p>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Общие положения</h2>
              <p className="text-white/70 mb-3 text-sm leading-relaxed">
                Политика определяет порядок обработки персональных данных пользователей GoDo в соответствии с Законом РБ «О защите персональных данных» от 7 мая 2021 г. № 99-З.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Используя Сервис, Пользователь дает согласие на обработку данных в соответствии с настоящей Политикой.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Какие данные собираем</h2>
              <p className="text-white/80 text-sm font-medium mb-2">Предоставляемые пользователем:</p>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1 mb-4">
                <li>Имя и ID в Telegram</li>
                <li>Контактная информация</li>
                <li>Профиль (навыки, опыт)</li>
                <li>Содержание заданий и откликов</li>
              </ul>
              <p className="text-white/80 text-sm font-medium mb-2">Автоматически:</p>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                <li>Время использования сервиса</li>
                <li>Тип устройства</li>
                <li>IP-адрес (анонимизированный)</li>
                <li>Данные взаимодействия с ботом</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Цели обработки</h2>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                <li>Предоставление услуг GoDo</li>
                <li>Связывание исполнителей и заказчиков</li>
                <li>Безопасность и предотвращение мошенничества</li>
                <li>Улучшение сервиса</li>
                <li>Соблюдение законодательства РБ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Правовые основания</h2>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                <li>Согласие субъекта данных</li>
                <li>Исполнение договора</li>
                <li>Соблюдение правовых обязательств</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Сроки хранения</h2>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">Данные хранятся до достижения целей обработки, затем удаляются или анонимизируются.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Передача третьим лицам</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Данные не передаются без согласия, кроме случаев, предусмотренных законом. Возможна передача в анонимизированном виде для аналитики.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Права пользователей</h2>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                <li>Информация об обработке данных</li>
                <li>Уточнение, блокирование или удаление</li>
                <li>Отзыв согласия</li>
                <li>Обращение в уполномоченные органы</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Защита данных</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Применяются технические и организационные меры. Доступ имеют только уполномоченные лица.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Cookies</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Сервис может использовать cookies для улучшения функциональности и аналитики.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Контакты</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                По вопросам обработки данных: @go_do_matcher_bot в Telegram.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
