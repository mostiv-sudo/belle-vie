"use client"

import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Service } from "../data/services"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {service.duration}
          </div>

          <div className="text-blue-600 font-medium">
            {service.price}
          </div>
        </div>

        <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-700">
          Подробнее
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
