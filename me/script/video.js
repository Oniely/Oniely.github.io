// Get the video element
const video = document.getElementById('background-video');

// Function to check if the video is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the video play/pause based on visibility
function handleVideoVisibility() {
  if (isElementInViewport(video)) {
    video.play();
  } else {
    video.pause();
  }
}

// Attach the visibility check to window's scroll and resize events
window.addEventListener('scroll', handleVideoVisibility);
window.addEventListener('resize', handleVideoVisibility);
