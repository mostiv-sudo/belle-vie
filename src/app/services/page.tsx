
import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Услуги косметологии | Belle ",
  description:
    "Все услуги косметологии: лицо, тело, волосы. Инъекционные и аппаратные процедуры. Запишитесь на консультацию к врачу.",
  alternates: {
    canonical: "https://belle.ru/services",
  },
  openGraph: {
    title: "Услуги косметологии | Belle ",
    description:
      "Современные процедуры косметологии для лица и тела. Консультация врача.",
    url: "https://belle.ru/services",
    type: "website",
  },
  keywords: [
    "косметология услуги",
    "процедуры лица",
    "процедуры тела",
    "уход за кожей",
    "клиника косметологии",
    "belle "
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  
  return (
<ServicesPageClient/>
  );
}
