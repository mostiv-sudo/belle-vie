import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Belle Clinique",
  description:
    "Политика конфиденциальности Belle Clinique. Условия обработки персональных данных, использование cookies и защита информации клиентов.",
  
  alternates: {
    canonical: "https://belleclinique.ru/privacy",
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "Политика конфиденциальности | Belle Clinique",
    description:
      "Политика обработки персональных данных и конфиденциальности Belle Clinique.",
    url: "https://belleclinique.ru/privacy",
    type: "article",
    locale: "ru_RU",
  },

  keywords: [
    "политика конфиденциальности",
    "персональные данные",
    "privacy policy",
    "обработка персональных данных",
    "belle clinique политика"
  ],
};
export default function PrivacyPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-700">Политика конфиденциальности</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Политика конфиденциальности
            </h1>
            <p className="text-muted-foreground text-sm mb-10">
              Последнее обновление: 1 января 2026 г.
            </p>

            <div className="prose prose-sm max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Общие положения</h2>
                <p className="leading-relaxed mb-3">
                  ООО «Белль Клиник» (далее — «Клиника», «мы», «наш») уважает конфиденциальность
                  своих клиентов и обязуется защищать персональные данные, которые вы нам
                  предоставляете.
                </p>
                <p className="leading-relaxed">
                  Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как их
                  используем, храним и защищаем в соответствии с Федеральным законом от 27.07.2006
                  № 152-ФЗ «О персональных данных».
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Какие данные мы собираем</h2>
                <p className="leading-relaxed mb-3">
                  При использовании нашего сайта и сервисов мы можем собирать:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Имя и фамилию",
                    "Номер телефона",
                    "Адрес электронной почты",
                    "Дату рождения (для медицинских целей)",
                    "Данные о здоровье (в рамках оказания медицинских услуг)",
                    "IP-адрес и технические данные браузера (для аналитики)",
                    "Данные форм на сайте",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Цели обработки данных</h2>
                <p className="leading-relaxed mb-3">
                  Мы обрабатываем ваши данные в следующих целях:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Запись на консультацию и оказание медицинских услуг",
                    "Информирование о результатах лечения и рекомендациях",
                    "Отправка подтверждений и напоминаний о записи",
                    "Информирование об акциях и специальных предложениях (с вашего согласия)",
                    "Улучшение качества работы сайта и сервисов",
                    "Соблюдение требований законодательства",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Хранение и защита данных</h2>
                <p className="leading-relaxed">
                  Ваши данные хранятся на защищённых серверах в России в соответствии с
                  требованиями законодательства. Мы применяем технические и организационные меры для
                  защиты данных от несанкционированного доступа, изменения, раскрытия или
                  уничтожения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  5. Передача данных третьим лицам
                </h2>
                <p className="leading-relaxed">
                  Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением
                  случаев, предусмотренных законодательством, или с вашего явного согласия. Данные
                  могут быть переданы партнёрам, оказывающим нам технические услуги (хостинг,
                  аналитика), при условии соблюдения ими конфиденциальности.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Ваши права</h2>
                <p className="leading-relaxed mb-3">
                  В соответствии с законодательством вы имеете право:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Запросить информацию о хранящихся данных",
                    "Исправить неточные данные",
                    "Потребовать удаления данных",
                    "Отозвать согласие на обработку",
                    "Обратиться с жалобой в Роскомнадзор",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Cookie-файлы</h2>
                <p className="leading-relaxed">
                  Наш сайт использует cookie-файлы для улучшения работы и анализа посещаемости. Вы
                  можете отключить их в настройках браузера, однако это может повлиять на работу
                  некоторых функций сайта.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Контактная информация</h2>
                <p className="leading-relaxed mb-2">
                  По вопросам обработки персональных данных обращайтесь:
                </p>
                <p className="text-sm">
                  ООО «Белль Клиник»
                  <br />
                  Адрес: г. Москва, ул. Примерная, д. 10
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:privacy@belleclinique.ru"
                    className="text-primary hover:underline"
                  >
                    privacy@belleclinique.ru
                  </a>
                  <br />
                  Телефон:{" "}
                  <a href="tel:+74951234567" className="text-primary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
