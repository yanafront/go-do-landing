import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmileDivider from "@/components/brand/SmileDivider";
import SEO from "@/components/SEO";

export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-godo relative overflow-hidden">
      <SEO
        title="Пользовательское соглашение"
        description="Пользовательское соглашение сервиса GoDo — платформы для поиска работы и подработки в Минске через Telegram."
        canonical="/user-agreement"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-godo-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <Navigation />
      <div className="relative z-10 pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            Пользовательское соглашение
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
                Настоящее Пользовательское соглашение регулирует отношения между администрацией сервиса GoDo и пользователями при использовании Telegram-бота GoDo.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Используя Сервис, Пользователь подтверждает, что ознакомился с условиями настоящего Соглашения и принимает их в полном объеме.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Описание сервиса</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                GoDo — платформа для поиска исполнителей и размещения заданий через Telegram-бот. Сервис позволяет находить работу или нанимать исполнителей для различных задач.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Регистрация и учетная запись</h2>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">3.1. Для использования Сервиса необходима регистрация через Telegram-бот.</p>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">3.2. Пользователь обязуется предоставлять достоверную информацию.</p>
              <p className="text-white/70 text-sm leading-relaxed">3.3. Пользователь несет ответственность за сохранность данных учетной записи.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Права и обязанности</h2>
              <p className="text-white/80 text-sm font-medium mb-2">Пользователь имеет право:</p>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1 mb-4">
                <li>Размещать задания и искать исполнителей</li>
                <li>Откликаться на задания</li>
                <li>Получать уведомления о новых заданиях</li>
                <li>Оставлять отзывы</li>
              </ul>
              <p className="text-white/80 text-sm font-medium mb-2">Пользователь обязуется:</p>
              <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
                <li>Соблюдать законодательство Республики Беларусь</li>
                <li>Не размещать незаконный контент</li>
                <li>Выполнять взятые обязательства</li>
                <li>Уважать права других пользователей</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Финансовые отношения</h2>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">5.1. Расчеты между пользователями осуществляются напрямую.</p>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">5.2. Сервис не несет ответственности за финансовые операции.</p>
              <p className="text-white/70 text-sm leading-relaxed">5.3. Пользователи самостоятельно уплачивают налоги.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Ответственность</h2>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">6.1. Сервис предоставляется «как есть».</p>
              <p className="text-white/70 mb-2 text-sm leading-relaxed">6.2. Администрация не несет ответственности за ущерб от использования Сервиса.</p>
              <p className="text-white/70 text-sm leading-relaxed">6.3. Пользователь несет ответственность за свои действия.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Изменения</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Администрация вправе изменять условия Соглашения. Пользователи уведомляются через Telegram-бот.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Контакты</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                По вопросам обращайтесь через Telegram-бот @go_do_matcher_bot.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
