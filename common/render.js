// common/render.js
//=========================================================
// Ekrāna pārzīmēšana.
//
// Uzdevums:
// - zīmē ekrāna paneļus;
// - katrs panelis tiek zīmēts ar savu funkciju.
//
//2026-07-01
//=========================================================

//function renderAll() {
//  renderTitlePanel();
//  renderButtonPanel();
//  renderTablePanel();
//  renderLogPanel();
//}
  
function renderTitlePanel() {
  const panelis = document.getElementById("titlePanel");

  if (!panelis) return;

  panelis.innerHTML =
    "<h2>GALDS 0.0.1</h2>";
}
  
function render() {
  document.getElementById("logPanel").textContent =
    "FACTS\n" +
    JSON.stringify(facts, null, 2);
} 

/* -----
function renderTablePanel() {
  const panelis = document.getElementById("tablePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <div class="bridge-table">
      <div></div>
      <div class="seat">N</div>
      <div></div>

      <div class="seat">W</div>
      <div class="trick">stiķis</div>
      <div class="seat">E</div>

      <div></div>
      <div class="seat">S</div>
      <div></div>
    </div>
  `;
}
-----   */
function renderNorthPanel() {
  return `<div class="seat">N<br>${formatHand(facts.hands.N)}</div>`;
}

function renderWestPanel() {
  return `<div class="seat">W<br>${formatHand(facts.hands.W)}</div>`;
}

function renderCenterPanel() {
  return `<div class="trick">viens stiķis</div>`;
}

function renderEastPanel() {
  return `<div class="seat">E<br>${formatHand(facts.hands.E)}</div>`;
}

function renderSouthPanel() {
  return `<div class="seat">S<br>${formatHand(facts.hands.S)}</div>`;
}

function renderTablePanel() {
  const panelis = document.getElementById("tablePanel");
  if (!panelis) return;

  panelis.innerHTML = `
    <div class="bridge-table">
      <div></div>
      ${renderNorthPanel()}
      <div></div>

      ${renderWestPanel()}
      ${renderCenterPanel()}
      ${renderEastPanel()}

      <div></div>
      ${renderSouthPanel()}
      <div></div>
    </div>
  `;
  }

console.log("common/render.js ielādēts");
