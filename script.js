/* ═══════════════════════════════════════════
   MAHILA MITRA — script.js
═══════════════════════════════════════════ */

// ── DATA ──────────────────────────────────

const NICKNAMES = [
  { name: "Mahila Mitra ❤️", emoji: "❤️", msg: "The title she earned forever. No one else qualifies." },
  { name: "Butkii", emoji: "😸", msg: "Small in nickname, absolutely massive in importance." },
  { name: "Butkuu", emoji: "😸", msg: "Version 2.0 of Butkii — equally iconic, equally unforgettable." },
  { name: "Manda Badak 🦢", emoji: "🦢", msg: "The most iconic duck in the history of all ducks." },
  { name: "Hushar Badak 🦢🐣", emoji: "🐣", msg: "Smart, sharp, adorable — the complete package." },
  { name: "Pissi", emoji: "😹", msg: "A nickname with a thousand memories attached to every letter." },
  { name: "Maharani Jii 🙇", emoji: "👑", msg: "Because royalty is the only way to describe her energy." },
  { name: "Madam Jii 🫡", emoji: "🫡", msg: "Sir, yes sir. Respect level: absolutely maximum." },
  { name: "Strong Sigma Butki 😏", emoji: "😏", msg: "Confidence level: Unlimited. Unbothered. Thriving." },
  { name: "Vaishuuu 😸👻", emoji: "👻", msg: "The original name, the biggest heart, the best person." },
  { name: "Devi jii 🪔", emoji: "🪔", msg: "A literal goddess in human form. We just worship." },
  { name: "Maate 🙏", emoji: "🙏", msg: "Supreme motherly energy. Always right, always respected." },
];

const QUALITIES = [
  { emoji: "❤️", name: "Caring", desc: "Always thinking about others first, quietly." },
  { emoji: "🧠", name: "Intelligent", desc: "Sharp, perceptive, and always a step ahead." },
  { emoji: "🤝", name: "Honest", desc: "Says what she means. Means what she says." },
  { emoji: "🌸", name: "Supportive", desc: "Shows up when it matters most." },
  { emoji: "😂", name: "Funny", desc: "The kind of funny that makes you laugh till it hurts." },
  { emoji: "💪", name: "Hardworking", desc: "Gives her all to everything she touches." },
  { emoji: "🎧", name: "Good Listener", desc: "You never feel unheard when she's around." },
  { emoji: "😏", name: "Strong Sigma Butki", desc: "Unbothered. Focused. Completely unstoppable." },
  { emoji: "⭐", name: "Reliable", desc: "Count on her? Every single time, no exceptions." },
  { emoji: "🕊️", name: "Peacemaker", desc: "First to fix things. Always. Without fail." },
];

const GALLERY = [
  { src: "assets/photo_1.jpg", cap: "The day everything started 💞", type: "solo" },
  { src: "assets/photo_2.jpg", cap: "Strong Sigma Butki 😏", type: "solo" },
  { src: "assets/photo_3.jpg", cap: "Maharani Jii 🙇", type: "solo" },
  { src: "assets/photo_4.jpg", cap: "Hushar Badak 🦢🐣", type: "solo" },
  { src: "assets/photo_5.jpg", cap: "Mahila Mitra Forever 💜", type: "solo" },
  { src: "assets/photo_6.jpg", cap: "Pissi vibes 😹", type: "solo" },
  { src: "assets/photo_7.jpg", cap: "Manda Badak 🦢", type: "solo" },
  { src: "assets/photo_8.jpg", cap: "Vaishuuu 😸", type: "solo" },
  { src: "assets/photo_9.jpg", cap: "Butkii mode activated 😸", type: "solo" },
  { src: "assets/photo_10.jpg", cap: "Maharani energy only 👑", type: "solo" },
  { src: "assets/photo_11.jpg", cap: "Project Interview Champions 🚀", type: "friendship" },
  { src: "assets/photo_12.jpg", cap: "A selfie worth remembering 📸", type: "friendship" },
  { src: "assets/photo_13.jpg", cap: "Unstoppable Duo 🌟", type: "friendship" },
  { src: "assets/photo_14.jpg", cap: "Best moments ✨", type: "friendship" },
  { src: "assets/photo_15.jpg", cap: "Always laughing 😂", type: "friendship" },
  { src: "assets/photo_16.jpg", cap: "Forever Friends 💞", type: "friendship" }
];

const METERS = [
  { label: "Trust Level", val: 75, emoji: "🤝" },
  { label: "Support Level", val: 100, emoji: "💪" },
  { label: "Fun Level", val: 100, emoji: "😂" },
  { label: "Madness Level", val: 100, emoji: "🤪" },
  { label: "Project Partner Level", val: 100, emoji: "🚀" },
];

const AWESOME = [
  { emoji: "☀️", text: "Makes even ordinary days feel genuinely special." },
  { emoji: "🧩", text: "Gets things without needing long explanations." },
  { emoji: "📞", text: "4-hour calls feel like 4 minutes with her." },
  { emoji: "🎯", text: "Focused when it counts the most." },
  { emoji: "🔥", text: "Her energy is contagious and completely uplifting." },
  { emoji: "🌈", text: "Always finds a way to make things more positive." },
  { emoji: "🦢", text: "Grace and chaos in perfect balance." },
  { emoji: "🏆", text: "Celebrates others' wins like they're her own." },
  { emoji: "🛡️", text: "Stands up for what matters without hesitation." },
  { emoji: "🎭", text: "Makes anyone feel comfortable instantly." },
  { emoji: "🌙", text: "Her presence is calming in the best possible way." },
  { emoji: "💡", text: "Always brings new perspectives to the table." },
  { emoji: "🎪", text: "Every conversation somehow becomes an adventure." },
  { emoji: "🌺", text: "Kind even when she doesn't have to be." },
  { emoji: "💬", text: "Her words actually mean something when she speaks." },
  { emoji: "🎯", text: "Remembers the small things that matter to you." },
  { emoji: "🦋", text: "Makes people around her grow without trying." },
  { emoji: "⚡", text: "Gets things done — no drama, just results." },
  { emoji: "🎀", text: "Cares deeply even when she doesn't show it loudly." },
  { emoji: "💜", text: "The kind of friend you'd find in another life too." },
];

const QUOTES = [
  "A good friend is like a four-leaf clover — hard to find and lucky to have.",
  "Friendship is not about who you've known the longest, but who walked in and said 'I'm here for you.'",
  "True friends are the ones who lift you up when no one else noticed you fell.",
  "A real friend walks in when the rest of the world walks out.",
  "Friends are the family we choose for ourselves.",
  "Side by side or miles apart, real friends are always close to the heart.",
  "A friendship that can end never really began.",
  "The best mirror is an old friend.",
  "Good friends are like stars — you don't always see them, but you know they're there.",
  "Friendship is the only cement that will hold the world together.",
  "A friend understands your past, believes in your future, and accepts you today.",
  "Some people arrive and make such a beautiful impact on your life.",
];

const COMPLIMENTS = [
  "Vaishnavi has the rare gift of making everyone around her feel genuinely valued.",
  "Her intelligence is matched only by her kindness — a truly powerful combination.",
  "She makes the room brighter just by walking in. That's not nothing. That's everything.",
  "She handles difficult situations with more grace than most people even recognise.",
  "Her honesty is a gift, even when the truth is hard to hear.",
  "Vaishnavi has a unique ability to understand people without judging them.",
  "She's the kind of friend you'd write a whole website about — and mean every single word.",
  "Her laugh is genuinely one of the best sounds in any room.",
  "Vaishnavi is effortlessly herself. That kind of authenticity is rare and beautiful.",
  "She cares so deeply you can feel it even in the smallest of gestures.",
  "Strong Sigma Butki energy — completely unbothered and absolutely thriving.",
  "Vaishnavi doesn't just show up. She shows up fully, every time.",
];

// ── INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNicknames();
  renderQualities();
  renderGallery('all');
  renderMeters();
  renderAwesome();
  // After all DOM mutation, init observer
  initReveal();
  initCursor();
  initParallax();

  initLoading();
  initScrollProgress();
  initTheme();
  initNavbar();
  initHamburger();
  initParticles();
  spawnHearts('#floatingHearts', 18);
  initTyping();
  initLiveCounter();
  initNicknameModal();
  initGalleryTabs();
  initLightbox();
  initMeterAnim();
  initSecret();
  initCertificate();
  initSurprise();
  initGenerators();
  initMusicPlayer();
  initFAB();
  initMemoryCounter();
  spawnHearts('#footerHearts', 10);
});

// ── LOADING ───────────────────────────────
function initLoading() {
  const el = document.getElementById('loadingScreen');
  setTimeout(() => {
    el.classList.add('hide');
    setTimeout(() => el.remove(), 800);
  }, 2600);
}

// ── SCROLL PROGRESS ───────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ── THEME ─────────────────────────────────
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const stored = localStorage.getItem('mm-theme') || 'dark';
  html.setAttribute('data-theme', stored);
  btn.textContent = stored === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('mm-theme', next);
    setTimeout(drawCertificate, 80);
  });
}

// ── NAVBAR ────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  document.querySelectorAll('.nav-a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('navOverlay').classList.remove('show');
      document.getElementById('hamburger').classList.remove('open');
    });
  });
  document.querySelector('.nav-brand').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initHamburger() {
  const burger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  const toggle = () => {
    links.classList.toggle('open');
    overlay.classList.toggle('show');
    burger.classList.toggle('open');
  };
  burger.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
}

// ── PARTICLE CANVAS ───────────────────────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return; // canvas removed in new hero design
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  class P {
    constructor(fresh) {
      if (fresh) { this.x = Math.random() * W; this.y = H + 20; }
      else { this.x = Math.random() * W; this.y = Math.random() * H; }
      this.r = Math.random() * 2.5 + 0.8;
      this.vy = -(Math.random() * 0.6 + 0.2);
      this.vx = (Math.random() - 0.5) * 0.35;
      this.op = Math.random() * 0.45 + 0.15;
      this.hue = 280 + Math.random() * 80;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.y < -10) Object.assign(this, new P(true));
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue},65%,70%,${this.op})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new P(false));

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();
}



// ── FLOATING HEARTS ───────────────────────
function spawnHearts(selector, count) {
  const wrap = document.querySelector(selector);
  if (!wrap) return;
  const pool = ['❤️', '💜', '💖', '💗', '🦢', '✨', '💕'];
  for (let i = 0; i < count; i++) {
    const d = document.createElement('span');
    d.className = 'fheart';
    const size = (Math.random() * 14 + 10).toFixed(1);
    d.style.cssText = `
      left:${(Math.random() * 96).toFixed(1)}%;
      --fs:${size}px;
      --dur:${(Math.random() * 9 + 7).toFixed(1)}s;
      --del:-${(Math.random() * 8).toFixed(1)}s;
    `;
    d.textContent = pool[Math.floor(Math.random() * pool.length)];
    wrap.appendChild(d);
  }
}

// ── TYPING ────────────────────────────────
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const words = NICKNAMES.map(n => n.name);
  let wi = 0, ci = 0, del = false;

  const tick = () => {
    const w = words[wi];
    if (!del) {
      el.textContent = w.slice(0, ++ci);
      if (ci === w.length) { del = true; return setTimeout(tick, 2200); }
    } else {
      el.textContent = w.slice(0, --ci);
      if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, del ? 55 : 95);
  };
  tick();
}

// ── LIVE COUNTER ──────────────────────────
function initLiveCounter() {
  const startDate = new Date('2024-09-01T00:00:00');
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMinutes');
  const secsEl = document.getElementById('countSeconds');

  if (!daysEl) return;

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minsEl.textContent = minutes.toString().padStart(2, '0');
    secsEl.textContent = seconds.toString().padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// ── SCROLL REVEAL ─────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
}

// ── RENDER NICKNAMES ─────────────────────
function renderNicknames() {
  const grid = document.getElementById('nicknameGrid');
  NICKNAMES.forEach((n, i) => {
    const card = document.createElement('div');
    card.className = 'nn-card reveal-scale';
    card.textContent = n.name;
    card.dataset.idx = i;
    card.style.cssText = `--dur:${(2.4 + i * 0.35).toFixed(1)}s; animation-delay:${(i * 0.18).toFixed(1)}s; transition-delay: ${(i * 0.06).toFixed(2)}s;`;
    grid.appendChild(card);
  });
}

function initNicknameModal() {
  const modal = document.getElementById('nicknameModal');
  const closeBtn = document.getElementById('modalClose');

  document.getElementById('nicknameGrid').addEventListener('click', e => {
    const card = e.target.closest('.nn-card');
    if (!card) return;
    const n = NICKNAMES[+card.dataset.idx];
    document.getElementById('modalEmoji').textContent = n.emoji;
    document.getElementById('modalName').textContent = n.name;
    document.getElementById('modalMsg').textContent = n.msg;
    modal.classList.add('open');
  });

  const close = () => modal.classList.remove('open');
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ── RENDER QUALITIES ─────────────────────
function renderQualities() {
  const grid = document.getElementById('qualitiesGrid');
  QUALITIES.forEach(q => {
    const c = document.createElement('div');
    c.className = 'q-card';
    c.innerHTML = `<span class="q-emoji">${q.emoji}</span><div class="q-name">${q.name}</div><div class="q-desc">${q.desc}</div>`;
    grid.appendChild(c);
  });
}

// ── GALLERY FAIRY WALL ───────────────────
let lbPhotos = [], lbIdx = 0;

function renderGallery(filter) {
  lbPhotos = filter === 'all' ? GALLERY : GALLERY.filter(p => p.type === filter);

  // Distribute photos evenly across 3 rows
  const rows = [[], [], []];
  lbPhotos.forEach((p, i) => rows[i % 3].push({ ...p, origIdx: i }));

  const rowIds = ['polaroidRow1', 'polaroidRow2', 'polaroidRow3'];
  const bulbIds = ['bulbRow1', 'bulbRow2', 'bulbRow3'];

  rows.forEach((photos, ri) => {
    const row = document.getElementById(rowIds[ri]);
    const bulbRow = document.getElementById(bulbIds[ri]);
    row.innerHTML = '';
    bulbRow.innerHTML = '';

    // Place bulbs across the row
    const bulbCount = 9;
    for (let b = 0; b < bulbCount; b++) {
      const bulb = document.createElement('div');
      bulb.className = 'bulb';
      bulb.style.left = `${(b / (bulbCount - 1)) * 96 + 2}%`;
      bulb.style.top = `${18 + Math.sin(b * 0.9) * 18}px`;
      bulb.style.animationDelay = `${(b * 0.22).toFixed(2)}s`;
      bulbRow.appendChild(bulb);
    }

    // Render 3D flip polaroids
    photos.forEach((p, pi) => {
      const angle = (Math.random() - 0.5) * 10;
      const hang = document.createElement('div');
      hang.className = 'polaroid-hang';
      hang.style.transform = `rotate(${angle}deg)`;

      hang.innerHTML = `
        <div class="polaroid-inner">
          <div class="polaroid-front">
            <div class="polaroid-clip"></div>
            <div class="polaroid-frame">
              <img src="${p.src}" alt="${p.cap}" loading="lazy">
              <div class="polaroid-label">${p.cap}</div>
            </div>
          </div>
          <div class="polaroid-back">
            <div class="polaroid-clip"></div>
            <div class="polaroid-note-bg">
              <span class="polaroid-note-text">${p.cap}</span>
              <span class="polaroid-note-date">Special Memory 💜</span>
            </div>
          </div>
        </div>`;

      hang.addEventListener('click', () => {
        // Toggle flip
        hang.classList.toggle('flipped');

        // If they want to see it full screen, they can double click (optional fallback)
        // openLightbox(p.origIdx)
      });

      row.appendChild(hang);
    });
  });
}

function initGalleryTabs() {
  document.querySelectorAll('.g-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.g-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGallery(tab.dataset.tab);
    });
  });
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const cap = document.getElementById('lbCaption');

  const open = (i) => {
    lbIdx = (i + lbPhotos.length) % lbPhotos.length;
    img.src = lbPhotos[lbIdx].src;
    cap.textContent = lbPhotos[lbIdx].cap;
    lb.classList.add('open');
  };
  const close = () => lb.classList.remove('open');

  window.openLightbox = open;

  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', () => open(lbIdx - 1));
  document.getElementById('lbNext').addEventListener('click', () => open(lbIdx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open(lbIdx - 1);
    if (e.key === 'ArrowRight') open(lbIdx + 1);
  });
}

// ── RENDER METERS ────────────────────────
function renderMeters() {
  const wrap = document.getElementById('meterWrap');
  METERS.forEach(m => {
    const div = document.createElement('div');
    div.className = 'm-item';
    div.innerHTML = `
      <div class="m-head">
        <span class="m-label">${m.emoji} ${m.label}</span>
        <span class="m-val">${m.val}%</span>
      </div>
      <div class="m-track"><div class="m-fill" data-target="${m.val}"></div></div>`;
    wrap.appendChild(div);
  });

  // Infinite bar
  const inf = document.createElement('div');
  inf.className = 'm-infinite';
  inf.innerHTML = `<div class="m-head" style="justify-content:center;margin-bottom:14px">
    <span class="m-label">♾️ Friendship Level</span></div>
    <div class="m-inf-text">Infinite ♾️</div>`;
  wrap.appendChild(inf);
}

function initMeterAnim() {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.m-fill').forEach(f => {
        f.style.width = f.dataset.target + '%';
      });
      obs.disconnect();
    }
  }, { threshold: 0.25 });
  const wrap = document.getElementById('meterWrap');
  if (wrap) obs.observe(wrap);
}

// ── RENDER AWESOME ────────────────────────
function renderAwesome() {
  const grid = document.getElementById('awesomeGrid');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.05 });

  AWESOME.forEach((a, i) => {
    const c = document.createElement('div');
    c.className = 'aw-card';
    c.style.transitionDelay = (i * 0.04) + 's';
    c.innerHTML = `<div class="aw-num">#${String(i + 1).padStart(2, '0')}</div>
      <span class="aw-icon">${a.emoji}</span>
      <div class="aw-text">${a.text}</div>`;
    grid.appendChild(c);
    obs.observe(c);
  });
}

// ── SECRET ───────────────────────────────
function initSecret() {
  const lockEl = document.getElementById('secretLock');
  const letterEl = document.getElementById('secretLetter');
  const input = document.getElementById('secretInput');
  const btn = document.getElementById('secretBtn');
  const errEl = document.getElementById('lockErr');

  const tryUnlock = () => {
    const v = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
    if (v === 'mahila mitra') {
      lockEl.style.display = 'none';
      letterEl.style.display = 'block';
      document.getElementById('lockIcon').textContent = '🔓';
      fireConfetti();
      spawnHearts('#floatingHearts', 24);
    } else {
      errEl.textContent = 'Wrong password. Try again! 😅';
      input.classList.add('shake');
      setTimeout(() => { input.classList.remove('shake'); errEl.textContent = ''; input.value = ''; }, 1600);
    }
  };

  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });
}

// ── CERTIFICATE ───────────────────────────
function drawCertificate() {
  const canvas = document.getElementById('certCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 800, H = 560;
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';

  const BG1 = dark ? '#180930' : '#fdf4ff';
  const BG2 = dark ? '#0b0614' : '#f5e8ff';
  const TXTC = dark ? '#ede0ff' : '#1e0a2e';
  const TXT2 = dark ? '#b89dd4' : '#6b3d8a';
  const ROSE = '#e8547a';
  const PUR = '#9b59b6';
  const LAV = '#b39ddb';
  const GOLD = '#f5d06e';

  // Background
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, BG1); bg.addColorStop(1, BG2);
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Outer gold border
  ctx.strokeStyle = GOLD; ctx.lineWidth = 4;
  roundRect(ctx, 16, 16, W - 32, H - 32, 18); ctx.stroke();

  // Inner rose border
  ctx.strokeStyle = ROSE; ctx.lineWidth = 1.2;
  roundRect(ctx, 30, 30, W - 60, H - 60, 12); ctx.stroke();

  // Corner ornaments
  [[52, 52], [W - 52, 52], [52, H - 52], [W - 52, H - 52]].forEach(([cx, cy]) => {
    ctx.font = '26px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = GOLD; ctx.fillText('✦', cx, cy);
  });

  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

  // Subtitle header
  ctx.font = '600 13px DM Sans, sans-serif';
  ctx.fillStyle = PUR; ctx.letterSpacing = '4px';
  ctx.fillText('M A H I L A  M I T R A', W / 2, 86);
  ctx.letterSpacing = '0px';

  // Main title
  ctx.font = 'bold 34px Cormorant Garamond, Georgia, serif';
  const tGrad = ctx.createLinearGradient(W / 2 - 220, 0, W / 2 + 220, 0);
  tGrad.addColorStop(0, ROSE); tGrad.addColorStop(1, PUR);
  ctx.fillStyle = tGrad;
  ctx.fillText('Certified Best Friend Forever', W / 2, 140);

  // Divider
  ctx.beginPath(); ctx.moveTo(72, 170); ctx.lineTo(W - 72, 170);
  ctx.strokeStyle = GOLD; ctx.lineWidth = 1; ctx.stroke();

  // "awarded to"
  ctx.font = 'italic 17px Cormorant Garamond, Georgia, serif';
  ctx.fillStyle = TXT2;
  ctx.fillText('This certificate is proudly awarded to', W / 2, 204);

  // Name
  ctx.font = 'bold 52px Cormorant Garamond, Georgia, serif';
  const nGrad = ctx.createLinearGradient(W / 2 - 230, 0, W / 2 + 230, 0);
  nGrad.addColorStop(0, ROSE); nGrad.addColorStop(0.45, GOLD); nGrad.addColorStop(1, PUR);
  ctx.fillStyle = nGrad;
  ctx.fillText('Vaishnavi N Patil', W / 2, 278);

  // Thin divider
  ctx.beginPath(); ctx.moveTo(140, 308); ctx.lineTo(W - 140, 308);
  ctx.strokeStyle = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)';
  ctx.lineWidth = 1; ctx.stroke();

  // Recognition text
  ctx.font = 'italic 14px Cormorant Garamond, Georgia, serif';
  ctx.fillStyle = TXT2;
  ctx.fillText('In recognition of being an extraordinary best friend,', W / 2, 342);
  ctx.fillText('a constant source of support, laughter, and irreplaceable memories.', W / 2, 366);

  // Seal
  ctx.font = '52px serif'; ctx.fillStyle = TXTC;
  ctx.fillText('💜', W / 2, 430);

  // Issued by
  ctx.font = 'bold 16px Cormorant Garamond, Georgia, serif';
  ctx.fillStyle = TXTC;
  ctx.fillText('Issued by: Purush Mitra (Tarun)', W / 2, 482);

  // Date
  ctx.font = '12px DM Sans, sans-serif';
  ctx.fillStyle = dark ? '#7a5a9a' : '#a07abe';
  ctx.fillText('October 2024 – Forever & Always', W / 2, 516);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function initCertificate() {
  document.fonts.ready.then(drawCertificate).catch(drawCertificate);

  document.getElementById('downloadCert').addEventListener('click', () => {
    const canvas = document.getElementById('certCanvas');
    const a = document.createElement('a');
    a.download = 'Mahila_Mitra_Certificate.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  });
}

// ── CONFETTI ─────────────────────────────
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const cols = ['#e8547a', '#9b59b6', '#b39ddb', '#f5d06e', '#f48fb1', '#ffffff', '#ff80ab'];

  const pieces = Array.from({ length: 220 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    vx: (Math.random() - 0.5) * 3.5,
    vy: Math.random() * 4.5 + 1.5,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    rot: Math.random() * 360,
    rs: (Math.random() - 0.5) * 6,
    col: cols[Math.floor(Math.random() * cols.length)],
    circ: Math.random() > 0.55,
  }));

  let frame = 0;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rs;
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.col;
      if (p.circ) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
      ctx.restore();
    });
    if (++frame < 240) requestAnimationFrame(animate);
    else { canvas.style.display = 'none'; ctx.clearRect(0, 0, canvas.width, canvas.height); }
  };
  animate();
}

// ── SURPRISE ─────────────────────────────
function triggerSurprise() {
  const msg = document.getElementById('surpriseMsg');
  msg.style.display = 'block';
  fireConfetti();
  spawnHearts('#floatingHearts', 30);
}

function initSurprise() {
  document.getElementById('surpriseBtn').addEventListener('click', triggerSurprise);
}

// ── GENERATORS ───────────────────────────
function initGenerators() {
  const qDisp = document.getElementById('quoteDisplay');
  const cDisp = document.getElementById('complimentDisplay');

  const fadeSwap = (el, newText) => {
    el.style.opacity = '0';
    setTimeout(() => { el.textContent = newText; el.style.opacity = '1'; }, 220);
  };

  document.getElementById('quoteBtn').addEventListener('click', () => {
    fadeSwap(qDisp, `"${QUOTES[Math.floor(Math.random() * QUOTES.length)]}"`);
  });
  document.getElementById('complimentBtn').addEventListener('click', () => {
    fadeSwap(cDisp, COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)]);
  });
}

// ── MUSIC PLAYER ─────────────────────────
function initMusicPlayer() {
  const audio = document.getElementById('bgAudio');
  const playBtn = document.getElementById('mpPlay');
  const disc = document.getElementById('mpDisc');
  const vol = document.getElementById('volSlider');
  const player = document.getElementById('musicPlayer');
  const colBtn = document.getElementById('mpCollapse');
  let playing = false;

  audio.volume = 0.6;

  const setPlay = (state) => {
    playing = state;
    if (playing) { audio.play().catch(() => { }); disc.classList.add('spinning'); playBtn.textContent = '⏸'; }
    else { audio.pause(); disc.classList.remove('spinning'); playBtn.textContent = '▶'; }
  };

  playBtn.addEventListener('click', () => setPlay(!playing));

  vol.addEventListener('input', () => { audio.volume = vol.value / 100; });

  colBtn.addEventListener('click', () => {
    const mini = player.classList.toggle('mini');
    colBtn.textContent = mini ? '+' : '–';
  });
}

// ── FAB ──────────────────────────────────
function initFAB() {
  const wrap = document.getElementById('fabWrap');
  document.getElementById('fabMain').addEventListener('click', () => wrap.classList.toggle('open'));
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function jumpToSecret() {
  document.getElementById('secret')?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('fabWrap').classList.remove('open');
}

// ── MEMORY COUNTER ────────────────────────
function initMemoryCounter() {
  const el = document.getElementById('memCounter');
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    let n = 0; const target = 247;
    const t = setInterval(() => {
      n = Math.min(n + Math.ceil((target - n) / 15 + 1), target);
      el.textContent = n;
      if (n >= target) clearInterval(t);
    }, 24);
  });
  if (el) obs.observe(el);
}

// ── CUSTOM CURSOR ─────────────────────────
function initCursor() {
  const cursor = document.getElementById('customCursor');
  const trail = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;

  if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = 'none';
    trail.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let trailX = mouseX;
  let trailY = mouseY;

  // hide until first movement
  cursor.style.opacity = '0';
  trail.style.opacity = '0';

  let lastHeartTime = 0;

  window.addEventListener('mousemove', e => {
    if (cursor.style.opacity === '0') {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    const now = Date.now();
    if (now - lastHeartTime > 25) {
      spawnCursorHeart(mouseX, mouseY);
      lastHeartTime = now;
    }
  });

  const animTrail = () => {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
    requestAnimationFrame(animTrail);
  };
  animTrail();

  // Re-run this after dynamic content renders or use event delegation
  setTimeout(() => {
    const hoverEls = document.querySelectorAll('a, button, input, .nn-card, .g-item, .glass-card, .sec-label, .secret-btn');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        trail.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        trail.classList.remove('hover');
      });
    });
  }, 500);
}

// ── PARALLAX ──────────────────────────────
function initParallax() {
  const paralaxEls = document.querySelectorAll('.parallax');
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    paralaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed || 0.1);
      el.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

function spawnCursorHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'cursor-heart-tail';
  heart.textContent = ['❤️', '💜', '💖', '✨'][Math.floor(Math.random() * 4)];

  const offsetX = (Math.random() - 0.5) * 12;
  const offsetY = (Math.random() - 0.5) * 12;
  heart.style.left = (x + offsetX) + 'px';
  heart.style.top = (y + offsetY) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1400);
}

// ── BIRTHDAY CINEMATIC ──
let bdInterval;
function startBirthdayMode() {
  const overlay = document.getElementById('birthdayCinematic');
  overlay.classList.add('open');
  fireConfetti();

  const slides = document.querySelectorAll('.bd-slide');
  let current = 0;
  if (bdInterval) clearInterval(bdInterval);
  bdInterval = setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    if (Math.random() > 0.4) fireConfetti();
  }, 4000);
}

document.getElementById('closeBirthday')?.addEventListener('click', () => {
  document.getElementById('birthdayCinematic').classList.remove('open');
  if (bdInterval) clearInterval(bdInterval);
});

window.startBirthdayMode = startBirthdayMode;

// ── AUDIO GALLERY ──────────────────────────────────────────────────────────

const AUDIO_FILES = [
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.06 PM.mpeg", label: "Voice Note 1 🎙️" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.07 PM.mp4", label: "Voice Note 2 🎵" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.07 PM.mpeg", label: "Voice Note 3 💜" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.08 PM.mp4", label: "Voice Note 4 🎙️" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.08 PM.mpeg", label: "Voice Note 5 🎵" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.09 PM.mp4", label: "Voice Note 6 💜" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.09 PM.mpeg", label: "Voice Note 7 🎙️" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.10 PM.mpeg", label: "Voice Note 8 🎵" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.11 PM.mp4", label: "Voice Note 9 💜" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.11 PM.mpeg", label: "Voice Note 10 🎙️" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.12 PM.mp4", label: "Voice Note 11 🎵" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.12 PM.mpeg", label: "Voice Note 12 💜" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.13 PM.mp4", label: "Voice Note 13 🎙️" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.13 PM.mpeg", label: "Voice Note 14 🎵" },
  { src: "assets/WhatsApp Audio 2026-06-10 at 9.35.14 PM.mp4", label: "Voice Note 15 💜" },
];

function formatTime(secs) {
  if (!isFinite(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function buildAudioGallery() {
  const grid = document.getElementById('audioGrid');
  if (!grid) return;

  const allCards = [];

  AUDIO_FILES.forEach((track, idx) => {
    // Build card
    const card = document.createElement('div');
    card.className = 'audio-card';
    card.innerHTML = `
      <div class="audio-card-header">
        <div class="audio-icon">🎵</div>
        <div class="audio-meta">
          <div class="audio-title">${track.label}</div>
          <div class="audio-num">Track ${idx + 1} of ${AUDIO_FILES.length}</div>
        </div>
        <div class="audio-wave">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <div class="audio-controls">
        <button class="audio-play-btn" aria-label="Play / Pause">▶</button>
        <div class="audio-progress-wrap">
          <input type="range" class="audio-progress" min="0" max="100" value="0">
          <div class="audio-time">
            <span class="current-time">0:00</span>
            <span class="duration">0:00</span>
          </div>
        </div>
      </div>
    `;

    const audio = new Audio(track.src);
    const playBtn = card.querySelector('.audio-play-btn');
    const progress = card.querySelector('.audio-progress');
    const curTime = card.querySelector('.current-time');
    const durTime = card.querySelector('.duration');

    // Play / Pause
    playBtn.addEventListener('click', () => {
      const isPlaying = !audio.paused;
      // Pause all others
      allCards.forEach(({ audio: a, card: c, btn: b }) => {
        if (a !== audio) {
          a.pause();
          b.textContent = '▶';
          c.classList.remove('playing');
        }
      });
      if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶';
        card.classList.remove('playing');
      } else {
        audio.play();
        playBtn.textContent = '⏸';
        card.classList.add('playing');
      }
    });

    // Update progress bar and time
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        curTime.textContent = formatTime(audio.currentTime);
      }
    });

    audio.addEventListener('loadedmetadata', () => {
      durTime.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
      playBtn.textContent = '▶';
      card.classList.remove('playing');
      progress.value = 0;
      curTime.textContent = '0:00';
    });

    // Seek
    progress.addEventListener('input', () => {
      if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
      }
    });

    // Update progress track fill colour
    progress.addEventListener('input', updateFill);
    audio.addEventListener('timeupdate', updateFill);
    function updateFill() {
      const pct = progress.value;
      progress.style.background = `linear-gradient(to right, #a764ff ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
    }

    grid.appendChild(card);
    allCards.push({ audio, card, btn: playBtn });
  });
}

buildAudioGallery();

// ── AUTOMATIC BIRTHDAY TAKEOVER ──────────────────────────────────────────
function checkBirthdayTakeover() {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed, so 5 is June
  const day = today.getDate();

  // Check if today is June 16
  if (month === 5 && day === 16) {
    // Small delay to ensure everything loaded
    setTimeout(() => {
      // 1. Fire Confetti
      fireConfetti();
      // 2. Change the main hero subtitle
      const quote = document.querySelector('.hero-overlay-quote');
      if (quote) {
        quote.textContent = "Happy Birthday Vaishnavi! The most special day of the year. 🎂🎉";
        quote.style.color = "#f5d06e";
        quote.style.fontWeight = "bold";
      }
      // 3. Trigger the cinematic slideshow automatically
      startBirthdayMode();
    }, 1500);
  }
}

checkBirthdayTakeover();

// ── CINEMATIC LOCK SCREEN ───────────────────────────────────────
function initGlobalLock() {
  const lockScreen = document.getElementById('globalLockScreen');
  const pwdInput = document.getElementById('glPassword');
  const unlockBtn = document.getElementById('glBtn');
  const errorMsg = document.getElementById('glError');
  const fpWrap = document.getElementById('glIcon');
  const titleEl = document.getElementById('glTitle');
  const subtitleEl = document.getElementById('glSubtitle');

  if (!lockScreen) return;

  document.body.style.overflow = 'hidden';

  // ── 1. MATRIX RAIN ──────────────────────────────────────────
  const canvas = document.getElementById('glMatrix');
  const ctx = canvas.getContext('2d');

  function resizeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeMatrix();
  window.addEventListener('resize', resizeMatrix);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ';
  const fontSize = 14;
  let cols = Math.floor(canvas.width / fontSize);
  let drops = Array(cols).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(3, 3, 3, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const brightness = Math.random() > 0.95 ? '#fff' : '#8b0000';
      ctx.fillStyle = brightness;
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  const matrixInterval = setInterval(drawMatrix, 50);

  // ── 2. TERMINAL TYPING ──────────────────────────────────────
  function typeText(el, text, speed, onDone) {
    el.textContent = '';
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'gl-cursor';
    el.appendChild(cursor);
    const iv = setInterval(() => {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
      } else {
        clearInterval(iv);
        cursor.remove();
        if (onDone) onDone();
      }
    }, speed);
  }

  // Type title first, then subtitle
  typeText(titleEl, 'PRIVATE ARCHIVE ✨', 60, () => {
    setTimeout(() => typeText(subtitleEl, 'only besties allowed 💜', 30), 300);
  });

  // ── 3. RANDOM GLITCH on title ────────────────────────────────
  function scheduleGlitch() {
    const delay = 3000 + Math.random() * 4000;
    setTimeout(() => {
      titleEl.classList.remove('glitch');
      void titleEl.offsetWidth;
      titleEl.classList.add('glitch');
      scheduleGlitch();
    }, delay);
  }
  setTimeout(scheduleGlitch, 3000);

  // ── 4. WEB AUDIO SOUND EFFECTS ───────────────────────────────
  function playErrorSound() {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ac.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.3);
      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.3);
    } catch (e) { }
  }

  function playSuccessSound() {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.connect(gain);
        gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = ac.currentTime + i * 0.12;
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.2, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
        osc.start(t);
        osc.stop(t + 0.2);
      });
    } catch (e) { }
  }

  // ── 5. PASSWORD CHECK ────────────────────────────────────────
  function attemptUnlock() {
    const val = pwdInput.value.trim().toLowerCase();
    if (val === 'password') {
      playSuccessSound();
      fpWrap.classList.add('granted');
      // Turn fingerprint lines green
      document.querySelectorAll('.fp-path, .fp-scan').forEach(p => p.style.stroke = '#f5d06e');
      errorMsg.style.color = '#f5d06e';
      errorMsg.textContent = '✨ welcome in, bestie ✨';
      pwdInput.style.borderColor = '#f5d06e';
      pwdInput.style.boxShadow = '0 0 20px rgba(245, 208, 110, 0.4)';
      setTimeout(() => {
        clearInterval(matrixInterval);
        lockScreen.classList.add('unlocked');
        document.body.style.overflow = '';
      }, 900);
    } else {
      playErrorSound();
      errorMsg.textContent = '🎀 oops! try again pookie 🎀';
      pwdInput.classList.remove('shake');
      void pwdInput.offsetWidth;
      pwdInput.classList.add('shake');
      pwdInput.value = '';
    }
  }

  unlockBtn.addEventListener('click', attemptUnlock);
  pwdInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptUnlock();
  });
  // Focus password input automatically
  setTimeout(() => pwdInput.focus(), 2000);
}

initGlobalLock();

// ── SCRATCH-TO-REVEAL CARD ───────────────────────────────────────
function initScratchCard() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  
  // Set canvas size to match wrapper
  const wrap = document.getElementById('scratchWrap');
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight;

  // Draw silver coating
  ctx.fillStyle = '#b0bec5'; // Silver gray
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add some texture/text
  ctx.fillStyle = '#78909c';
  ctx.font = '24px DM Sans, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Scratch Me! 🪙', canvas.width / 2, canvas.height / 2);

  // Set composite operation so new drawing ERASES the silver coating
  ctx.globalCompositeOperation = 'destination-out';
  
  let isDrawing = false;
  let isRevealed = false;

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    return { x, y };
  }

  function startDrawing(e) {
    if (isRevealed) return;
    isDrawing = true;
    scratch(e);
  }

  function stopDrawing() {
    isDrawing = false;
    checkReveal();
  }

  function scratch(e) {
    if (!isDrawing || isRevealed) return;
    e.preventDefault(); // Prevent scrolling on mobile
    const { x, y } = getMousePos(e);
    
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  function checkReveal() {
    if (isRevealed) return;
    
    // Check how many pixels are transparent
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    
    // Check every 4th value (alpha channel)
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) {
        transparentPixels++;
      }
    }
    
    const totalPixels = pixels.length / 4;
    const percentScratched = (transparentPixels / totalPixels) * 100;
    
    // If more than 60% scratched, reveal the whole thing
    if (percentScratched > 60) {
      isRevealed = true;
      canvas.style.transition = 'opacity 0.8s ease';
      canvas.style.opacity = '0';
      setTimeout(() => {
        canvas.style.pointerEvents = 'none';
      }, 800);
    }
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', scratch);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchmove', scratch);
  canvas.addEventListener('touchend', stopDrawing);
}

// Re-init canvas size on resize
window.addEventListener('resize', () => {
  const canvas = document.getElementById('scratchCanvas');
  if (canvas && canvas.style.opacity !== '0') {
    // If not fully revealed, we'd have to re-draw. 
    // For simplicity, we just keep the canvas scaled by CSS,
    // but the brush might stretch slightly.
  }
});

// Initialize the scratch card after a short delay to ensure layout is done
setTimeout(initScratchCard, 500);
