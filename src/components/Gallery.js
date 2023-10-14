import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { desc } from '../jsonfiles/galleryDesc'
import { useState, useEffect } from 'react'
import '../styles/gallery.css'
function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);

  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const findPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const findNext = () => {
    if (currentIndex !== null && currentIndex < desc.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) closeModal();
      if (e.keyCode === 37) findPrev();
      if (e.keyCode === 39) findNext();
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
      <ResponsiveMasonry columnsCountBreakPoints={{350:1,550:2,900:4}}>
          <Masonry gutter='10px'>
            {
              desc.map((image,idx)=>{

                return(<div key={image.imgPath} onClick={() => openModal(idx)}>
                 <div className="image-wrapper" key={image.imgPath}>
                 <img
                    src={require(`../imagProps/events5/${image.imgPath}`)} alt={image.desc}
                  />
                    <div className="hover-text"><p>{image.desc}</p></div>
                  </div>
                </div>);

              })
            }          
          </Masonry>
        </ResponsiveMasonry>

      </div>
      {currentIndex !== null && (
        <GalleryModal
          closeModal={closeModal}
          findPrev={findPrev}
          findNext={findNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < desc.length - 1}
          src={desc[currentIndex].imgPath}
          alt={desc[currentIndex].desc}
        />
      )}
    </div>
  );
}

function GalleryModal({
  closeModal,
  hasPrev,
  hasNext,
  findPrev,
  findNext,
  src,
  alt,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) closeModal();
      if (e.keyCode === 37 && hasPrev) findPrev();
      if (e.keyCode === 39 && hasNext) findNext();
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, hasPrev, hasNext, findPrev, findNext]);

  if (!src) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal-body">
          <a href="#" className="modal-close" onClick={closeModal}>
            &times;
          </a>
          {hasPrev && (
            <a href="#" className="modal-prev" onClick={findPrev}>
              &lsaquo;
            </a>
          )}
          {hasNext && (
            <a href="#" className="modal-next" onClick={findNext}>
              &rsaquo;
            </a>
          )}
          <div className="modal-content">
          <img src={require(`../imagProps/events5/${src}`)} alt={alt} />
          <p className="image-description">{alt}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;