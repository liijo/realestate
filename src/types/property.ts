export interface Property {
    id: string;
    title: string;
    price: number;
    location: {
        address: string;
        city: string;
        state: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    sqFt: number;
    bedrooms: number;
    bathrooms: number;
    propertyType: 'Apartment' | 'Villa' | 'Plot' | 'Townhouse' | 'Penthouse';
    images: string[];
    isFeatured: boolean;
    description: string;
    amenities: string[];
    agent: {
        name: string;
        image: string;
        phone: string;
    };
}
