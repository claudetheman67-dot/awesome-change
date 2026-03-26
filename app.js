// Render gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '<p class="loading">Loading paintings...</p>';

    fetch('paintings.json')
        .then(response => response.json())
        .then(paintings => {
            galleryGrid.innerHTML = '';
            
            paintings.forEach(painting => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                
                item.innerHTML = `
                    <a href="painting.html?id=${painting.id}">
                        <img src="${painting.image}" alt="${painting.title}" onerror="this.style.display='none'">
                        <div class="gallery-item-info">
                            <div class="gallery-item-title">${painting.title}</div>
                            <div class="gallery-item-year">${painting.year}</div>
                        </div>
                    </a>
                `;
                
                galleryGrid.appendChild(item);
            });
        })
        .catch(err => {
            console.error('Error loading paintings:', err);
            galleryGrid.innerHTML = '<p>Unable to load paintings.</p>';
        });
});
