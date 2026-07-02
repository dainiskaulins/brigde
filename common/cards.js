/*    common/cards.js
=========================================================
Kāršu attēlošana.

Uzdevums:
- pārvērš kāršu masīvu skaistā tekstā pa mastīm.

2026-07-01
=========================================================
*/

function formatHand(hand) {
  const suits = [
    { code: "S", symbol: "♠" },
    { code: "H", symbol: "♥" },
    { code: "D", symbol: "♦" },
    { code: "C", symbol: "♣" }
  ];

  let lines = [];

  for (const suit of suits) {
    const cards = hand
      .filter(card => card[0] === suit.code)
      .map(card => card.slice(1))
      .join(" ");

    lines.push(suit.symbol + " " + cards);
  }
  return lines.join("<br>");
}

console.log("common/cards.js ielādēts");
