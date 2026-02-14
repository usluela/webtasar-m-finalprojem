document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!lightbox || !lightboxImg || !closeBtn) {
        console.error('Lightbox elements not found!');
        return;
    }

    console.log('Lightbox initialized, found', galleryItems.length, 'images');

    galleryItems.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Image clicked:', this.src);
            
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            
            document.body.appendChild(lightbox);
            
            lightbox.style.cssText = `
                display: flex !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background-color: rgba(0, 0, 0, 0.95) !important;
                z-index: 999999 !important;
                justify-content: center !important;
                align-items: center !important;
                margin: 0 !important;
                padding: 0 !important;
                transform: none !important;
            `;
            
            document.body.style.overflow = 'hidden';
            
            window.scrollTo(0, 0);
            
            console.log('Lightbox opened at position:', lightbox.getBoundingClientRect());
        });
    });

    function closeLightbox() {
        console.log('Closing lightbox');
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});