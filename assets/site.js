// Comportamentos opcionais: o site funciona sem eles.

// Tema claro/escuro, lembrado entre visitas.
const raiz = document.documentElement;
document.getElementById('tema')?.addEventListener('click', () => {
  const escuroAgora =
    raiz.dataset.theme === 'dark' ||
    (!raiz.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  raiz.dataset.theme = escuroAgora ? 'light' : 'dark';
  try { localStorage.setItem('tema', raiz.dataset.theme); } catch {}
});

// Revela as seções ao rolar, a menos que o usuário prefira menos movimento.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  raiz.classList.add('js');
  const obs = new IntersectionObserver(
    (entradas) => entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('.secao').forEach((s) => { s.classList.add('revelar'); obs.observe(s); });
}
