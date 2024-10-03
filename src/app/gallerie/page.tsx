"use client";
import React, { useState } from "react";

const images = [
  {
    url: "https://www.nature-isere.fr/sites/default/files/images/temoignages/principale/iceland-2111810_1920.jpg",
    title: "iceland",
  },
  {
    url: "https://static-cse.canva.com/blob/1535032/Sanstitre.jpg",
    title: "paysage2",
  },
  {
    url: "https://ecodev.ch/wp-content/uploads/2019/06/joshua-earle-12689-unsplash.jpg",
    title: "paysage3",
  },
  {
    url: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
    title: "paysage4",
  },
  {
    url: "https://df434cb4.rocketcdn.me/wp-content/uploads/2022/01/banque-image.jpg",
    title: "paysage5",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQUo9uLv9wlFnnxuhvoCajNSsVyhoo6bh9A&s",
    title: "paysage6",
  },
  {
    url: "https://media.istockphoto.com/id/1322104312/fr/photo/libert%C3%A9-cha%C3%AEnes-qui-se-transforment-en-oiseaux-concept-de-charge.jpg?s=612x612&w=0&k=20&c=4glDXzby1fpG-KHNVZoqOmNeHeaRfxrkSK3U4rm1Ynw=",
    title: "paysage7",
  },
  {
    url: "https://ssl.sitew.org/images/blog/articles/cover/pixabay.jpg",
    title: "paysage8",
  },
  {
    url: "https://www.dontbelievethehype.fr/wp-content/uploads/2015/12/Stock-Dock-House.jpg",
    title: "paysage9",
  },
];

const GalleryPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Gérer l'index de l'image

  const openModal = (index: number) => {
    setCurrentIndex(index); // Enregistrer l'index correct de l'image
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(null); // Réinitialiser l'index à la fermeture
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black py-8 px-4 dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Galerie d'images</h1>

      {/* Grille d'images responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-64 bg-gray-200 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(index)} // Ouvrir la modale avec l'index correct
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Vue modale */}
      {isOpen && currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
            {/* Bouton de fermeture */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image en grand format */}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-auto"
            />

            {/* Titre de l'image */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">
                {images[currentIndex].title}
              </h2>
            </div>

            {/* Boutons Précédent et Suivant */}
            <div className="flex justify-between p-4">
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
                  currentIndex === 0 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={prevImage}
                disabled={currentIndex === 0} // Désactiver le bouton si on est à la première image
              >
                Précédent
              </button>

              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
                  currentIndex === images.length - 1 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                onClick={nextImage}
                disabled={currentIndex === images.length - 1} // Désactiver le bouton si on est à la dernière image
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;