const cloneMarquee = () => {
  const marquees = document.querySelectorAll('[data-ar-marquee]');

  marquees.forEach((marquee) => {
    // Do not proceed if there is no marquee.
    if (!marquee) return;

    const content = marquee.querySelector('[data-ar-marquee-content]');

    const viewportWidth = window.innerWidth;
    const contentWidth = content.offsetWidth;

    // Calculate animation duration based on content width.
    const duration = contentWidth / 20;

    // Set variable for animation duration.
    marquee.style.setProperty('--duration', `${duration}s`);

    if (contentWidth < viewportWidth || contentWidth > viewportWidth) {
      const cloneCount = Math.ceil(viewportWidth / contentWidth);

      // Remove previous cloned items from marquee.
      const clonedElements = Array.from(
        marquee.querySelectorAll('[aria-hidden="true"]')
      );
      console.log(clonedElements);
      clonedElements.forEach((cloned) => {
        marquee.removeChild(cloned);
      });

      // Clone content.
      for (let i = 0; i <= cloneCount; i++) {
        const cloneItem = content.cloneNode(true);
        cloneItem.setAttribute('aria-hidden', 'true');
        marquee.appendChild(cloneItem);
      }
    }
  });
};

cloneMarquee();

// Event Listeners.
document.addEventListener('DOMContentLoaded', cloneMarquee);
window.addEventListener('resize', cloneMarquee);
