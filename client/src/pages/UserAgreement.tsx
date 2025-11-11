import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-[#F5F7FF]">
      <Navigation />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-8">
            Пользовательское соглашение
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A1A2E]/70 mb-6">
              <strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Общие положения</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                администрацией сервиса GoDo (далее — «Сервис») и пользователями (далее — «Пользователь») 
                при использовании Telegram-бота GoDo.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                Используя Сервис, Пользователь подтверждает, что ознакомился с условиями настоящего 
                Соглашения и принимает их в полном объеме.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Описание сервиса</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                GoDo — это платформа для поиска исполнителей и размещения заданий через Telegram-бот. 
                Сервис позволяет пользователям находить работу или нанимать исполнителей для выполнения 
                различных задач.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Регистрация и учетная запись</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                3.1. Для использования Сервиса Пользователь должен пройти регистрацию через Telegram-бот.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                3.2. Пользователь обязуется предоставлять достоверную информацию при регистрации.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                3.3. Пользователь несет ответственность за сохранность данных своей учетной записи.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">4. Права и обязанности пользователей</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                <strong>4.1. Пользователь имеет право:</strong>
              </p>
              <ul className="list-disc pl-6 text-[#1A1A2E]/80 mb-4">
                <li>Размещать задания и искать исполнителей</li>
                <li>Откликаться на задания и предлагать свои услуги</li>
                <li>Получать уведомления о новых заданиях</li>
                <li>Оставлять отзывы о работе с другими пользователями</li>
              </ul>
              
              <p className="text-[#1A1A2E]/80 mb-4">
                <strong>4.2. Пользователь обязуется:</strong>
              </p>
              <ul className="list-disc pl-6 text-[#1A1A2E]/80 mb-4">
                <li>Соблюдать законодательство Республики Беларусь</li>
                <li>Не размещать незаконный или вредоносный контент</li>
                <li>Выполнять взятые на себя обязательства</li>
                <li>Уважать права других пользователей</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">5. Финансовые отношения</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                5.1. Все финансовые расчеты между пользователями осуществляются напрямую.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                5.2. Сервис не несет ответственности за финансовые операции между пользователями.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                5.3. Пользователи самостоятельно несут ответственность за уплату налогов.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">6. Ответственность</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                6.1. Сервис предоставляется «как есть» без гарантий.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                6.2. Администрация не несет ответственности за ущерб, причиненный использованием Сервиса.
              </p>
              <p className="text-[#1A1A2E]/80 mb-4">
                6.3. Пользователь несет полную ответственность за свои действия в рамках Сервиса.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">7. Изменения в соглашении</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                Администрация оставляет за собой право изменять условия настоящего Соглашения. 
                Пользователи будут уведомлены об изменениях через Telegram-бот.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">8. Контактная информация</h2>
              <p className="text-[#1A1A2E]/80 mb-4">
                По вопросам, связанным с настоящим Соглашением, обращайтесь через Telegram-бот @proxiDBot.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
