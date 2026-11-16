// Small enhancements only. Every page reads fine with this file switched off.
document.documentElement.classList.add('js');

// Phone menu
const menuBtn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

// Sections fade up once as they enter the screen
const rising = document.querySelectorAll('.rise');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  rising.forEach(el => io.observe(el));
} else {
  rising.forEach(el => el.classList.add('in'));
}

// Hero visual: soft rings of light with dots drifting toward one point. Drawn in code, no images.
const canvas = document.querySelector('.hero canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const still = canvas.dataset.mode === 'still' || matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const rings = [
    { r: 0.34, w: 0.050, c: '74,98,214', a: 0.50, sp: 0.21, ph: 0.0, ox: 0.00, oy: 0.00 },
    { r: 0.52, w: 0.070, c: '227,176,75', a: 0.26, sp: 0.16, ph: 1.7, ox: -0.05, oy: 0.04 },
    { r: 0.24, w: 0.030, c: '255,255,255', a: 0.20, sp: 0.27, ph: 3.1, ox: 0.04, oy: -0.03 },
    { r: 0.72, w: 0.100, c: '56,72,170', a: 0.34, sp: 0.12, ph: 4.4, ox: 0.07, oy: 0.06 },
    { r: 0.92, w: 0.060, c: '227,176,75', a: 0.12, sp: 0.10, ph: 5.2, ox: -0.02, oy: -0.05 },
  ];
  const dots = Array.from({ length: 150 }, () => ({
    ang: rnd() * Math.PI * 2, d: rnd(), sp: 0.018 + rnd() * 0.03, size: 0.8 + rnd() * 1.9, gold: rnd() < 0.28, twist: (rnd() - 0.5) * 0.9,
  }));
  let W = 0, H = 0;
  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), b = canvas.getBoundingClientRect();
    W = b.width; H = b.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const narrow = W < 800;
    const fx = W * (narrow ? 0.72 : 0.76), fy = H * (narrow ? 0.80 : 0.50), unit = Math.max(Math.min(W, H) * 0.95, 420);
    ctx.globalCompositeOperation = 'lighter';
    for (const k of rings) {
      const breathe = 1 + 0.045 * Math.sin(t * k.sp + k.ph);
      const cx = fx + unit * (k.ox + 0.02 * Math.cos(t * k.sp * 0.7 + k.ph));
      const cy = fy + unit * (k.oy + 0.02 * Math.sin(t * k.sp * 0.9 + k.ph));
      const r = unit * k.r * breathe, w = unit * k.w;
      const g = ctx.createRadialGradient(cx, cy, Math.max(0, r - w), cx, cy, r + w);
      g.addColorStop(0, `rgba(${k.c},0)`); g.addColorStop(0.5, `rgba(${k.c},${k.a})`); g.addColorStop(1, `rgba(${k.c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, unit * 0.2);
    glow.addColorStop(0, 'rgba(255,244,214,.55)'); glow.addColorStop(1, 'rgba(255,244,214,0)');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
    for (const p of dots) {
      const d = ((p.d - t * p.sp) % 1 + 1) % 1;            // 1 at the edge, 0 at the centre
      const ang = p.ang + p.twist * (1 - d);
      const x = fx + Math.cos(ang) * d * unit * 1.05, y = fy + Math.sin(ang) * d * unit * 1.05;
      const alpha = Math.min(1, (1 - d) * 4) * Math.min(1, d * 6) * 0.85;
      ctx.fillStyle = p.gold ? `rgba(227,176,75,${alpha})` : `rgba(214,222,255,${alpha * 0.8})`;
      ctx.beginPath(); ctx.arc(x, y, p.size * (0.6 + d * 0.7), 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  }
  size();
  if (still) {
    draw(6);
    addEventListener('resize', () => { size(); draw(6); });
  } else {
    let visible = true;
    new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(canvas);
    addEventListener('resize', size);
    const loop = now => { if (visible) draw(now / 1000); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
}

// Enquiry form: checks the fields, then opens the visitor's email app with everything filled in.
const form = document.querySelector('form[data-enquiry]');
if (form) {
  const field = name => form.elements[name];
  const mark = (name, bad) => field(name).closest('.field').classList.toggle('bad', bad);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = n => (field(n).value || '').trim();
    const checks = { name: !v('name'), email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email')), business: !v('business') };
    let first = null;
    for (const [n, bad] of Object.entries(checks)) { mark(n, bad); if (bad && !first) first = field(n); }
    if (first) { first.focus(); return; }
    const lines = [
      `Name: ${v('name')}`, `Email: ${v('email')}`, `Business: ${v('business')}`, `Website: ${v('website') || '-'}`,
      `Monthly ad budget: ${v('budget') || '-'}`, `Needs: ${v('need') || '-'}`, '', v('message'),
    ];
    const url = `mailto:${form.dataset.to}?subject=${encodeURIComponent('Enquiry from ' + v('business'))}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = url;
    const sent = form.querySelector('.sent'); sent.classList.add('on'); sent.focus();
  });
  form.addEventListener('input', e => { const f = e.target.closest('.field'); if (f) f.classList.remove('bad'); });
}
