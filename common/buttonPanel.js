/* common/buttonPanel.js
=========================================================
GALDS pogu panelis.

Uzdevums:
- uzzīmē tikai tās pogas, kas šajā etapā vajadzīgas;
- sākumā: "Ģenerēt" un "Tukša izdale";
- vēlāk šeit parādīsies solīšanas/izspēles pogas pēc vajadzības.

2026-07-01
=========================================================
*/


const BUTTONS_TITLE = [
  { id: "BTN_JAUNA_SPELE", teksts: "Jauna spēle", funkcija: "jaunaSpele", klase: "poga-zala" },
  { id: "BTN_TUKSA_IZDALE", teksts: "Tukša izdale", funkcija: "tuksaIzdale", klase: "poga-zala" }
];


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

  if (!panelis) {
    console.log("Nav atrasts buttonPanel");
    return;
  }

  panelis.innerHTML = "";

/* --- */
  const rinda = document.createElement("div");

for (const poga of BUTTONS_TITLE) {
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

