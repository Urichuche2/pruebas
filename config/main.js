// Configuración
const CONFIG = {
  assetsServer: "https://parcoil-assets.onrender.com"
};

// Carga juegos destacados
async function loadFeaturedGames() {
  const response = await fetch('config/games.json');
  const games = await response.json();
  const container = document.getElementById('gamesContainer');

  games.forEach(game => {
    const gameEl = document.createElement('div');
    gameEl.className = 'game';
    gameEl.innerHTML = `
      <img src="${CONFIG.assetsServer}/${game.url}/${game.image}" alt="${game.name}">
      <div class="game-info">
        <h3>${game.name}</h3>
      </div>
    `;
    gameEl.addEventListener('click', () => {
      window.location.href = `play.html?gameurl=${game.url}&title=${encodeURIComponent(game.name)}`;
    });
    container.appendChild(gameEl);
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedGames();
});