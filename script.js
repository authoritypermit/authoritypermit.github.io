const quote = document.getElementById('quote');

if (quote) {
  const query = new URLSearchParams(location.search);
  const request = document.getElementById('request');
  const service = document.getElementById('service');
  const details = document.getElementById('details');

  const audience = document.getElementById('audience');
  if (query.get('service') === 'owner-builder') audience.value = 'homeowner';
  if (query.get('audience') === 'contractor') audience.value = 'contractor';

  if (query.get('request') === 'ongoing') request.value = 'ongoing';
  if (Array.from(service.options).some(option => option.value === query.get('service'))) {
    service.value = query.get('service');
  }

  function updatePrompt() {
    details.placeholder = request.value === 'ongoing'
      ? 'Which trades and areas do you cover? About how many permits do you file each month?'
      : 'What are you planning and when? Tell us if you’ve already applied.';
  }

  request.addEventListener('change', updatePrompt);
  updatePrompt();
}

const permitStages = document.querySelector('[data-permit-stages]');

if (permitStages && 'IntersectionObserver' in window
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      permitStages.classList.add('is-visible');
      observer.disconnect();
    }
  }, { threshold: 0.25 });

  observer.observe(permitStages);
}
