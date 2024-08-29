const reels = document.querySelectorAll('.reel video');

function handleScroll() {
  reels.forEach(video => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      video.play();
    } else {
      video.pause();
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);  // Ensure correct video plays on page load

let startY;

document.querySelector('.instagram-reels').addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

document.querySelector('.instagram-reels').addEventListener('touchmove', (e) => {
  let moveY = e.touches[0].clientY;
  let diffY = startY - moveY;
  
  if (Math.abs(diffY) > 50) {
    window.scrollBy(0, diffY);
  }
});
