const events = document.querySelectorAll('.event');

const showEvents = () => {
  events.forEach((event) => {
    if (isElementInViewport(event)) {
      event.classList.add('visible');
    }
  });
};

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('scroll', showEvents);
window.addEventListener('load', showEvents);
