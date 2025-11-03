// MATRIX BACKGROUND
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext && canvas.getContext('2d');
if (ctx) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%*()<>/';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);
  function draw() {
    ctx.fillStyle = 'rgba(5,8,22,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff66';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const ch = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 45);
  window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
}

// PROJECT MODAL
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const data = JSON.parse(card.getAttribute('data-project'));
    modalTitle.textContent = data.title;
    modalBody.innerHTML = `<p>${data.desc}</p><p><strong>Technologies:</strong> ${data.tech.join(', ')}</p>
      <p>Repo: <a href="https://github.com/Nikhil-attri" target="_blank">github.com/Nikhil-attri</a></p>`;
    modal.classList.add('show');
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });

// Keyboard accessibility for skills
document.querySelectorAll('.skill-card').forEach(s => {
  s.setAttribute('tabindex', '0');
  s.addEventListener('focus', () => s.classList.add('focus'));
  s.addEventListener('blur', () => s.classList.remove('focus'));
});

console.log('%cPortfolio loaded — Cybersecurity focus', 'color:#00d4ff');
