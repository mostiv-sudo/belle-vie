
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Наши врачи | Косметология и медицинские специалисты",
  description:
    "Команда опытных врачей клиники. Косметологи, дерматологи и специалисты с медицинским образованием. Запишитесь на консультацию онлайн.",
  keywords: [
    "врачи клиники",
    "косметолог",
    "дерматолог",
    "специалисты клиники",
    "наши врачи",
    "врачи косметологии"
  ],
  alternates: {
    canonical: "https://site.ru/doctors",
  },
  openGraph: {
    title: "Наши врачи клиники",
    description:
      "Команда профессиональных врачей с опытом более 15 лет. Запишитесь на консультацию.",
    url: "https://site.ru/doctors",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function DoctorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Наши врачи</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Команда профессионалов с большим опытом работы и постоянным повышением
            квалификации. Каждый врач — эксперт в своей области.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Почему выбирают наших врачей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">15+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Лет опыта</h3>
              <p className="text-gray-600">Средний стаж работы наших специалистов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">5000+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Довольных пациентов</h3>
              <p className="text-gray-600">Ежегодно доверяют нам свою красоту</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">100%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Сертификация</h3>
              <p className="text-gray-600">
                Все врачи имеют действующие медицинские сертификаты
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
          <p className="text-lg mb-8 opacity-90">
            Наши врачи помогут подобрать оптимальную программу ухода
          </p>
          <Button  size="lg" variant="secondary">
            <Link href="/contacts">Записаться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
