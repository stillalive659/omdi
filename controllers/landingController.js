// Controller: landingController.js

// Fungsi untuk load partial HTML
async function loadPartial(url) {
  const res = await fetch(url);
  return await res.text();
}

async function initLandingPage() {
  const app = document.getElementById('app');
  const navbar = await loadPartial('views/navbar.html');
  const home = await loadPartial('views/home.html');
  const sejarah = await loadPartial('views/sejarah.html');
  const categories = await loadPartial('views/categories.html');
  app.innerHTML = "<div class='landing-page'>" + navbar + home + categories + "</div>";
}

export default initLandingPage;
