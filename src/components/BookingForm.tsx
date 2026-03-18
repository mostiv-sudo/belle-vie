"use client"
import { useState } from 'react';
import { Phone, User, Mail, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormProps {
  defaultService?: string;
}

export function BookingForm({ defaultService }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь была бы отправка на сервер
    toast.success('Заявка отправлена!', {
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      service: defaultService || '',
      date: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
          Имя *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ваше имя"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">
          Телефон *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-gray-700 mb-1">
          Услуга
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Выберите услугу</option>
          <option value="laser-rejuvenation">Лазерное омоложение</option>
          <option value="biorevitalization">Биоревитализация</option>
          <option value="botox">Ботулинотерапия</option>
          <option value="rf-lifting">RF-лифтинг тела</option>
          <option value="hair-mesotherapy">Мезотерапия волос</option>
          <option value="chemical-peeling">Химический пилинг</option>
        </select>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm text-gray-700 mb-1">
          Желаемая дата
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
          Комментарий
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Дополнительная информация"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Отправить заявку
      </button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
