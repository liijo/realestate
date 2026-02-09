import React, { useState, useEffect } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import type { Property } from '../types/property';
import { properties as mockProperties } from '../data/mockData';
import { useFavorites } from '../store/FavoritesContext';

export const Favorites: React.FC = () => {
    const { favorites } = useFavorites();
    const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);

    useEffect(() => {
        const filtered = mockProperties.filter(p => favorites.includes(p.id));
        setFavoriteProperties(filtered);
    }, [favorites]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
                <p className="text-gray-600">Your saved properties</p>
            </div>

            {favoriteProperties.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                    <h3 className="text-xl font-medium text-gray-900">No favorites yet</h3>
                    <p className="text-gray-500 mt-2">Start a heart to save properties here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            )}
        </div>
    );
};
