// Controller: landingController.js

// Fungsi untuk load partial HTML
async function loadPartial(url) {
  const res = await fetch(url);
  return await res.text();
}

async function initLandingPage() {
  const app = document.getElementById('app');
  const navbar = await loadPartial('views/navbar.html');
  const content = await loadPartial('views/content.html');
  app.innerHTML = navbar + content;
}

export default initLandingPage;
