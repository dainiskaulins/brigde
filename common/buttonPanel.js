/* common/buttonPanel.js
=========================================================
Stabila pagaidu versija.
Rāda tikai divas pogas: Jauna spēle, Tukša izdale.
=========================================================
*/

const BUTTONS_TITLE = {
  nosaukums: "TITLE",
  pogas: [
    { id: "BTN_JAUNA_SPELE", teksts: "Jauna spēle", funkcija: "jaunaSpele", klase: "poga-zala" },
    { id: "BTN_TUKSA_IZDALE", teksts: "Tukša izdale", funkcija: "tuksaIzdale", klase: "poga-zala" }
  ]
};

function izsauktPogasFunkciju(poga) {
  const fn = window[poga.funkcija];

  if (typeof fn === "function") {
    fn();
  } else {
    console.log("Funkcija vēl nav realizēta: " + poga.funkcija + "()");
  }
}

function renderButtonPanel() {
  const panelis = document.getElementById("buttonPanel");
  if (!panelis) return;

  panelis.innerHTML = "";

  const statuss = document.createElement("div");
  statuss.id = "buttonStatus";
  statuss.textContent = "Statuss: izvēlies darbību";
  panelis.appendChild(statuss);

  const rinda = document.createElement("div");
  rinda.className = "pogu-rinda";

  for (const poga of BUTTONS_TITLE.pogas) {
    const btn = document.createElement("button");

    btn.id = poga.id;
    btn.className = "poga " + poga.klase;
    btn.textContent = poga.teksts;

    btn.addEventListener("click", function () {
      izsauktPogasFunkciju(poga);
    });

    rinda.appendChild(btn);
  }

  panelis.appendChild(rinda);
}

console.log("common/buttonPanel.js ielādēts");
