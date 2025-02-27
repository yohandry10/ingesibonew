// src/components/ProjectGallery.tsx
import React from "react";
import ImageGallery from "react-image-gallery";
// Importa el CSS de la librería para que se vea bien
import "react-image-gallery/styles/css/image-gallery.css";

interface ProjectGalleryProps {
  photos: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ photos }) => {
  // react-image-gallery requiere un array de objetos { original, thumbnail }
  const images = photos.map((photo) => ({
    original: photo,
    thumbnail: photo,
  }));

  return (
    <ImageGallery
      items={images}
      showPlayButton={false}      // Oculta el botón de "slideshow"
      showFullscreenButton={true} // Muestra botón de pantalla completa
      showThumbnails={true}       // Muestra miniaturas
      // showBullets={true}       // Ponlo en true si quieres puntitos de navegación
      // autoPlay={true}          // Activa si quieres autoplay
      // slideInterval={3000}     // Intervalo de autoplay en ms
    />
  );
};

export default ProjectGallery;
