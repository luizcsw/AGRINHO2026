document.addEventListener('DOMContentLoaded', () => {
  const btnIncrease = document.getElementById('btn-increase');
  const btnDecrease = document.getElementById('btn-decrease');
  const btnContrast = document.getElementById('btn-contrast');
  const htmlElement = document.documentElement;

  // --- CONTROLE DE FONTE ---
  let fontSizePercentage = parseInt(localStorage.getItem('fontSizePercentage')) || 100;
  
  // Aplica o tamanho recuperado ou o padrão (100%)
  htmlElement.style.fontSize = `${fontSizePercentage}%`;

  btnIncrease.addEventListener('click', () => {
    if (fontSizePercentage < 140) { // Limite máximo para evitar distorção visual
      fontSizePercentage += 10;
      updateFontSize();
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (fontSizePercentage > 80) { // Limite mínimo tolerável
      fontSizePercentage -= 10;
      updateFontSize();
    }
  });

  function updateFontSize() {
    htmlElement.style.fontSize = `${fontSizePercentage}%`;
    localStorage.setItem('fontSizePercentage', fontSizePercentage);
  }

  // --- CONTROLE DE ALTO CONTRASTE ---
  if (localStorage.getItem('highContrast') === 'true') {
    htmlElement.classList.add('high-contrast');
  }

  btnContrast.addEventListener('click', () => {
    htmlElement.classList.toggle('high-contrast');
    const isContrastActive = htmlElement.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isContrastActive);
  });
});