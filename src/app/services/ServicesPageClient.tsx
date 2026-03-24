"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categoryLabels, services } from "@/data/services";



export default function ServicesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "face" | "body" | "hair">("all");

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Современные методы косметологии для вашей красоты и здоровья. Все процедуры
            выполняются на оборудовании премиум-класса опытными врачами.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Все услуги
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as "face" | "body" | "hair")}
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Услуги в этой категории не найдены</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Не знаете, какую процедуру выбрать?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Запишитесь на бесплатную консультацию, и наш врач подберёт оптимальную программу
            ухода
          </p>
          <Button  size="lg" variant="secondary">
            <Link href="/contacts">Записаться на консультацию</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
