import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import type { Property } from '../types/property';
import { useFavorites } from '../store/FavoritesContext';

interface PropertyCardProps {
    property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(property.id);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation
        if (favorite) {
            removeFavorite(property.id);
        } else {
            addFavorite(property.id);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-64">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <button
                        onClick={toggleFavorite}
                        className={`p-2 rounded-full transition-colors ${favorite ? 'bg-red-500 text-white' : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:text-red-500'}`}
                    >
                        <Heart size={20} fill={favorite ? "currentColor" : "none"} />
                    </button>
                </div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {property.propertyType}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-1">{property.title}</h2>
                </div>

                <div className="flex items-center text-gray-600 mb-4 text-sm">
                    <MapPin size={16} className="mr-1" />
                    <p className="line-clamp-1">{property.location.address}, {property.location.city}</p>
                </div>

                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                    <div className="flex items-center tooltip" title="Bedrooms">
                        <Bed size={18} className="mr-1 text-blue-500" />
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center" title="Bathrooms">
                        <Bath size={18} className="mr-1 text-blue-500" />
                        <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center" title="Area">
                        <Square size={18} className="mr-1 text-blue-500" />
                        <span>{property.sqFt.toLocaleString()} sqft</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Price</span>
                        <span className="text-lg font-bold text-blue-600">
                            ${property.price.toLocaleString()}
                        </span>
                    </div>
                    <Link
                        to={`/property/${property.id}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
