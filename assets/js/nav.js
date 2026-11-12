(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav-links');
  if (!btn || !nav) return;

  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
    nav.classList.toggle('is-open', open);
  };

  btn.addEventListener('click', () => setOpen(!isOpen()));

  // chiude quando clicchi un link del menu
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // chiude con Esc e riporta il focus sul bottone
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      btn.focus();
    }
  });

  // chiude cliccando fuori dal nav
  document.addEventListener('click', (e) => {
    if (isOpen() && !e.target.closest('nav')) setOpen(false);
  });
})();
