
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты клиники | Адрес, телефон, запись",
  description:
    "Контакты клиники: телефон, адрес, карта, режим работы. Запишитесь онлайн или свяжитесь через WhatsApp и Telegram.",
  keywords: [
    "контакты клиники",
    "адрес клиники",
    "телефон клиники",
    "запись к врачу",
    "клиника Москва контакты"
  ],
  openGraph: {
    title: "Контакты клиники",
    description:
      "Телефон, адрес, карта и онлайн запись. Свяжитесь с нами удобным способом.",
    url: "https://site.ru/contact",
    siteName: "Clinic",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function ContactPage() {
  return (
    <div>
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-accent via-white to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным для вас способом или запишитесь онлайн
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <a href="tel:+74951234567" className="text-primary hover:underline block">
                +7 (495) 123-45-67
              </a>
              <p className="text-sm text-muted-foreground mt-2">Звоните с 9:00 до 21:00</p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@clinic.ru" className="text-primary hover:underline block">
                info@clinic.ru
              </a>
              <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Мессенджеры</h3>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" >
                  <a
                    href="https://wa.me/74951234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="sm" >
                  <a href="https://t.me/clinic" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Москва,
                <br />
                ул. Примерная, д. 1
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Карта */}
            <div className="order-2 lg:order-1">
              <div className="bg-secondary rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Режим работы</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Понедельник - Пятница: 9:00 - 21:00</p>
                      <p>Суббота - Воскресенье: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.714398145709!2d37.617633!3d55.755825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта расположения клиники"
                />
              </div>

              <div className="mt-6 bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Как добраться</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>🚇 Метро: станция «Примерная» (5 минут пешком)</p>
                  <p>🚌 Автобус: остановка «Примерная улица» (№12, 45, 78)</p>
                  <p>🚗 Парковка: бесплатная парковка для клиентов</p>
                </div>
              </div>
            </div>

            {/* Форма записи */}
            <div className="order-1 lg:order-2">
              <div className="bg-secondary rounded-2xl p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Записаться онлайн</h2>
                  <p className="text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами для подтверждения записи
                  </p>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ секция */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>

            <div className="space-y-4">
              <details className="bg-white rounded-2xl p-6 group">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Как записаться на прием?</h3>
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </div>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Вы можете записаться по телефону +7 (495) 123-45-67, через форму на сайте, или
                  написать нам в WhatsApp/Telegram. Администратор подберет удобное время.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 group">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Нужна ли подготовка к процедурам?</h3>
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </div>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Для большинства процедур специальной подготовки не требуется. Врач расскажет о
                  рекомендациях на первичной консультации.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 group">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Есть ли парковка?</h3>
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </div>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Да, для наших клиентов предусмотрена бесплатная парковка рядом с клиникой.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 group">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Можно ли прийти без записи?</h3>
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </div>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Мы работаем по предварительной записи, чтобы гарантировать внимание каждому
                  клиенту. Однако при наличии свободного времени врач может принять вас без записи.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
