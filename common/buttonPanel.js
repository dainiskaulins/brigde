/* common/buttonPanel.js
=========================================================
Stabila pagaidu versija.
Rāda tikai divas pogas: Jauna spēle, Tukša izdale.
=========================================================
*/

const BUTTONS_TITLE = {
  nosaukums: "JAUNA SPĒLE",
   pogas: [

    {
      id: "BTN_JAUNA_SPELE",
      teksts: "Jauna spēle",
      funkcija: "jaunaSpele",
      klase: "poga-zala"
    },

    {
      id: "BTN_TUKSA_IZDALE",
      teksts: "Tukša izdale",
      funkcija: "tuksaIzdale",
      klase: "poga-zala"
    },

    {
      id: "BTN_LABOT_IZDALI",
      teksts: "Labot izdali",
      funkcija: "labotIzdali",
      klase: "poga-peleka"
    },

    {
      id: "BTN_CHECK_IZDALE",
      teksts: "Pārbaude",
      funkcija: "parbauditIzdali",
      klase: "poga-peleka"
    }

  ]
};

const BUTTONS_BIDDING = {
  nosaukums: "SOLĪŠANA",

  pogas: [

    { id:"BTN_1", teksts:"1", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_2", teksts:"2", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_3", teksts:"3", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_4", teksts:"4", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_5", teksts:"5", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_6", teksts:"6", funkcija:"", klase:"poga-zala", rinda:1 },
    { id:"BTN_7", teksts:"7", funkcija:"", klase:"poga-zala", rinda:1 },

    { id:"BTN_C", teksts:"♣", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_D", teksts:"♦", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_H", teksts:"♥", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_S", teksts:"♠", funkcija:"", klase:"poga-zala", rinda:2 },
    { id:"BTN_NT", teksts:"NT", funkcija:"", klase:"poga-zala", rinda:2 },

    { id:"BTN_PASS", teksts:"PASS", funkcija:"", klase:"poga-zala", rinda:3 },
    { id:"BTN_X", teksts:"X", funkcija:"", klase:"poga-zala", rinda:3 },
    { id:"BTN_XX", teksts:"XX", funkcija:"", klase:"poga-zala" , rinda:3 },

    { id:"BTN_SOLIT", teksts:"SOLĪT", funkcija:"", klase:"poga-zala", rinda:3 },

    { id:"BTN_EXIT", teksts:"JAUNA SPĒLE", funkcija:"jaunaSpele", klase:"poga-dzeltena", rinda:3 }

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

function renderButtonPanel(buttonSet) {
  const panelis = document.getElementById("buttonPanel");
  if (!panelis) return;

  panelis.innerHTML = "";

  const statuss = document.createElement("div");
  statuss.id = "buttonStatus";
  statuss.textContent = "Statuss: izvēlies darbību";
  panelis.appendChild(statuss);

  const rinda = document.createElement("div");
  rinda.className = "pogu-rinda";

  for (const poga of buttonSet.pogas) {
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
