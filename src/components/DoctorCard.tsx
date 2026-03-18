import { GraduationCap, Award } from 'lucide-react';
import { Doctor } from '../data/doctors';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-sm text-blue-600 mb-2">{doctor.specialization}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{doctor.education}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Award className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Стаж: {doctor.experience}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-700 mb-2">Достижения:</p>
          <ul className="space-y-1">
            {doctor.achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
