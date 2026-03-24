import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, DollarSign, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { getValidImage } from "@/lib/utils";

// SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params; // распаковываем Promise
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return { title: "Услуга не найдена | BelleVie" };
  }

  return {
    title: `${service.title} — цена, описание | BelleVie`,
    description: service.description,
    alternates: { canonical: `https://bellevie.ru/services/${service.id}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://bellevie.ru/services/${service.id}`,
      type: "article",
      images: [
        {
          url: service.image || "/images/placeholder.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    keywords: [service.title, "косметология", "процедура", "цена", "BelleVie"],
    robots: { index: true, follow: true },
  };
}


// Страница услуги
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>; // <- Promise!
}) {
  const { serviceId } = await params; // распаковываем
  const service = services.find((s) => s.id === serviceId);

  if (!service) notFound();

 

  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);



    
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-600">Услуги</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к услугам
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative">
              <Image
       src={getValidImage(service.image)} // если нет картинки — используем заглушку
    alt={service.title || "Фото услуги"}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-700 mb-8">{service.description}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-sm">Длительность</span>
                </div>
                <p className="text-2xl text-gray-900 font-semibold">{service.duration}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="text-sm">Стоимость</span>
                </div>
                <p className="text-2xl text-gray-900 font-semibold">{service.price}</p>
              </div>
            </div>

            {/* Indications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Показания</h2>
              <ul className="space-y-2">
                {service.indications.map((ind, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contraindications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Противопоказания</h2>
              <ul className="space-y-2">
                {service.contraindications.map((contra, idx) => (
                  <li key={idx} className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{contra}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Before/After */}
            {service.beforeAfter && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Фото до/после</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">До процедуры</p>
                    <div className="relative aspect-square">
                      <Image
                        src={service.beforeAfter.before}
                        alt="До процедуры"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">После процедуры</p>
                    <div className="relative aspect-square">
                      <Image
                        src={service.beforeAfter.after}
                        alt="После процедуры"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Записаться на процедуру
                </h3>
                <BookingForm defaultService={service.id} />
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Похожие услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((rs) => (
                <ServiceCard key={rs.id} service={rs} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Для SSG
export async function generateStaticParams() {
  return services.map((s) => ({ serviceId: s.id }));
}
