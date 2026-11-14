const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const modal = document.querySelector('[data-modal]');
const projectForm = document.querySelector('[data-project-form]');

const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.classList.toggle('open', !isOpen);
});

mobileMenu.querySelectorAll('a, button').forEach(item => item.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
}));

document.querySelectorAll('.solution-card').forEach(card => {
  const activate = () => {
    document.querySelectorAll('.solution-card').forEach(item => item.classList.remove('is-active'));
    card.classList.add('is-active');
  };
  card.addEventListener('mouseenter', activate);
  card.addEventListener('focusin', activate);
});

const configData = {
  residential: {
    kicker: 'CALM, EVERYDAY MOVEMENT',
    title: 'Home, without interruption.',
    copy: 'A residential concept begins with quiet operation, easy wayfinding and an interior palette that belongs to the building.',
    priorities: ['Low-noise arrival experience', 'Warm, durable cabin materials', 'Simple resident access'],
    position: '9%'
  },
  workplace: {
    kicker: 'CLEAR, RESPONSIVE PEOPLE FLOW',
    title: 'Make arrival work harder.',
    copy: 'A workplace concept balances morning peaks, intuitive destination choices and a lobby experience that supports the architecture.',
    priorities: ['Peak-time movement planning', 'Clear destination guidance', 'Integrated lobby language'],
    position: '30%'
  },
  hospitality: {
    kicker: 'A JOURNEY WITH A SENSE OF PLACE',
    title: 'Arrival is part of the stay.',
    copy: 'A hospitality concept connects back-of-house practicality with a guest journey that feels calm, tactile and considered.',
    priorities: ['Distinct guest and service flows', 'Tactile, memorable finishes', 'Comfort-led ride experience'],
    position: '52%'
  },
  renewal: {
    kicker: 'A SMARTER SECOND CHAPTER',
    title: 'Renew what already works.',
    copy: 'A modernization concept starts with the existing building, then prioritizes the changes that create the clearest everyday value.',
    priorities: ['Existing-system assessment', 'Phased upgrade planning', 'Contemporary controls and finishes'],
    position: '69%'
  }
};

document.querySelectorAll('[data-config]').forEach(tab => tab.addEventListener('click', () => {
  const data = configData[tab.dataset.config];
  document.querySelectorAll('[data-config]').forEach(item => item.setAttribute('aria-selected', String(item === tab)));
  const panel = document.querySelector('#config-panel');
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('[data-config-kicker]').textContent = data.kicker;
  document.querySelector('[data-config-title]').textContent = data.title;
  document.querySelector('[data-config-copy]').textContent = data.copy;
  document.querySelector('[data-priority-list]').innerHTML = data.priorities.map((item, index) => `<div><span>0${index + 1}</span><p>${item}</p></div>`).join('');
  document.querySelector('.lift-car').style.bottom = data.position;
}));

const openModal = () => {
  if (!modal.open) modal.showModal();
  document.body.classList.add('modal-open');
};
const closeModal = () => {
  modal.close();
  document.body.classList.remove('modal-open');
};
document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  openModal();
}));
document.querySelector('[data-close-modal]').addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeModal();
});
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

projectForm.addEventListener('submit', event => {
  event.preventDefault();
  const success = projectForm.querySelector('.form-success');
  success.hidden = false;
  projectForm.querySelector('.form-submit').textContent = 'Brief ready ✓';
  success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
