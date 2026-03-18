
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-serif text-blue-900 mb-4">BelleVie</div>
            <p className="text-sm text-gray-600">
              Клиника косметологии премиум-класса
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-blue-600">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-sm text-gray-600 hover:text-blue-600">
                  Врачи
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-sm text-gray-600 hover:text-blue-600">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-blue-600">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@belleclinique.ru" className="hover:text-blue-600">
                  info@belleclinique.ru
                </a>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Москва, ул. Примерная, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Режим работы</h3>
            <p className="text-sm text-gray-600">
              Пн-Пт: 9:00 - 21:00<br />
              Сб-Вс: 10:00 - 18:00
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
            <p>© 2026 BelleVie. Все права защищены.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-blue-600">
                Политика конфиденциальности
              </Link>
              <Link href="/agreement" className="hover:text-blue-600">
                Согласие на обработку данных
              </Link>
              <Link href="/licenses" className="hover:text-blue-600">
                Лицензии
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
