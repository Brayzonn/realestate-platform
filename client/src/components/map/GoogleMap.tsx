import React, { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

interface MapProps {
    center: { lat: number; lng: number };
    zoom: number;
    markers?: Array<{
      position: { lat: number; lng: number };
      title: string;
      info?: string;
    }>;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom, markers = [] }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new google.maps.Map(ref.current, {
          center,
          zoom,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
          zoomControl: true,
          // Enhanced styling for property viewing
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "on" }]
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "on" }]
            }
          ]
      });

      markers.forEach(marker => {
          const mapMarker = new google.maps.Marker({
              position: marker.position,
              map,
              title: marker.title,
              // Custom property marker icon
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#DC2626" stroke="#FFFFFF" stroke-width="3"/>
                    <path d="M20 12 L28 20 L24 20 L24 28 L16 28 L16 20 L12 20 Z" fill="#FFFFFF"/>
                  </svg>
                `),
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 20)
              },
              animation: google.maps.Animation.DROP
          });

          if (marker.info) {
            const infoWindow = new google.maps.InfoWindow({
              content: marker.info,
              maxWidth: 250
            });

            // Auto-open info window for property
            infoWindow.open(map, mapMarker);

            mapMarker.addListener('click', () => {
              infoWindow.open(map, mapMarker);
            });
          }

          // Add click handler for directions
          mapMarker.addListener('dblclick', () => {
            const destination = `${marker.position.lat},${marker.position.lng}`;
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
            window.open(googleMapsUrl, '_blank');
          });
      });

      // Add nearby places of interest
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: center,
        radius: 2000,
        type: 'school'
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          results.slice(0, 10).forEach(place => {
            if (place.geometry?.location) {
              const nearbyMarker = new google.maps.Marker({
                position: place.geometry.location,
                map,
                title: place.name,
                icon: {
                  url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="2"/>
                      <circle cx="10" cy="10" r="3" fill="#FFFFFF"/>
                    </svg>
                  `)}`,
                  scaledSize: new google.maps.Size(20, 20),
                  anchor: new google.maps.Point(10, 10)
                }
              });

              const nearbyInfoWindow = new google.maps.InfoWindow({
                content: `
                  <div style="max-width: 150px;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px;">${place.name}</h4>
                    <p style="margin: 0; font-size: 12px; color: #666;">${place.types?.[0]?.replace(/_/g, ' ')}</p>
                    ${place.rating ? `<p style="margin: 4px 0 0 0; font-size: 12px;">⭐ ${place.rating}</p>` : ''}
                  </div>
                `
              });

              nearbyMarker.addListener('click', () => {
                nearbyInfoWindow.open(map, nearbyMarker);
              });
            }
          });
        }
      });
    }
  }, [center, zoom, markers]);

  return (
    <div 
      ref={ref} 
      style={{ height: '500px', width: '100%' }}
      className="rounded-lg"
    />
  );
};

interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  apiKey, 
  center = { lat: 9.0415, lng: 7.4950 }, 
  zoom = 13,
  markers = []
}) => {
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="flex items-center justify-center h-[500px] bg-red-50 rounded-lg border border-red-200">
            <div className="text-center text-red-600">
              <p className="font-medium">Error loading map</p>
              <p className="text-sm">Please check your internet connection</p>
            </div>
          </div>
        );
      case Status.SUCCESS:
        return <MapComponent center={center} zoom={zoom} markers={markers} />;
    }
  };

  return <Wrapper apiKey={apiKey} render={render} libraries={['places']} />;
};

export default GoogleMap;