import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface FiltersProps {
    filters: {
        search: string;
        location: string;
        minPrice: string;
        maxPrice: string;
        propertyType: string;
        bedrooms: string;
    };
    onFilterChange: (name: string, value: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onFilterChange(e.target.name, e.target.value);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Search */}
                <div className="relative">
                    <label htmlFor="search" className="sr-only">Search properties</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                        placeholder="Search properties..."
                        className="pl-10 w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Location */}
                <div className="relative">
                    <label htmlFor="location" className="sr-only">Location</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        placeholder="Location..."
                        className="pl-10 w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Price Range */}
                <div className="flex space-x-2">
                    <label htmlFor="minPrice" className="sr-only">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleChange}
                        placeholder="Min Price"
                        className="w-1/2 p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <label htmlFor="maxPrice" className="sr-only">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleChange}
                        placeholder="Max Price"
                        className="w-1/2 p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* More Filters */}
                <div className="flex space-x-2">
                    <label htmlFor="propertyType" className="sr-only">Property Type</label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={filters.propertyType}
                        onChange={handleChange}
                        className="w-1/2 p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Plot">Plot</option>
                        <option value="Townhouse">Townhouse</option>
                    </select>
                    <label htmlFor="bedrooms" className="sr-only">Bedrooms</label>
                    <select
                        id="bedrooms"
                        name="bedrooms"
                        value={filters.bedrooms}
                        onChange={handleChange}
                        className="w-1/2 p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Beds</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                    </select>
                </div>

            </div>
        </div>
    );
};
