/* ==========================================================================
   AAROH DESIGN STUDIO — Interactions
   Demo website by CoreWeb AI · Vanilla JS, no dependencies
   ========================================================================== */
(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. STUDIO CONFIG — edit these values to rebrand the site
     ------------------------------------------------------------------------ */
  const STUDIO = {
    name: 'Aaroh Design Studio',
    city: 'Sangli, Maharashtra',
    address: 'Sangli, Maharashtra, India (Demo Location)',
    phoneDisplay: '+91 98765 43210',
    phoneTel: '+919876543210',
    email: 'hello@aarohdesignstudio.example',
    // WhatsApp number: country code + number, digits only (demo number)
    whatsappNumber: '919876543210',
    whatsappMessage: 'Hello, I am interested in your architecture/interior design services. I would like to discuss my project requirements and get more information.',
    mapQuery: 'Sangli, Maharashtra, India',
    social: {
      instagram: 'https://www.instagram.com/',
      pinterest: 'https://www.pinterest.com/',
      facebook: 'https://www.facebook.com/'
    }
  };

  /* ------------------------------------------------------------------------
     2. PROJECT DATA — cards, filters, modal and footer render from this
     ------------------------------------------------------------------------ */
  const PROJECTS = [
    {
      id: 'courtyard-house',
      title: 'The Courtyard House',
      category: 'Residential Architecture',
      filters: ['architecture', 'residential'],
      location: 'Sangli, Maharashtra',
      year: '2024', area: '3,800 sq. ft.', type: 'Private residence',
      description: 'A contemporary family home designed around natural light, open spaces and a private central courtyard.',
      concept: 'Designed around the idea of bringing light and openness into everyday living, the home uses a central courtyard to connect indoor spaces while maintaining privacy.',
      challenge: 'An east-facing urban plot with neighbours on three sides, harsh western sun, and a family that wanted privacy without closed, dark rooms.',
      solution: 'We turned the plan inward around an open-to-sky courtyard. Living, dining and kitchen open onto it through full-height glazing, a perforated screen filters western light, and high clerestory windows draw hot air out — keeping the home cool through Sangli summers.',
      highlights: ['Natural lighting', 'Passive ventilation', 'Functional zoning', 'Contemporary architecture', 'Material balance'],
      materials: [['Exposed concrete', '#9C9890'], ['Teak wood', '#8A5A3B'], ['Kota stone', '#6F7468'], ['Lime plaster', '#E8E1D3'], ['Terracotta jaali', '#B66E4E']],
      services: ['Architectural design', 'Structural coordination', 'Interior design', 'Landscape planning', 'Site supervision'],
      cover: '1600607688969-a5bfcd646154',
      gallery: [
        ['1600607688969-a5bfcd646154', 'Exterior elevation'],
        ['1600573472550-8090b5e0745e', 'Courtyard'],
        ['1600607687939-ce8a6c25118c', 'Living area'],
        ['1600573472592-401b489a3cdc', 'Screen & facade detail']
      ]
    },
    {
      id: 'warm-residence',
      title: 'The Warm Residence',
      category: 'Residential Interiors',
      filters: ['residential', 'interiors'],
      location: 'Kolhapur, Maharashtra',
      year: '2024', area: '2,400 sq. ft.', type: '3 BHK apartment',
      description: 'A warm and understated interior blending natural textures, soft lighting, wood finishes and contemporary furniture.',
      concept: 'A calm, layered home where natural textures and soft, indirect light create warmth without visual clutter.',
      challenge: 'A standard apartment with low ceilings, limited daylight in the dining zone, and a family needing generous storage for three generations.',
      solution: 'Ceiling coves with warm indirect lighting visually lift the rooms. A full-height oak-veneer storage wall conceals daily clutter, while a light, neutral palette and linen drapes keep every space bright and airy.',
      highlights: ['Concealed storage', 'Layered lighting', 'Natural textures', 'Multi-generational planning', 'Soft neutral palette'],
      materials: [['Oak veneer', '#B48A5F'], ['Linen', '#DDD3C2'], ['Travertine', '#CDBBA0'], ['Brushed brass', '#A88A55'], ['Limewash', '#EFEAE0']],
      services: ['Interior design', '3D visualization', 'Furniture design', 'Lighting design', 'Turnkey execution'],
      cover: '1618221195710-dd6b41faaea6',
      gallery: [
        ['1618221195710-dd6b41faaea6', 'Living room'],
        ['1615874959474-d609969a20ed', 'Bedroom'],
        ['1617806118233-18e1de247200', 'Dining area'],
        ['1622372738946-62e02505feb3', 'Material details']
      ]
    },
    {
      id: 'urban-workspace',
      title: 'Urban Workspace',
      category: 'Commercial Interiors',
      filters: ['commercial', 'offices', 'interiors'],
      location: 'Pune, Maharashtra',
      year: '2023', area: '6,500 sq. ft.', type: 'Office for 60 people',
      description: 'A contemporary office designed to support collaboration, productivity and a comfortable working environment.',
      concept: 'A workplace that feels more like a well-designed studio than a corporate floor — open, flexible and quietly energising.',
      challenge: 'A deep floor plate with daylight on one side only, a growing team of 60, and the need for focus zones alongside collaboration and client meeting spaces.',
      solution: 'Glass-partitioned meeting rooms line the core so daylight reaches deep into the floor. Workstations sit by the windows, acoustic panels and planting soften sound, and a central lounge doubles as an informal town-hall space.',
      highlights: ['Daylight-led planning', 'Acoustic comfort', 'Flexible collaboration zones', 'Brand-led reception', 'Efficient workstation layout'],
      materials: [['Clear glass', '#A9B7B9'], ['Ash wood', '#C9AE88'], ['Acoustic felt', '#6D6E63'], ['Polished concrete', '#A3A09A'], ['Black metal', '#2C2B29']],
      services: ['Commercial interior design', 'Space planning', 'Workstation planning', 'MEP coordination', 'Project management'],
      cover: '1497366811353-6870744d04b2',
      gallery: [
        ['1600508774634-4e11d34730e2', 'Reception'],
        ['1531973576160-7125cd663d86', 'Workstations'],
        ['1517502884422-41eaead166d4', 'Meeting room'],
        ['1524758631624-e2822e304c36', 'Collaborative lounge']
      ]
    },
    {
      id: 'minimal-villa',
      title: 'The Minimal Villa',
      category: 'Architecture',
      filters: ['architecture', 'residential'],
      location: 'Sangli, Maharashtra',
      year: '2025', area: '5,200 sq. ft.', type: 'Private villa',
      description: 'A modern villa with clean architectural lines, carefully proportioned volumes and a restrained material palette.',
      concept: 'A study in restraint — pure volumes, deep overhangs and carefully framed views that let light and landscape do the talking.',
      challenge: 'A large open site with intense afternoon sun, and a brief for a contemporary home that stays cool, private and low-maintenance.',
      solution: 'Cantilevered slabs and deep overhangs shade the glazing, while a pool on the west edge cools breezes before they enter the house. White plaster, natural stone and timber keep maintenance simple and the architecture timeless.',
      highlights: ['Climate-responsive overhangs', 'Pool-cooled microclimate', 'Framed landscape views', 'Low-maintenance palette', 'Clean architectural lines'],
      materials: [['White plaster', '#F0EDE6'], ['Natural stone', '#B9AE9C'], ['Teak', '#8C5E3C'], ['Bronze glass', '#7D7466'], ['Grey basalt', '#5E5E5A']],
      services: ['Architectural design', 'Elevation design', 'Landscape planning', 'Interior design', 'Site supervision'],
      cover: '1613490493576-7fde63acd811',
      gallery: [
        ['1613490493576-7fde63acd811', 'Exterior facade'],
        ['1613977257363-707ba9348227', 'Landscape & pool'],
        ['1613545325278-f24b0cae1224', 'Living area'],
        ['1600566753190-17f0baa2a6c3', 'Architectural details']
      ]
    },
    {
      id: 'atelier-cafe',
      title: 'Atelier Café',
      category: 'Commercial Design',
      filters: ['commercial', 'hospitality', 'interiors'],
      location: 'Miraj, Maharashtra',
      year: '2024', area: '1,600 sq. ft.', type: 'Café · 40 covers',
      description: 'A welcoming cafe interior combining warm materials, ambient lighting and a distinctive customer experience.',
      concept: 'A neighbourhood café designed as a warm, unhurried retreat — part coffee bar, part reading room.',
      challenge: 'A long, narrow ground-floor shop with a single street frontage, a tight budget and the need to seat 40 guests without feeling cramped.',
      solution: 'The counter sits as a sculptural anchor at the entrance, drawing guests in. Banquette seating along one wall maximises covers, while pendant lights, exposed brick and greenery create intimate pockets along the depth of the space.',
      highlights: ['Signature counter design', 'Efficient seating plan', 'Ambient lighting', 'Brand-led interiors', 'Durable commercial finishes'],
      materials: [['Exposed brick', '#9E5E45'], ['Walnut', '#5C3F2E'], ['Terrazzo', '#D9D2C5'], ['Brass', '#B08D57'], ['Olive tile', '#6E6F52']],
      services: ['Commercial interior design', 'Brand-led space design', 'Lighting design', 'Furniture design', 'Turnkey execution'],
      cover: '1453614512568-c4024d13c247',
      gallery: [
        ['1554118811-1e0d58224f24', 'Café interiors'],
        ['1521017432531-fbd92d768814', 'Seating'],
        ['1453614512568-c4024d13c247', 'Counter'],
        ['1514933651103-005eec06c04b', 'Lighting details']
      ]
    },
    {
      id: 'modern-kitchen',
      title: 'The Modern Kitchen',
      category: 'Interior Design',
      filters: ['residential', 'interiors'],
      location: 'Kolhapur, Maharashtra',
      year: '2025', area: '180 sq. ft.', type: 'Modular kitchen',
      description: 'A functional modular kitchen with clean detailing, efficient storage and premium finishes.',
      concept: 'A kitchen built around how the family actually cooks — clean lines on the surface, intelligent organisation beneath.',
      challenge: 'An L-shaped kitchen with heavy daily Indian cooking, limited counter space and storage scattered across mismatched old cabinets.',
      solution: 'We re-planned it into an efficient work triangle with dedicated wet and dry zones, tall pantry units and deep drawers with organisers. Quartz counters and a high-suction chimney handle everyday tadka without compromise.',
      highlights: ['Work-triangle planning', 'Wet & dry zones', 'Tall pantry storage', 'Soft-close hardware', 'Easy-clean finishes'],
      materials: [['Quartz', '#E6E2DA'], ['Matte laminate', '#4A4B47'], ['Oak veneer', '#B38B60'], ['Brushed steel', '#A7A7A2'], ['Ceramic tile', '#EDEBE6']],
      services: ['Modular kitchen design', '3D visualization', 'Custom storage', 'Electrical coordination', 'Installation'],
      cover: '1600585152220-90363fe7e115',
      gallery: [
        ['1600585152220-90363fe7e115', 'Kitchen layout'],
        ['1600489000022-c2086d79f9d4', 'Storage'],
        ['1600566752229-250ed79470f8', 'Cabinet details'],
        ['1565538810643-b5bdb714032a', 'Countertop materials']
      ]
    }
  ];

  /* ------------------------------------------------------------------------
     3. HELPERS
     ------------------------------------------------------------------------ */
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const img = (id, w, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=75`;
  const srcset = (id, widths = [600, 1000, 1500]) => widths.map(w => `${img(id, w)} ${w}w`).join(', ');

  const waLink = (msg) => `https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(msg || STUDIO.whatsappMessage)}`;

  let toastTimer;
  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3600);
  }

  // Locks page scroll while overlays are open (counts nested overlays)
  let lockCount = 0;
  const lockScroll = () => { if (lockCount++ === 0) document.body.classList.add('is-locked'); };
  const unlockScroll = () => { if (--lockCount <= 0) { lockCount = 0; document.body.classList.remove('is-locked'); } };

  function trapFocus(container, e) {
    if (e.key !== 'Tab') return;
    const f = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', container)
      .filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ------------------------------------------------------------------------
     4. CONFIG BINDING — fill contact details + WhatsApp/social links
     ------------------------------------------------------------------------ */
  function bindConfig(root = document) {
    $$('[data-config]', root).forEach(el => { if (STUDIO[el.dataset.config]) el.textContent = STUDIO[el.dataset.config]; });
    $$('[data-config-href="tel"]', root).forEach(el => { el.href = `tel:${STUDIO.phoneTel}`; });
    $$('[data-config-href="mailto"]', root).forEach(el => { el.href = `mailto:${STUDIO.email}`; });
    $$('[data-social]', root).forEach(el => { el.href = STUDIO.social[el.dataset.social] || '#'; });
    $$('[data-whatsapp]', root).forEach(el => {
      el.href = waLink(el.dataset.whatsapp);
      el.target = '_blank';
      el.rel = 'noopener';
    });
    const dir = $('#directionsLink');
    if (dir) dir.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO.mapQuery)}`;
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------------
     5. HEADER, MOBILE NAV, ACTIVE SECTION
     ------------------------------------------------------------------------ */
  const header = $('#header');
  const nav = $('#nav');
  const burger = $('#burger');
  const toTop = $('#toTop');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    toTop.classList.toggle('is-visible', y > window.innerHeight * 1.2);
  }

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    open ? lockScroll() : unlockScroll();
  }

  function initNav() {
    burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    nav.addEventListener('click', e => { if (e.target.closest('a') && nav.classList.contains('is-open')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); burger.focus(); } });
    window.matchMedia('(min-width: 1081px)').addEventListener('change', e => { if (e.matches && nav.classList.contains('is-open')) setMenu(false); });

    // Active link highlighting
    const links = $$('.nav__link');
    const map = { home: 'home', studio: 'studio', projects: 'projects', services: 'services', philosophy: 'studio', process: 'process', materials: 'process', transformation: 'projects', why: 'studio', testimonials: 'studio', faq: 'contact', contact: 'contact', enquiry: 'contact' };
    const sections = Object.keys(map).map(id => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = map[entry.target.id];
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${target}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));

    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     6. SCROLL REVEAL + COUNTERS + TIMELINE
     ------------------------------------------------------------------------ */
  function initReveal() {
    // stagger siblings in the same parent
    const groups = new Map();
    $$('.reveal').forEach(el => {
      const list = groups.get(el.parentElement) || [];
      el.style.setProperty('--rd', `${Math.min(list.length, 6) * 0.08}s`);
      list.push(el); groups.set(el.parentElement, list);
    });

    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    $$('.reveal').forEach(el => io.observe(el));

    // Counters
    const cio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target; const end = +el.dataset.count;
        cio.unobserve(el);
        if (reduceMotion) { el.textContent = end; return; }
        const start = performance.now(); const dur = 1600;
        const step = now => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(el => cio.observe(el));

    // Process timeline
    const tl = $('#timeline');
    $$('.timeline__step', tl).forEach((s, i) => s.style.setProperty('--si', i));
    const tio = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { tl.classList.add('is-visible'); tl.style.setProperty('--progress', 1); tio.disconnect(); }
    }, { threshold: 0.25 });
    tio.observe(tl);
  }

  /* ------------------------------------------------------------------------
     7. PORTFOLIO — render, filter
     ------------------------------------------------------------------------ */
  const grid = $('#workGrid');
  const LAYOUT = ['a', 'b', 'c', 'd', 'e', 'f'];
  let currentFilter = 'all';
  let visibleProjects = PROJECTS.slice();

  function layoutFor(i, total) {
    if (total === 1) return 'solo';
    // avoid a lone half-width card at the end: make it a wide row instead
    const v = LAYOUT[i % LAYOUT.length];
    if (i === total - 1 && (v === 'a' || v === 'd')) return i % 2 ? 'f' : 'c';
    return v;
  }

  function cardHTML(p, i, total) {
    const v = layoutFor(i, total);
    const wide = v === 'c' || v === 'f' || v === 'solo';
    const sizes = wide ? '(max-width: 900px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 900px) 50vw, 55vw';
    const n = PROJECTS.indexOf(p) + 1;
    return `
      <article class="pcard pcard--${v}" style="--i:${(i * 0.09).toFixed(2)}s">
        <button class="pcard__media" data-open-project="${p.id}" aria-label="View project: ${esc(p.title)}">
          <span class="pcard__index">${pad(n)}</span>
          <img loading="lazy" decoding="async" src="${img(p.cover, 1100)}" srcset="${srcset(p.cover)}" sizes="${sizes}" alt="${esc(p.title)} — ${esc(p.gallery[0][1].toLowerCase())}, ${esc(p.location)}">
        </button>
        <div class="pcard__body">
          <p class="pcard__meta"><span>${esc(p.category)}</span><span>${esc(p.location)}</span></p>
          <h3 class="pcard__title">${esc(p.title)}</h3>
          <p class="pcard__desc">${esc(p.description)}</p>
          <button class="pcard__btn" data-open-project="${p.id}">View Project <span aria-hidden="true">→</span></button>
        </div>
      </article>`;
  }

  function renderGrid() {
    visibleProjects = currentFilter === 'all' ? PROJECTS.slice() : PROJECTS.filter(p => p.filters.includes(currentFilter));
    grid.innerHTML = visibleProjects.length
      ? visibleProjects.map((p, i) => cardHTML(p, i, visibleProjects.length)).join('')
      : '<p class="work-empty">New projects in this category are coming soon.</p>';
    const c = visibleProjects.length;
    $('#projectCount').textContent = `${pad(c)} ${c === 1 ? 'project' : 'projects'}`;
  }

  function initPortfolio() {
    renderGrid();
    const filterBtns = $$('.filter');
    filterBtns.forEach(btn => btn.addEventListener('click', () => {
      if (btn.dataset.filter === currentFilter) return;
      currentFilter = btn.dataset.filter;
      filterBtns.forEach(b => { const on = b === btn; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); });
      if (reduceMotion) { renderGrid(); return; }
      grid.classList.add('is-fading');
      setTimeout(() => { renderGrid(); grid.classList.remove('is-fading'); }, 350);
    }));

    // Footer project links
    $('#footerProjects').innerHTML = PROJECTS.map(p => `<li><a href="#projects" data-open-project="${p.id}">${esc(p.title)}</a></li>`).join('');
  }

  /* ------------------------------------------------------------------------
     8. PROJECT MODAL
     ------------------------------------------------------------------------ */
  const modal = $('#pmodal');
  const modalPanel = $('.pmodal__panel', modal);
  const modalContent = $('#pmContent');
  let modalIndex = 0;
  let modalList = PROJECTS;
  let modalReturnFocus = null;

  function modalHTML(p) {
    const list = modalList;
    const i = list.indexOf(p);
    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    const waMsg = `Hello, I saw "${p.title}" on your website and would like to discuss a similar ${p.category.toLowerCase()} project.`;
    return `
      <div class="pm__hero"><img src="${img(p.cover, 1800)}" srcset="${srcset(p.cover, [800, 1400, 2000])}" sizes="(max-width: 1180px) 100vw, 1180px" alt="${esc(p.title)} — ${esc(p.gallery[0][1])}"></div>
      <div class="pm__inner">
        <header class="pm__top">
          <div>
            <p class="pm__cat">${esc(p.category)}</p>
            <h2 class="pm__title" id="pmTitle">${esc(p.title)}</h2>
          </div>
          <p class="pm__desc">${esc(p.description)}</p>
        </header>
        <dl class="pm__facts">
          <div><dt>Location</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>Category</dt><dd>${esc(p.category)}</dd></div>
          <div><dt>Typology</dt><dd>${esc(p.type)}</dd></div>
          <div><dt>Area · Year</dt><dd>${esc(p.area)} · ${esc(p.year)}</dd></div>
        </dl>
        <section class="pm__section">
          <h3 class="pm__label">Design Concept</h3>
          <p class="pm__concept">${esc(p.concept)}</p>
        </section>
        <section class="pm__section">
          <h3 class="pm__label">Challenge &amp; Response</h3>
          <div class="pm__cols">
            <div><h4>The Challenge</h4><p>${esc(p.challenge)}</p></div>
            <div><h4>Our Solution</h4><p>${esc(p.solution)}</p></div>
          </div>
        </section>
        <section class="pm__section">
          <h3 class="pm__label">Project Highlights</h3>
          <ul class="pm__highlights">${p.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>
        </section>
        <section class="pm__section">
          <h3 class="pm__label">Material Palette</h3>
          <ul class="pm__materials">${p.materials.map(([n, c]) => `<li class="pm__swatch"><i style="--sw:${c}"></i>${esc(n)}</li>`).join('')}</ul>
        </section>
        <section class="pm__section">
          <h3 class="pm__label">Services Involved</h3>
          <ul class="pm__services">${p.services.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        </section>
        <section class="pm__gallery" aria-label="Project images">
          <div class="pm__gallery-head"><h3 class="pm__label">Project Gallery</h3><span class="demo-note">Tap an image to enlarge</span></div>
          ${p.gallery.map(([id, cap], gi) => `
            <button class="pm__gimg" data-lightbox="${gi}" aria-label="Enlarge image: ${esc(cap)}">
              <img loading="lazy" decoding="async" src="${img(id, 1000)}" srcset="${srcset(id, [500, 1000, 1400])}" sizes="(max-width: 640px) 50vw, 60vw" alt="${esc(p.title)} — ${esc(cap)}">
              <span>${esc(cap)}</span>
            </button>`).join('')}
        </section>
        <aside class="pm__cta">
          <div>
            <h4>Planning something similar?</h4>
            <p>Share your requirements and we'll get back with next steps.</p>
          </div>
          <div class="pm__cta-actions">
            <a href="#enquiry" class="btn btn--dark" data-close-modal data-prefill-type="${esc(p.id)}">Start Your Project</a>
            <a href="${waLink(waMsg)}" target="_blank" rel="noopener" class="btn btn--outline">
              <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-whatsapp"/></svg> WhatsApp</a>
          </div>
        </aside>
      </div>
      ${list.length > 1 ? `
      <nav class="pm__pager" aria-label="More projects">
        <button data-pm-go="${prev.id}"><small>← Previous</small><strong>${esc(prev.title)}</strong></button>
        <button data-pm-go="${next.id}"><small>Next →</small><strong>${esc(next.title)}</strong></button>
      </nav>` : ''}`;
  }

  function showProject(id, animate) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    if (!modalList.includes(p)) modalList = PROJECTS;
    modalIndex = modalList.indexOf(p);
    modalContent.innerHTML = modalHTML(p);
    modalContent.scrollTop = 0;
    $('#pmCounter').textContent = `${pad(modalIndex + 1)} / ${pad(modalList.length)}`;
    const single = modalList.length < 2;
    $('#pmPrev').hidden = single; $('#pmNext').hidden = single;
    if (animate) {
      modalContent.classList.remove('is-switching'); void modalContent.offsetWidth; modalContent.classList.add('is-switching');
    }
  }

  function openModal(id) {
    // Navigate within the current filter when the project is part of it
    modalList = visibleProjects.some(p => p.id === id) ? visibleProjects.slice() : PROJECTS;
    modalReturnFocus = document.activeElement;
    showProject(id, false);
    modal.hidden = false;
    lockScroll();
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('is-open')));
    setTimeout(() => modalPanel.focus(), 60);
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    unlockScroll();
    setTimeout(() => { modal.hidden = true; modalContent.innerHTML = ''; }, reduceMotion ? 0 : 650);
    if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus({ preventScroll: true });
  }

  const stepModal = dir => showProject(modalList[(modalIndex + dir + modalList.length) % modalList.length].id, true);

  function initModal() {
    document.addEventListener('click', e => {
      const opener = e.target.closest('[data-open-project]');
      if (opener) { e.preventDefault(); if (nav.classList.contains('is-open')) setMenu(false); openModal(opener.dataset.openProject); return; }
    });
    modal.addEventListener('click', e => {
      const go = e.target.closest('[data-pm-go]');
      if (go) { showProject(go.dataset.pmGo, true); return; }
      const lb = e.target.closest('[data-lightbox]');
      if (lb) { openLightbox(modalList[modalIndex].gallery, +lb.dataset.lightbox); return; }
      const closer = e.target.closest('[data-close-modal]');
      if (closer) {
        const prefill = closer.dataset.prefillType;
        closeModal();
        if (prefill) prefillFromProject(prefill);
      }
    });
    $('#pmPrev').addEventListener('click', () => stepModal(-1));
    $('#pmNext').addEventListener('click', () => stepModal(1));
    modal.addEventListener('keydown', e => {
      if (!lightbox.hidden) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft' && modalList.length > 1) stepModal(-1);
      else if (e.key === 'ArrowRight' && modalList.length > 1) stepModal(1);
      else trapFocus(modalPanel, e);
    });
  }

  /* ------------------------------------------------------------------------
     9. LIGHTBOX
     ------------------------------------------------------------------------ */
  const lightbox = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCaption');
  let lbItems = [];
  let lbIndex = 0;
  let lbReturnFocus = null;

  function lbShow(i) {
    lbIndex = (i + lbItems.length) % lbItems.length;
    const [id, cap] = lbItems[lbIndex];
    lbImg.classList.add('is-loading');
    lbImg.onload = () => lbImg.classList.remove('is-loading');
    lbImg.src = img(id, 1800);
    lbImg.alt = cap;
    lbCap.textContent = `${cap} — ${pad(lbIndex + 1)} / ${pad(lbItems.length)}`;
  }

  function openLightbox(items, i) {
    lbItems = items; lbReturnFocus = document.activeElement;
    lightbox.hidden = false; lockScroll(); lbShow(i);
    requestAnimationFrame(() => lightbox.classList.add('is-open'));
    $('[data-lb="close"]', lightbox).focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    unlockScroll();
    setTimeout(() => { lightbox.hidden = true; }, reduceMotion ? 0 : 350);
    if (lbReturnFocus) lbReturnFocus.focus({ preventScroll: true });
  }

  function initLightbox() {
    lightbox.addEventListener('click', e => {
      const a = e.target.closest('[data-lb]');
      if (a) { const act = a.dataset.lb; act === 'close' ? closeLightbox() : lbShow(lbIndex + (act === 'next' ? 1 : -1)); return; }
      if (e.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener('keydown', e => {
      e.stopPropagation();
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      else if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
      else trapFocus(lightbox, e);
    });
    let sx = null;
    lightbox.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
      sx = null;
    });
  }

  /* ------------------------------------------------------------------------
     10. SERVICES (tabs on desktop / accordion on mobile)
     ------------------------------------------------------------------------ */
  function initServices() {
    const items = $$('.svc__item');
    const activate = (idx, toggle) => {
      items.forEach((item, i) => {
        const isTarget = i === idx;
        const on = isTarget ? (toggle ? !item.classList.contains('is-active') : true) : false;
        item.classList.toggle('is-active', on);
        $('.svc__trigger', item).setAttribute('aria-expanded', String(on));
      });
    };
    const isMobile = () => window.matchMedia('(max-width: 1080px)').matches;
    items.forEach((item, i) => {
      $('.svc__trigger', item).addEventListener('click', () => activate(i, isMobile()));
    });
    // Ensure one panel is open on desktop after resizing from a collapsed mobile state
    window.matchMedia('(max-width: 1080px)').addEventListener('change', e => {
      if (!e.matches && !items.some(it => it.classList.contains('is-active'))) activate(0, false);
    });
    // Footer service links open the matching service
    $$('[data-service-tab]').forEach(a => a.addEventListener('click', () => activate(+a.dataset.serviceTab, false)));

    // "Learn More" pre-fills the enquiry form for that service
    $$('[data-learn]').forEach(btn => btn.addEventListener('click', () => {
      prefillForm({ service: btn.dataset.learn, type: btn.dataset.type });
      $('#enquiry').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      toast(`We've pre-selected “${btn.dataset.learn}” in the enquiry form below — add a few details to continue.`);
    }));
  }

  /* ------------------------------------------------------------------------
     11. MATERIALS
     ------------------------------------------------------------------------ */
  function initMaterials() {
    const mats = $$('.mat');
    const note = $('#materialNote');
    const select = m => {
      mats.forEach(x => { x.classList.toggle('is-active', x === m); x.setAttribute('aria-pressed', String(x === m)); });
      $('.materials__note-name', note).textContent = m.dataset.material;
      $('.materials__note-text', note).textContent = m.dataset.note;
    };
    mats.forEach(m => {
      m.addEventListener('click', () => select(m));
      m.addEventListener('mouseenter', () => { if (window.matchMedia('(hover: hover)').matches) select(m); });
    });
    if (mats[0]) select(mats[0]);
  }

  /* ------------------------------------------------------------------------
     12. BEFORE / AFTER SLIDER
     ------------------------------------------------------------------------ */
  function initBeforeAfter() {
    const ba = $('#beforeAfter');
    if (!ba) return;
    const range = $('.ba__range', ba);
    const set = v => { v = Math.max(0, Math.min(100, v)); ba.style.setProperty('--pos', `${v}%`); range.value = v; };
    const fromEvent = e => { const r = ba.getBoundingClientRect(); set(((e.clientX - r.left) / r.width) * 100); };
    let dragging = false;
    let startX = 0, startY = 0, decided = false;

    ba.addEventListener('pointerdown', e => {
      dragging = true; decided = e.pointerType !== 'touch';
      startX = e.clientX; startY = e.clientY;
      if (decided) { ba.classList.add('is-dragging'); ba.setPointerCapture(e.pointerId); fromEvent(e); }
    });
    ba.addEventListener('pointermove', e => {
      if (!dragging) return;
      if (!decided) {
        // on touch, only take over horizontal drags so vertical page scroll still works
        const dx = Math.abs(e.clientX - startX), dy = Math.abs(e.clientY - startY);
        if (dx < 6 && dy < 6) return;
        if (dy > dx) { dragging = false; return; }
        decided = true; ba.classList.add('is-dragging'); ba.setPointerCapture(e.pointerId);
      }
      fromEvent(e);
    });
    const end = e => {
      if (dragging && !decided && e.type === 'pointerup') fromEvent(e); // tap to jump
      dragging = false; ba.classList.remove('is-dragging');
    };
    ba.addEventListener('pointerup', end);
    ba.addEventListener('pointercancel', end);
    range.addEventListener('input', () => set(+range.value));
  }

  /* ------------------------------------------------------------------------
     13. TESTIMONIALS CAROUSEL
     ------------------------------------------------------------------------ */
  function initTestimonials() {
    const root = $('#tcarousel');
    const slides = $$('.tslide', root);
    const dotsWrap = $('.tcarousel__dots', root);
    let idx = 0, timer;
    dotsWrap.innerHTML = slides.map((_, i) => `<button role="tab" aria-label="Testimonial ${i + 1}" aria-selected="${i === 0}"></button>`).join('');
    const dots = $$('button', dotsWrap);
    const go = i => {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, n) => { s.classList.toggle('is-active', n === idx); s.setAttribute('aria-hidden', String(n !== idx)); });
      dots.forEach((d, n) => d.setAttribute('aria-selected', String(n === idx)));
    };
    const play = () => { if (reduceMotion) return; clearInterval(timer); timer = setInterval(() => go(idx + 1), 7000); };
    const stop = () => clearInterval(timer);
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); play(); }));
    $('[data-tc="prev"]', root).addEventListener('click', () => { go(idx - 1); play(); });
    $('[data-tc="next"]', root).addEventListener('click', () => { go(idx + 1); play(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', play);
    root.addEventListener('focusin', stop);
    let sx = null;
    root.addEventListener('touchstart', e => { sx = e.touches[0].clientX; stop(); }, { passive: true });
    root.addEventListener('touchend', e => {
      if (sx !== null) { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1)); }
      sx = null; play();
    });
    go(0); play();
  }

  /* ------------------------------------------------------------------------
     14. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  function initFAQ() {
    const items = $$('.acc');
    items.forEach((item, i) => {
      const btn = $('.acc__btn', item);
      const panel = $('.acc__panel', item);
      btn.id = `faq-q${i + 1}`; panel.id = `faq-a${i + 1}`;
      btn.setAttribute('aria-controls', panel.id);
      panel.setAttribute('role', 'region'); panel.setAttribute('aria-labelledby', btn.id);
      btn.addEventListener('click', () => {
        const open = !item.classList.contains('is-open');
        items.forEach(o => { o.classList.remove('is-open'); $('.acc__btn', o).setAttribute('aria-expanded', 'false'); });
        if (open) { item.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });
    if (items[0]) $('.acc__btn', items[0]).click();
  }

  /* ------------------------------------------------------------------------
     15. ENQUIRY FORM
     ------------------------------------------------------------------------ */
  const form = $('#enquiryForm');
  const PROJECT_TO_TYPE = {
    'courtyard-house': ['New House Construction', 'Architectural Design', 'Bungalow'],
    'warm-residence': ['Apartment Interiors', 'Interior Design', 'Apartment'],
    'urban-workspace': ['Office Interiors', 'Interior Design', 'Office'],
    'minimal-villa': ['Bungalow / Villa', 'Architectural Design', 'Villa'],
    'atelier-cafe': ['Cafe / Restaurant', 'Interior Design', 'Retail Space'],
    'modern-kitchen': ['Modular Kitchen', 'Modular Kitchen', 'Apartment']
  };

  function prefillForm({ service, type, property }) {
    if (form.hidden) $('#resetForm').click(); // return from the success state first
    if (type) form.projectType.value = type;
    if (property) form.propertyType.value = property;
    if (service) {
      const box = $$('input[name="services"]', form).find(c => c.value === service);
      if (box) box.checked = true;
    }
    $$('.field.has-error', form).forEach(f => validateField(f));
  }

  function prefillFromProject(id) {
    const m = PROJECT_TO_TYPE[id];
    if (!m) return;
    prefillForm({ type: m[0], service: m[1], property: m[2] });
    setTimeout(() => {
      $('#enquiry').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      toast('Project type pre-filled — tell us a little about your space.');
    }, reduceMotion ? 0 : 450);
  }

  const RULES = {
    name: v => v.trim().length < 2 ? 'Please enter your full name.' : (/^[\p{L} .'-]+$/u.test(v.trim()) ? '' : 'Please use letters only.'),
    phone: v => {
      const d = v.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
      if (!d) return 'Please enter your mobile number.';
      return /^[6-9]\d{9}$/.test(d) ? '' : 'Enter a valid 10-digit Indian mobile number (starting 6–9).';
    },
    email: v => !v.trim() ? 'Please enter your email address.' : (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
    location: v => v.trim().length < 2 ? 'Please tell us where the project is located.' : '',
    projectType: v => v ? '' : 'Please select a project type.',
    propertyType: v => v ? '' : 'Please select a property type.',
    budget: v => v ? '' : 'Please select an estimated budget.',
    timeline: v => v ? '' : 'Please select a project timeline.',
    description: v => v.trim().length < 15 ? 'Please add a short description (at least 15 characters).' : ''
  };

  function validateField(field) {
    const checks = $$('input[type="checkbox"]', field);
    let msg = '';
    if (checks.length) {
      msg = checks.some(c => c.checked) ? '' : 'Please select at least one service.';
    } else {
      const input = $('input, select, textarea', field);
      if (!input || !RULES[input.name]) return true;
      msg = RULES[input.name](input.value);
      input.setAttribute('aria-invalid', String(!!msg));
    }
    const err = $('.field__error', field);
    if (err) err.textContent = msg;
    field.classList.toggle('has-error', !!msg);
    return !msg;
  }

  function initForm() {
    const fields = $$('.field', form).filter(f => $('.field__error', f));
    fields.forEach(f => {
      const err = $('.field__error', f);
      $$('input, select, textarea', f).forEach(inp => {
        if (inp.type !== 'checkbox') inp.setAttribute('aria-describedby', err.id);
        const evt = inp.tagName === 'SELECT' || inp.type === 'checkbox' ? 'change' : 'blur';
        inp.addEventListener(evt, () => validateField(f));
        inp.addEventListener('input', () => { if (f.classList.contains('has-error')) validateField(f); });
      });
    });

    // phone: digits only, formatted as 98765 43210
    form.phone.addEventListener('input', () => {
      const d = form.phone.value.replace(/\D/g, '').slice(0, 10);
      form.phone.value = d.length > 5 ? `${d.slice(0, 5)} ${d.slice(5)}` : d;
    });

    const btn = $('#submitBtn');
    const success = $('#formSuccess');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const results = fields.map(validateField);
      if (results.includes(false)) {
        const first = $('.field.has-error', form);
        const target = $('input, select, textarea', first);
        first.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        setTimeout(() => target && target.focus({ preventScroll: true }), 400);
        toast('Please check the highlighted fields.');
        return;
      }

      const data = new FormData(form);
      const services = data.getAll('services');
      btn.classList.add('is-loading');
      $('.btn__label', btn).textContent = 'Submitting…';

      // Simulated submission — no data leaves the browser in this demo
      setTimeout(() => {
        btn.classList.remove('is-loading');
        $('.btn__label', btn).textContent = 'Submit Enquiry';
        const summary = [
          `Hello, I'd like to discuss a project with ${STUDIO.name}.`,
          `Name: ${data.get('name')}`,
          `Project: ${data.get('projectType')} (${data.get('propertyType')})`,
          `Location: ${data.get('location')}`,
          data.get('area') ? `Area: ${data.get('area')}` : '',
          `Budget: ${data.get('budget')}`,
          `Timeline: ${data.get('timeline')}`,
          `Services: ${services.join(', ')}`,
          `Brief: ${data.get('description').trim()}`
        ].filter(Boolean).join('\n');
        $('#successWhatsapp').href = waLink(summary);
        $('#successWhatsapp').target = '_blank';
        $('#successWhatsapp').rel = 'noopener';
        form.hidden = true;
        success.hidden = false;
        success.focus({ preventScroll: true });
        success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        toast('Enquiry recorded in this demo.');
      }, 1400);
    });

    $('#resetForm').addEventListener('click', () => {
      form.reset();
      fields.forEach(f => { f.classList.remove('has-error'); const er = $('.field__error', f); if (er) er.textContent = ''; });
      success.hidden = true; form.hidden = false;
      form.name.focus();
    });
  }

  /* ------------------------------------------------------------------------
     16. MAP (loads Google Maps embed only when requested)
     ------------------------------------------------------------------------ */
  function initMap() {
    const btn = $('#loadMap');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(STUDIO.mapQuery)}&z=13&output=embed`;
      frame.title = `Map showing ${STUDIO.city}`;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      $('#mapFrame').replaceChildren(frame);
    }, { once: true });
  }

  /* ------------------------------------------------------------------------
     17. SUBTLE PARALLAX on final CTA
     ------------------------------------------------------------------------ */
  function initParallax() {
    const el = $('.final-cta__img');
    if (!el || reduceMotion) return;
    const section = el.parentElement;
    let ticking = false;
    const update = () => {
      const r = section.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translate3d(0, ${(p * -8).toFixed(2)}%, 0)`;
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    bindConfig();
    initNav();
    initPortfolio();
    initReveal();
    initModal();
    initLightbox();
    initServices();
    initMaterials();
    initBeforeAfter();
    initTestimonials();
    initFAQ();
    initForm();
    initMap();
    initParallax();
  });
})();
