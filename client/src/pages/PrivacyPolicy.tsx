import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navigation />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="text-gray-700 mb-4">
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки 
                персональных данных пользователей сервиса GoDo (далее — «Сервис») в соответствии с 
                Законом Республики Беларусь «О защите персональных данных» от 7 мая 2021 г. № 99-З.
              </p>
              <p className="text-gray-700 mb-4">
                Используя Сервис, Пользователь дает согласие на обработку своих персональных данных 
                в соответствии с настоящей Политикой.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Какие данные мы собираем</h2>
              <p className="text-gray-700 mb-4">
                <strong>2.1. Данные, предоставляемые пользователем:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Имя пользователя в Telegram</li>
                <li>Идентификатор пользователя в Telegram</li>
                <li>Контактная информация (при необходимости)</li>
                <li>Профильная информация (навыки, опыт работы)</li>
                <li>Содержание размещенных заданий и откликов</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                <strong>2.2. Данные, собираемые автоматически:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Время использования сервиса</li>
                <li>Тип устройства и браузера</li>
                <li>IP-адрес (в анонимизированном виде)</li>
                <li>Данные о взаимодействии с ботом</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Цели обработки данных</h2>
              <p className="text-gray-700 mb-4">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Предоставление услуг платформы GoDo</li>
                <li>Связывание исполнителей и заказчиков</li>
                <li>Обеспечение безопасности и предотвращение мошенничества</li>
                <li>Улучшение качества сервиса</li>
                <li>Соблюдение требований законодательства РБ</li>
                <li>Обработка обращений и жалоб пользователей</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Правовые основания обработки</h2>
              <p className="text-gray-700 mb-4">
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Согласия субъекта персональных данных (ст. 6 Закона РБ «О защите персональных данных»)</li>
                <li>Необходимости исполнения договора (ст. 6 Закона РБ «О защите персональных данных»)</li>
                <li>Соблюдения правовых обязательств (ст. 6 Закона РБ «О защите персональных данных»)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Сроки хранения данных</h2>
              <p className="text-gray-700 mb-4">
                5.1. Персональные данные хранятся в течение срока, необходимого для достижения целей обработки.
              </p>
              <p className="text-gray-700 mb-4">
                5.2. После достижения целей обработки данные подлежат удалению или анонимизации.
              </p>
              <p className="text-gray-700 mb-4">
                5.3. Данные могут храниться дольше в случаях, предусмотренных законодательством РБ.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Передача данных третьим лицам</h2>
              <p className="text-gray-700 mb-4">
                6.1. Персональные данные не передаются третьим лицам без согласия пользователя.
              </p>
              <p className="text-gray-700 mb-4">
                6.2. Исключения составляют случаи, предусмотренные законодательством РБ.
              </p>
              <p className="text-gray-700 mb-4">
                6.3. Данные могут передаваться в анонимизированном виде для аналитических целей.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Права субъектов персональных данных</h2>
              <p className="text-gray-700 mb-4">
                В соответствии с Законом РБ «О защите персональных данных» пользователи имеют право:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отзывать согласие на обработку данных</li>
                <li>Обращаться с жалобами в уполномоченные органы</li>
                <li>Получать подтверждение факта обработки данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Меры защиты данных</h2>
              <p className="text-gray-700 mb-4">
                8.1. Применяются технические и организационные меры защиты персональных данных.
              </p>
              <p className="text-gray-700 mb-4">
                8.2. Доступ к персональным данным имеют только уполномоченные лица.
              </p>
              <p className="text-gray-700 mb-4">
                8.3. Регулярно проводится мониторинг безопасности системы.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies и аналогичные технологии</h2>
              <p className="text-gray-700 mb-4">
                Сервис может использовать cookies и аналогичные технологии для улучшения функциональности 
                и анализа использования сервиса.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Изменения в политике</h2>
              <p className="text-gray-700 mb-4">
                Администрация оставляет за собой право изменять настоящую Политику. 
                Пользователи будут уведомлены об изменениях через Telegram-бот.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Контактная информация</h2>
              <p className="text-gray-700 mb-4">
                По вопросам обработки персональных данных обращайтесь через Telegram-бот @proxiDBot.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
