// =======================================
// Arquivo: script.js
// Autor: Stella Karolina
// Data: 23/12/2024
// Descrição: Controle de sons via teclado e cliques em teclas virtuais.
// =======================================

// =======================================
// Mapeamento de sons
// =======================================
const soundMapping = {
  97: "../assets/sounds/foi-o-pi-diddy.mp3",
  98: "../assets/sounds/hee-hee.mp3",
  99: "../assets/sounds/box-of-goodgood.mp3",
  100: "../assets/sounds/michael-dont-leave-me-here.mp3",
  101: "../assets/sounds/oooooohhhh.mp3",
  102: "../assets/sounds/the-office-michael-scott-no-god-no.mp3",
  103: "../assets/sounds/sound-default.mp3",
  104: "../assets/sounds/sound-default.mp3",
  105: "../assets/sounds/sound-default.mp3",
};

// =======================================
// Utilitários
// =======================================

/**
 * Toca o som associado ao código da tecla.
 * @param {number} keyCode - O código da tecla pressionada.
 */
const playSound = (keyCode) => {
  const soundPath = soundMapping[keyCode];
  if (!soundPath)
    return console.warn(`Nenhum som configurado para a tecla: ${keyCode}`);

  const audio = new Audio(soundPath);
  audio
    .play()
    .then(() => console.log(`Tocando som: ${soundPath}`))
    .catch((error) => console.error(`Erro ao tocar o som: ${error.message}`));

  activateKeyFeedback(keyCode);
};

/**
 * Adiciona feedback visual à tecla.
 * @param {number} keyCode - O código da tecla pressionada.
 */
const activateKeyFeedback = (keyCode) => {
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!keyElement) return;

  keyElement.classList.add("active");
  setTimeout(() => keyElement.classList.remove("active"), 500);
};

// =======================================
// Event Listeners
// =======================================

/**
 * Adiciona eventos de clique às teclas virtuais.
 */
const initializeClickListeners = () => {
  document.querySelectorAll(".key").forEach((keyElement) => {
    keyElement.addEventListener("click", () => {
      const keyCode = parseInt(keyElement.getAttribute("data-key"));
      playSound(keyCode);
    });
  });
};

/**
 * Adiciona eventos para pressionamento de teclas do teclado físico.
 */
const initializeKeyboardListeners = () => {
  document.addEventListener("keydown", (event) => {
    if (soundMapping[event.keyCode]) {
      playSound(event.keyCode);
    }
  });
};

// =======================================
// Inicialização
// =======================================

/**
 * Inicializa o script.
 */
const initializeApp = () => {
  initializeClickListeners();
  initializeKeyboardListeners();
  console.log("Aplicação inicializada com sucesso!");
};

// Executa a inicialização assim que o script for carregado.
initializeApp();
