"use client"

import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Врачи", href: "/doctors" },
    { name: "Контакты", href: "/contacts" },
  ]

  const isActive = (href: string) => {
    if (!pathname) return false

    if (href === "/") {
      return pathname === "/"
    }

    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-serif text-blue-900">
              BelleVie
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+74951234567"
              className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </a>

            <Link
              href="/#booking"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              Записаться
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="tel:+74951234567"
                className="flex items-center text-blue-900 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                +7 (495) 123-45-67
              </a>

              <Link
                href="/#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm text-center"
              >
                Записаться
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
