document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const animeList = document.querySelector('.favorite-anime');
    
    viewMoreBtn.addEventListener('click', function() {
     
      animeList.classList.toggle('show');
      if (animeList.classList.contains('show')) {
        viewMoreBtn.textContent = 'Coming soon';
      } else {
        viewMoreBtn.textContent = 'View More';
      }
    });

});
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  
  pages.forEach(page => {
    if (page.id === pageId) {
      page.style.display = 'none';
    } else {
      page.style.display = 'none';
    }
  });
}
