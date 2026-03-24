import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на обработку данных | Belle Clinique",
  description: "Согласие на обработку персональных данных Belle Clinique",
};

export default function AgreementPage() {
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
            <span className="text-gray-700">Согласие на обработку персональных данных</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Согласие на обработку персональных данных
            </h1>
            <p className="text-muted-foreground text-sm mb-10">Редакция от 1 января 2026 г.</p>

            <div className="bg-accent/50 border border-primary/20 rounded-2xl p-6 mb-10">
              <p className="text-sm text-gray-700 leading-relaxed">
                Настоящее Согласие составлено в соответствии с требованиями Федерального закона от
                27.07.2006 № 152-ФЗ «О персональных данных» и регулирует взаимоотношения между
                пользователем и ООО «Белль Клиник».
              </p>
            </div>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Субъект согласия</h2>
                <p className="text-sm leading-relaxed">
                  Принимая настоящее Согласие, пользователь сайта belleclinique.ru (далее —
                  «Субъект данных» или «Пользователь») выражает добровольное, конкретное,
                  информированное и сознательное согласие на обработку своих персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  2. Оператор персональных данных
                </h2>
                <div className="text-sm space-y-1 bg-secondary rounded-xl p-5 border border-border">
                  <p>
                    <span className="font-semibold text-gray-800">Наименование:</span> ООО «Белль
                    Клиник»
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">ИНН:</span> 7700000000 (пример)
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Адрес:</span> 123456, г. Москва,
                    ул. Примерная, д. 10
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Лицензия:</span> ЛО-77-01-020987 от
                    01.01.2020
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  3. Перечень персональных данных
                </h2>
                <p className="text-sm leading-relaxed mb-3">
                  Пользователь даёт согласие на обработку следующих персональных данных:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Фамилия, имя, отчество",
                    "Дата рождения",
                    "Номер телефона",
                    "Адрес электронной почты",
                    "Данные о состоянии здоровья и медицинские сведения",
                    "Иные данные, предоставленные пользователем добровольно",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Цели обработки</h2>
                <ul className="space-y-2 ml-4">
                  {[
                    "Оказание медицинских и косметологических услуг",
                    "Ведение медицинской документации",
                    "Организация записи и напоминаний о визитах",
                    "Информирование об услугах и акциях клиники",
                    "Исполнение договорных обязательств",
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
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Способы обработки</h2>
                <p className="text-sm leading-relaxed">
                  Обработка персональных данных осуществляется следующими способами: сбор, запись,
                  систематизация, накопление, хранение, уточнение (обновление, изменение),
                  извлечение, использование, передача (предоставление, доступ), обезличивание,
                  блокирование, удаление, уничтожение персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Срок действия согласия</h2>
                <p className="text-sm leading-relaxed">
                  Согласие действует с момента его предоставления до момента отзыва. Согласие может
                  быть отозвано путём направления письменного заявления по адресу Оператора или на
                  электронную почту{" "}
                  <a
                    href="mailto:privacy@belleclinique.ru"
                    className="text-primary hover:underline"
                  >
                    privacy@belleclinique.ru
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Права субъекта данных</h2>
                <p className="text-sm leading-relaxed mb-3">Пользователь вправе в любое время:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Получить информацию об обрабатываемых данных",
                    "Потребовать исправления неточных данных",
                    "Потребовать прекращения обработки и удаления данных",
                    "Отозвать данное согласие",
                    "Обжаловать действия Оператора в Роскомнадзоре",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="bg-secondary rounded-2xl p-6 border border-border mt-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Заполняя форму на сайте, отправляя заявку или обращаясь через мессенджеры,
                  Пользователь подтверждает, что ознакомился с настоящим Согласием и принимает его
                  условия в полном объёме.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
