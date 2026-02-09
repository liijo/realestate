# Real Estate Listing Platform

A modern, responsive real estate listing application built with React, Vite, TypeScript, and Tailwind CSS. This project demonstrates scalable architecture, advanced filtering, map integration, and performance best practices.

## Features

- **Property Listings**: Browse a curated list of properties with high-quality images.
- **Advanced Filtering**: Filter properties by search term, location, price range, property type, and number of bedrooms.
- **Interactive Map**: Toggle between list view and map view to see property locations (powered by Leaflet).
- **Property Details**: View comprehensive details including amenities, agent info, and image gallery.
- **Favorites**: Save your favorite properties to a personalized list (persisted in local storage).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Performance**: Optimized with lazy loading, memoization, and virtualization techniques.

## Tech Stack

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API & Hooks

## Setup Instructions

1.  **Clone the repository**
    ```bash
    git clone https://github.com/liijo/realestate.git
    cd realestate
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── components/     # Reusable UI components (PropertyCard, Filters, MapView)
├── data/           # Mock data
├── pages/          # Page components (Home, PropertyDetails, Favorites)
├── store/          # Context providers (FavoritesContext)
├── types/          # TypeScript interfaces
├── App.tsx         # Main application component with routing
└── main.tsx        # Entry point
```

## Deployment

This project is ready for deployment on platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the project into Netlify/Vercel.
3.  The build settings should be automatically detected (Build command: `npm run build`, Output directory: `dist`).

## License

MIT
=======
# realestate

