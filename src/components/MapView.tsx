import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import type { Property } from '../types/property';
// Fix for default marker icon in Leaflet with Webpack/Vite
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
    properties: Property[];
}

export const MapView: React.FC<MapViewProps> = ({ properties }) => {
    // Default center (US) if no properties, otherwise center of first property
    const center: [number, number] = properties.length > 0
        ? [properties[0].location.coordinates.lat, properties[0].location.coordinates.lng]
        : [39.8283, -98.5795];

    return (
        <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-md z-0">
            <MapContainer center={center} zoom={4} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {properties.map(property => (
                    <Marker
                        key={property.id}
                        position={[property.location.coordinates.lat, property.location.coordinates.lng]}
                    >
                        <Popup>
                            <div className="w-48">
                                <img src={property.images[0]} alt={property.title} className="w-full h-32 object-cover rounded-t-lg mb-2" />
                                <h3 className="font-bold text-sm mb-1 line-clamp-1">{property.title}</h3>
                                <p className="text-blue-600 font-bold mb-2">${property.price.toLocaleString()}</p>
                                <Link to={`/property/${property.id}`} className="block text-center bg-blue-600 text-white py-1 rounded text-sm">
                                    View Details
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};
