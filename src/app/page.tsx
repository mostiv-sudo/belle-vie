import { Award, MessageCircle, Shield, Sparkles, Users } from "lucide-react";

import { BookingForm } from "../components/BookingForm";
import { ReviewCard } from "../components/ReviewCard";
import { services } from "../data/services";
import { doctors } from "../data/doctors";
import { reviews } from "../data/reviews";
import { ServiceCard } from "../components/ServiceCard";
import Link from "next/link";
import { DoctorCard } from "../components/DoctorCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Metadata } from "next";

// SEO для главной страницы
export const metadata: Metadata = {
  title: "BelleVie — премиум косметология в Москве",
  description:
    "BelleVie предлагает профессиональные косметологические услуги: процедуры лица, тела и волос. Опытные врачи и современные технологии.",
  alternates: {
    canonical: "https://bellevie.ru",
  },
  openGraph: {
    title: "BelleVie — премиум косметология в Москве",
    description:
      "Современные процедуры для лица, тела и волос. Запишитесь на консультацию в BelleVie.",
    url: "https://bellevie.ru",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1731514721772-329626f84c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        width: 1200,
        height: 630,
        alt: "BelleVie интерьер",
      },
    ],
  },
  keywords: [
    "BelleVie",
    "косметология премиум",
    "услуги косметологии",
    "процедуры лица",
    "процедуры тела",
    "услуги волос",
    "Москва"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
    const featuredServices = services.slice(0, 3);
  const featuredDoctors = doctors.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);
  return (
 <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                Косметология премиум-класса
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Современные технологии омоложения и ухода за кожей. Опытные врачи. Индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-center hover:bg-blue-700 transition-colors"
                >
                  Записаться на консультацию
                </a>
                <Link
                  href="/services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full border-2 border-blue-600 text-center hover:bg-blue-50 transition-colors"
                >
                  Наши услуги
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731514721772-329626f84c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM3NTk5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Belle Clinique интерьер"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Современное оборудование</h3>
              <p className="text-sm text-gray-600">
                Используем только сертифицированное оборудование мировых лидеров
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Опытные врачи</h3>
              <p className="text-sm text-gray-600">
                Команда сертифицированных специалистов с опытом работы от 8 лет
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Безопасность</h3>
              <p className="text-sm text-gray-600">
                Все процедуры проводятся с соблюдением медицинских стандартов
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-sm text-gray-600">
                Работаем только с препаратами премиум-класса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600">
              Широкий спектр процедур для вашей красоты и здоровья
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Наши врачи</h2>
            <p className="text-lg text-gray-600">
              Профессионалы с большим опытом работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/doctors"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Все врачи
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Акции и специальные предложения</h2>
            <p className="text-lg opacity-90">
              Выгодные предложения на популярные процедуры
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl mb-4">Скидка 20% на первую процедуру</h3>
              <p className="mb-6 opacity-90">
                Новым клиентам — специальное предложение на выбранные процедуры
              </p>
              <a
                href="#booking"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Записаться
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl mb-4">Комплексные программы</h3>
              <p className="mb-6 opacity-90">
                Курс из 3-х процедур со скидкой до 15%
              </p>
              <a
                href="#booking"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Узнать подробнее
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-lg text-gray-600">
              Нам доверяют тысячи довольных пациентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Записаться на консультацию</h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <BookingForm />
          </div>

          {/* Contact Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Написать в WhatsApp
            </a>
            <a
              href="https://t.me/belleclinique"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Как нас найти</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Адрес</h3>
                  <p className="text-lg text-gray-900">Москва, ул. Примерная, д. 10</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Телефон</h3>
                  <a href="tel:+74951234567" className="text-lg text-blue-600 hover:text-blue-700">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                  <a href="mailto:info@belleclinique.ru" className="text-lg text-blue-600 hover:text-blue-700">
                    info@belleclinique.ru
                  </a>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Режим работы</h3>
                  <p className="text-lg text-gray-900">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-lg text-gray-900">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Заглушка для карты */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="text-sm">Здесь будет карта</p>
                    <p className="text-xs mt-2">Интеграция с Яндекс.Картами или Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
