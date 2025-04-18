async function loadCustomGames() {
  try {
    const response = await fetch('config/custom.json');
    const data = await response.json();
    const container = document.getElementById('añadidos');

    data.games.forEach(game => {
      const gameEl = document.createElement('div');
      gameEl.className = 'game';
      gameEl.innerHTML = `
        <img src="${game.image}" alt="${game.title}" loading="lazy">
        <div class="game-info">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
        </div>
      `;

      gameEl.addEventListener('click', () => {
        if (game.type === 'iframe') {
          window.location.href = `play.html?gameurl=${encodeURIComponent(game.file)}&title=${encodeURIComponent(game.title)}`;
        } else {
          window.location.href = game.file;
        }
      });

      container.appendChild(gameEl);
    });
  } catch (error) {
    console.error("Error loading custom games:", error);
  }
}

document.addEventListener('DOMContentLoaded', loadCustomGames);