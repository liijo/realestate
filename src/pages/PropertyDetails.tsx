import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, ArrowLeft, Phone, Mail } from 'lucide-react';
import type { Property } from '../types/property';
import { properties as mockProperties } from '../data/mockData';
import { useFavorites } from '../store/FavoritesContext';

export const PropertyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    const favorite = id ? isFavorite(id) : false;

    const toggleFavorite = () => {
        if (!id) return;
        if (favorite) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    useEffect(() => {
        // Simulate API fetch
        const timer = setTimeout(() => {
            const found = mockProperties.find(p => p.id === id);
            setProperty(found || null);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 animate-pulse">
                <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                <div className="h-32 bg-gray-200 rounded mb-8"></div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
                <Link to="/" className="text-blue-600 hover:underline">Back to Listings</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to Listings
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={property.images[activeImage]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {property.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent hover:border-gray-300'}`}
                            >
                                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Property Info */}
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-2">
                                {property.propertyType}
                            </span>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                            <div className="flex items-center text-gray-600">
                                <MapPin size={18} className="mr-1" />
                                <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-blue-600 mb-1">
                                ${property.price.toLocaleString()}
                            </div>
                            <p className="text-gray-500 text-sm">
                                ${Math.round(property.price / property.sqFt).toLocaleString()} / sqft
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-6">
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                            <Bed size={24} className="text-blue-500 mb-1" />
                            <span className="font-semibold text-gray-900">{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                            <Bath size={24} className="text-blue-500 mb-1" />
                            <span className="font-semibold text-gray-900">{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                            <Square size={24} className="text-blue-500 mb-1" />
                            <span className="font-semibold text-gray-900">{property.sqFt.toLocaleString()} sqft</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{property.description}</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Amenities</h3>
                        <div className="flex flex-wrap gap-2">
                            {property.amenities.map(amenity => (
                                <span key={amenity} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Agent & Actions */}
                    <div className="bg-white border boundary-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <img
                                    src={property.agent.image}
                                    alt={property.agent.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <p className="text-sm text-gray-500">Listing Agent</p>
                                    <p className="font-semibold text-gray-900">{property.agent.name}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors border border-gray-200">
                                    <Phone size={20} />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors border border-gray-200">
                                    <Mail size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={toggleFavorite}
                                className={`flex items-center justify-center px-4 py-3 border rounded-lg font-medium transition-colors ${favorite ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                            >
                                <Heart size={20} className="mr-2" fill={favorite ? "currentColor" : "none"} />
                                {favorite ? 'Saved' : 'Save'}
                            </button>
                            <button className="px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
