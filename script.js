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

if ('IntersectionObserver' in window
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.18 });

  document.querySelectorAll('[data-permit-stages], [data-reveal]').forEach(section => {
    observer.observe(section);
  });
}

const journalFilters = document.querySelector('.journal-filters');
if (journalFilters) {
  const posts = [...document.querySelectorAll('[data-post]')];
  const buttons = [...journalFilters.querySelectorAll('[data-filter]')];
  const status = document.getElementById('journal-status');

  journalFilters.hidden = false;
  journalFilters.addEventListener('click', event => {
    const selected = event.target.closest('button[data-filter]');
    if (!selected) return;

    const category = selected.dataset.filter;
    let count = 0;
    for (const post of posts) {
      post.hidden = category !== 'all' && post.dataset.post !== category;
      if (!post.hidden) count += 1;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button === selected));
    }
    status.textContent = count ? `${count} ${count === 1 ? 'post' : 'posts'}` : 'No posts in this category yet.';
  });
}
