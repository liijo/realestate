import type { Property } from '../types/property';

export const properties: Property[] = [
    {
        id: '1',
        title: 'Luxury Villa with Sea View',
        price: 1250000,
        location: {
            address: '123 Ocean Drive',
            city: 'Beverly Hills',
            state: 'CA',
            coordinates: { lat: 34.0736, lng: -118.4004 }
        },
        sqFt: 4500,
        bedrooms: 5,
        bathrooms: 4,
        propertyType: 'Villa',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1600596542815-2a4d9fdd4070?auto=format&fit=crop&q=80&w=1600'
        ],
        isFeatured: true,
        description: 'Stunning luxury villa featuring panoramic ocean views, infinity pool, and modern amenities.',
        amenities: ['Pool', 'Gym', 'Sea View', 'Garage', 'Smart Home'],
        agent: {
            name: 'Sarah Johnson',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 123-4567'
        }
    },
    {
        id: '2',
        title: 'Modern Downtown Apartment',
        price: 850000,
        location: {
            address: '456 Urban Ave',
            city: 'New York',
            state: 'NY',
            coordinates: { lat: 40.7128, lng: -74.0060 }
        },
        sqFt: 1200,
        bedrooms: 2,
        bathrooms: 2,
        propertyType: 'Apartment',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600',
        ],
        isFeatured: true,
        description: 'Chic apartment in the heart of the city, walking distance to subway and central park.',
        amenities: ['Doorman', 'Gym', 'Rooftop', 'Elevator'],
        agent: {
            name: 'Michael Chen',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 987-6543'
        }
    },
    {
        id: '3',
        title: 'Cozy Cottage Retreat',
        price: 450000,
        location: {
            address: '789 Pine Lane',
            city: 'Aspen',
            state: 'CO',
            coordinates: { lat: 39.1911, lng: -106.8175 }
        },
        sqFt: 1800,
        bedrooms: 3,
        bathrooms: 2,
        propertyType: 'Villa', // Using Villa as proxy for House/Cottage for now based on types
        images: [
            'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1600'
        ],
        isFeatured: false,
        description: 'Beautiful cottage surrounded by nature, perfect for winter getaways.',
        amenities: ['Fireplace', 'Garden', 'Ski Access', 'Parking'],
        agent: {
            name: 'Emily Davis',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 246-8101'
        }
    },
    {
        id: '4',
        title: 'Spacious Family Home',
        price: 650000,
        location: {
            address: '321 Oak Street',
            city: 'Austin',
            state: 'TX',
            coordinates: { lat: 30.2672, lng: -97.7431 }
        },
        sqFt: 2800,
        bedrooms: 4,
        bathrooms: 3,
        propertyType: 'Villa',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1600'
        ],
        isFeatured: false,
        description: 'Perfect family home with huge backyard and proximity to top schools.',
        amenities: ['Garage', 'Backyard', 'School District', 'AC'],
        agent: {
            name: 'David Wilson',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 369-2580'
        }
    },
    {
        id: '5',
        title: 'High-Rise Penthouse',
        price: 3500000,
        location: {
            address: '101 Skyline Blvd',
            city: 'Miami',
            state: 'FL',
            coordinates: { lat: 25.7617, lng: -80.1918 }
        },
        sqFt: 6000,
        bedrooms: 4,
        bathrooms: 5,
        propertyType: 'Penthouse',
        images: [
            'https://images.unsplash.com/photo-1512918760513-95f192972701?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600'
        ],
        isFeatured: true,
        description: 'Exclusive penthouse with private elevator and 360-degree city views.',
        amenities: ['Pool', 'Concierge', 'Helipad', 'Private Elevator'],
        agent: {
            name: 'Sophia Martinez',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 753-1598'
        }
    },
    {
        id: '6',
        title: 'Investment Plot',
        price: 150000,
        location: {
            address: 'Plot 45, Industrial Zone',
            city: 'Phoenix',
            state: 'AZ',
            coordinates: { lat: 33.4484, lng: -112.0740 }
        },
        sqFt: 10000,
        bedrooms: 0,
        bathrooms: 0,
        propertyType: 'Plot',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600'
        ],
        isFeatured: false,
        description: 'Prime industrial land ready for development. Great investment opportunity.',
        amenities: ['Utilities', 'Road Access'],
        agent: {
            name: 'Robert Brown',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
            phone: '+1 (555) 852-9632'
        }
    }
];
