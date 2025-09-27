// View: landingView.js
function renderLandingPage(event) {
  return `
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
      <div class="navbar-logo">
        <img src="background.jpg" alt="Logo" style="height:36px;width:36px;border-radius:50%;object-fit:cover;vertical-align:middle;" />
      </div>
    </nav>
    <div class="landing-container">
      <img src="${event.image}" alt="Background" class="background-img" />
      <div class="content">
        <h1>${event.title}</h1>
        <h2>${event.date}</h2>
        <p>${event.description}</p>
        <p class="location">Lokasi: ${event.location}</p>
        <a href="#daftar" class="cta-btn">Daftar Sekarang</a>
      </div>
    </div>
  `;
}

export default renderLandingPage;
