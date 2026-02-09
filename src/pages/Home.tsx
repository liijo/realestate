import React, { useState, useEffect, useMemo } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { Filters } from '../components/Filters';
import { MapView } from '../components/MapView'; // Import MapView
import type { Property } from '../types/property';
import { properties as mockProperties } from '../data/mockData';
import { List, Map as MapIcon } from 'lucide-react';

export const Home: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false); // State for toggling view
    const [filters, setFilters] = useState({
        search: '',
        location: '',
        minPrice: '',
        maxPrice: '',
        propertyType: '',
        bedrooms: ''
    });

    useEffect(() => {
        // Simulate API fetch delay
        const timer = setTimeout(() => {
            setProperties(mockProperties);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleFilterChange = (name: string, value: string) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filteredProperties = useMemo(() => {
        return properties.filter(property => {
            // Search match
            if (filters.search && !property.title.toLowerCase().includes(filters.search.toLowerCase())) return false;

            // Location match
            if (filters.location && !property.location.city.toLowerCase().includes(filters.location.toLowerCase()) &&
                !property.location.address.toLowerCase().includes(filters.location.toLowerCase())) return false;

            // Price range
            if (filters.minPrice && property.price < parseInt(filters.minPrice)) return false;
            if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) return false;

            // Property type
            if (filters.propertyType && property.propertyType !== filters.propertyType) return false;

            // Bedrooms
            if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) return false;

            return true;
        });
    }, [properties, filters]);

    const ITEMS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
    const paginatedProperties = filteredProperties.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Home</h1>
                    <p className="text-gray-600">Explore our curated list of properties</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setShowMap(false)}
                        className={`flex items-center px-4 py-2 rounded-md transition-all ${!showMap ? 'bg-white shadow-sm text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <List size={18} className="mr-2" />
                        List
                    </button>
                    <button
                        onClick={() => setShowMap(true)}
                        className={`flex items-center px-4 py-2 rounded-md transition-all ${showMap ? 'bg-white shadow-sm text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <MapIcon size={18} className="mr-2" />
                        Map
                    </button>
                </div>
            </div>

            <Filters filters={filters} onFilterChange={handleFilterChange} />

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse h-96">
                            <div className="h-64 bg-gray-200"></div>
                            <div className="p-5 space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                <div className="flex justify-between">
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {filteredProperties.length === 0 ? (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-medium text-gray-900">No properties found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
                        </div>
                    ) : (
                        <>
                            {showMap ? (
                                <MapView properties={filteredProperties} />
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                                        {paginatedProperties.map((property) => (
                                            <PropertyCard key={property.id} property={property} />
                                        ))}
                                    </div>

                                    {totalPages > 1 && (
                                        <div className="flex justify-center space-x-2">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                            >
                                                Previous
                                            </button>
                                            {[...Array(totalPages)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handlePageChange(i + 1)}
                                                    className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'}`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};
