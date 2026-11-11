
// ========================================
// HAIKYUU!! – FLY HIGH
// ========================================

// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// ========================================
// TEAMS
// ========================================

const teams = {
  karasuno: {
    name: "KARASUNO",
    emblem: "🐦‍⬛",
    color: "#d75d0d",
    region: "MIYAGI PREFECTURE",
    motto: "FLY!",
    description:
      "Die Karasuno High School ist das Herzstück von Haikyuu!!. Das Team war einst eine gefürchtete Volleyballmacht und möchte zu alter Stärke zurückfinden.",
    players: "Hinata, Kageyama, Daichi, Sugawara, Asahi, Nishinoya, Tanaka und Tsukishima",
    style: "Schnelles Kombinationsspiel, Tempo und überraschende Angriffe"
  },
  nekoma: {
    name: "NEKOMA",
    emblem: "🐈",
    color: "#9e3030",
    region: "TOKYO",
    motto: "CONNECT",
    description:
      "Nekoma ist Karasunos traditionsreicher Rivale. Die Spieler sind bekannt für ihre ausgezeichnete Verteidigung und ihr gutes Zusammenspiel.",
    players: "Kenma Kozume, Tetsuro Kuroo und Morisuke Yaku",
    style: "Starke Annahme, Geduld und intelligente Spielzüge"
  },
  aoba: {
    name: "AOBA JOHSAI",
    emblem: "🌿",
    color: "#427d78",
    region: "MIYAGI PREFECTURE",
    motto: "TEAMWORK",
    description:
      "Aoba Johsai ist ein technisch starkes Team mit einem hervorragenden Zuspieler. Besonders Oikawas Spielverständnis macht die Schule gefährlich.",
    players: "Toru Oikawa, Hajime Iwaizumi und Issei Matsukawa",
    style: "Präzises Zuspiel, starke Aufschläge und gutes Teamwork"
  },
  fukurodani: {
    name: "FUKURODANI",
    emblem: "🦉",
    color: "#ae9452",
    region: "TOKYO",
    motto: "POWER",
    description:
      "Fukurodani gehört zu den stärksten Teams Tokios. Das Team wird besonders durch den energiegeladenen Ass Bokuto geprägt.",
    players: "Kotaro Bokuto und Keiji Akaashi",
    style: "Kraftvolle Angriffe und flexible Teamunterstützung"
  },
  inarizaki: {
    name: "INARIZAKI",
    emblem: "🦊",
    color: "#ae713b",
    region: "HYOGO PREFECTURE",
    motto: "CHALLENGE",
    description:
      "Inarizaki gehört zu den grossen Favoriten bei nationalen Turnieren. Die Miya-Zwillinge sorgen für gefährliche Kombinationen.",
    players: "Atsumu Miya, Osamu Miya und Shinsuke Kita",
    style: "Aggressive Aufschläge, Kreativität und hohes Tempo"
  },
  shiratorizawa: {
    name: "SHIRATORIZAWA",
    emblem: "🦅",
    color: "#795b91",
    region: "MIYAGI PREFECTURE",
    motto: "STRENGTH",
    description:
      "Shiratorizawa ist eine der stärksten Schulen der Präfektur Miyagi. Das Team setzt besonders auf die unglaubliche Angriffskraft von Ushijima.",
    players: "Wakatoshi Ushijima, Satori Tendo und Kenjiro Shirabu",
    style: "Körperliche Stärke, harte Angriffe und Dominanz"
  }
};

function showTeam(key) {
  const team = teams[key];
  const showcase = document.getElementById("teamShowcase");

  showcase.style.setProperty("--team-color", team.color);

  showcase.innerHTML = `
    <div class="team-emblem">${team.emblem}</div>
    <div class="team-details">
      <span class="small-orange">${team.region}</span>
      <h3>${team.name}</h3>
      <p>${team.description}</p>
      <ul>
        <li><b>Bekannte Spieler:</b> ${team.players}</li>
        <li><b>Spielstil:</b> ${team.style}</li>
        <li><b>Schlüsselwort:</b> ${team.motto}</li>
      </ul>
    </div>
  `;

  document.querySelectorAll(".team-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.team === key);
  });
}

document.querySelectorAll(".team-tab").forEach(button => {
  button.addEventListener("click", () => showTeam(button.dataset.team));
});

showTeam("karasuno");

// ========================================
// CHARACTERS
// ========================================

const characters = [
  {
    name: "Shoyo Hinata",
    number: "10",
    team: "Karasuno",
    position: "Mittelblocker",
    emoji: "☀️",
    color: "#f9a348",
    description: "Klein, unglaublich schnell, sprungstark und voller Energie."
  },
  {
    name: "Tobio Kageyama",
    number: "9",
    team: "Karasuno",
    position: "Zuspieler",
    emoji: "👑",
    color: "#94a5bf",
    description: "Ein genialer Zuspieler mit enormer Präzision und Ehrgeiz."
  },
  {
    name: "Yu Nishinoya",
    number: "4",
    team: "Karasuno",
    position: "Libero",
    emoji: "⚡",
    color: "#f1c258",
    description: "Karasunos energiegeladener Abwehrspezialist."
  },
  {
    name: "Kei Tsukishima",
    number: "11",
    team: "Karasuno",
    position: "Mittelblocker",
    emoji: "👓",
    color: "#c3d094",
    description: "Ein analytischer Spieler mit ausgezeichnetem Block-Timing."
  },
  {
    name: "Daichi Sawamura",
    number: "1",
    team: "Karasuno",
    position: "Aussenangreifer",
    emoji: "🛡️",
    color: "#d7a47f",
    description: "Der zuverlässige Kapitän und eine wichtige Stütze in der Annahme."
  },
  {
    name: "Kosuke Sugawara",
    number: "2",
    team: "Karasuno",
    position: "Zuspieler",
    emoji: "🌱",
    color: "#b6d3d3",
    description: "Ein erfahrener Zuspieler, der das Team unterstützt und motiviert."
  },
  {
    name: "Kenma Kozume",
    number: "5",
    team: "Nekoma",
    position: "Zuspieler",
    emoji: "🎮",
    color: "#e8c785",
    description: "Ein ruhiger Stratege, der Gegner wie ein Rätsel analysiert."
  },
  {
    name: "Tetsuro Kuroo",
    number: "1",
    team: "Nekoma",
    position: "Mittelblocker",
    emoji: "🐈",
    color: "#c77b7b",
    description: "Der clevere Kapitän von Nekoma und ein starker Blockspieler."
  },
  {
    name: "Toru Oikawa",
    number: "1",
    team: "Aoba Johsai",
    position: "Zuspieler",
    emoji: "🏐",
    color: "#85b9b8",
    description: "Ein hervorragender Zuspieler mit einem gefürchteten Aufschlag."
  },
  {
    name: "Kotaro Bokuto",
    number: "4",
    team: "Fukurodani",
    position: "Aussenangreifer",
    emoji: "🦉",
    color: "#dec891",
    description: "Ein extrem kraftvoller und leidenschaftlicher Angreifer."
  },
  {
    name: "Atsumu Miya",
    number: "7",
    team: "Inarizaki",
    position: "Zuspieler",
    emoji: "🦊",
    color: "#e3a969",
    description: "Ein kreativer Zuspieler mit starken Aufschlägen."
  },
  {
    name: "Wakatoshi Ushijima",
    number: "1",
    team: "Shiratorizawa",
    position: "Diagonalangreifer",
    emoji: "💥",
    color: "#b19bc8",
    description: "Ein aussergewöhnlich kraftvoller, linkshändiger Angreifer."
  }
];

function renderCharacters(filter = "all") {
  const grid = document.getElementById("playerGrid");
  grid.innerHTML = "";

  const visible = characters.filter(player => {
    if (filter === "all") return true;
    if (filter === "Karasuno") return player.team === "Karasuno";
    return player.team !== "Karasuno";
  });

  visible.forEach(player => {
    const card = document.createElement("article");
    card.className = "player-card";

    card.innerHTML = `
      <div class="player-art"
           style="--card-color:${player.color}"
           data-number="${player.number}">
        <span>${player.emoji}</span>
      </div>
      <div class="player-body">
        <small>${player.team.toUpperCase()} · #${player.number}</small>
        <h3>${player.name}</h3>
        <p class="player-detail">${player.position}</p>
        <p>${player.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.remove("active");
    });

    button.classList.add("active");
    renderCharacters(button.dataset.filter);
  });
});

renderCharacters();

// ========================================
// ANIME SEASONS
// ========================================

const seasons = [
  {
    title: "HAIKYUU!!",
    year: "2014",
    icon: "🏐",
    label: "SEASON 01",
    text: "Hinata und Kageyama werden Teamkollegen. Karasuno beginnt seinen Weg zurück."
  },
  {
    title: "SECOND SEASON",
    year: "2015–2016",
    icon: "🔥",
    label: "SEASON 02",
    text: "Training, neue Techniken und spannende Spiele gegen starke Gegner."
  },
  {
    title: "KARASUNO VS SHIRATORIZAWA",
    year: "2016",
    icon: "🏆",
    label: "SEASON 03",
    text: "Karasuno stellt sich dem mächtigen Team rund um Ushijima."
  },
  {
    title: "TO THE TOP",
    year: "2020",
    icon: "🚀",
    label: "SEASON 04",
    text: "Karasuno wächst weiter und tritt gegen starke Teams auf nationaler Ebene an."
  },
  {
    title: "THE DUMPSTER BATTLE",
    year: "2024",
    icon: "🐈",
    label: "MOVIE",
    text: "Das legendäre Duell zwischen Karasuno und Nekoma."
  }
];

const seasonGrid = document.getElementById("seasonGrid");

seasons.forEach(season => {
  const card = document.createElement("article");
  card.className = "season-card";

  card.innerHTML = `
    <small>${season.label} / ${season.year}</small>
    <div class="season-icon">${season.icon}</div>
    <h3>${season.title}</h3>
    <p>${season.text}</p>
  `;

  seasonGrid.appendChild(card);
});

// ========================================
// VOLLEYBALL POSITIONS
// ========================================

const positions = {
  1: {
    title: "POSITION 1",
    emoji: "🎯",
    text: "Hinten rechts. Von dieser Rotationsposition wird aufgeschlagen. Spieler der Hinterreihe übernehmen oft Annahme und Verteidigung."
  },
  2: {
    title: "POSITION 2",
    emoji: "🏐",
    text: "Vorne rechts. Hier greift häufig der Diagonalangreifer an. Auch der Block gegen Angriffe von der gegnerischen linken Seite ist wichtig."
  },
  3: {
    title: "POSITION 3",
    emoji: "🧱",
    text: "Vorne Mitte. Hier stehen oft Mittelblocker. Sie müssen schnell auf Angriffe reagieren und sind für schnelle Angriffe am Netz wichtig."
  },
  4: {
    title: "POSITION 4",
    emoji: "💥",
    text: "Vorne links. Ein wichtiger Angriffsbereich, häufig für Aussenangreifer."
  },
  5: {
    title: "POSITION 5",
    emoji: "🛡️",
    text: "Hinten links. Diese Zone ist besonders für Feldabwehr und Annahme wichtig."
  },
  6: {
    title: "POSITION 6",
    emoji: "👀",
    text: "Hinten Mitte. Hier muss man viel vom Spielfeld überblicken und häufig harte Angriffsschläge verteidigen."
  }
};

document.querySelectorAll(".court-player").forEach(button => {
  button.addEventListener("click", () => {
    const pos = positions[button.dataset.pos];

    document.getElementById("positionInfo").innerHTML = `
      <span class="small-orange">COURT POSITION</span>
      <div class="position-emoji">${pos.emoji}</div>
      <h3>${pos.title}</h3>
      <p>${pos.text}</p>
    `;

    document.querySelectorAll(".court-player").forEach(b => {
      b.classList.remove("active");
    });

    button.classList.add("active");
  });
});

// ========================================
// PLAYER ROLES
// ========================================

const roles = [
  {
    icon: "🎯",
    name: "ZUSPIELER",
    text: "Organisiert den Angriff und entscheidet meist, wer den nächsten Ball erhält. Beispiel: Kageyama."
  },
  {
    icon: "💥",
    name: "AUSSENANGREIFER",
    text: "Greift oft über die linke Seite an und übernimmt wichtige Aufgaben in der Annahme."
  },
  {
    icon: "🧱",
    name: "MITTELBLOCKER",
    text: "Blockt gegnerische Angriffe und spielt schnelle Angriffe durch die Mitte. Beispiel: Hinata."
  },
  {
    icon: "🦅",
    name: "DIAGONALANGREIFER",
    text: "Ist oft ein starker Angreifer auf der rechten Seite. Beispiel: Ushijima."
  },
  {
    icon: "🛡️",
    name: "LIBERO",
    text: "Ist auf Annahme und Verteidigung spezialisiert. Trägt ein andersfarbiges Trikot. Beispiel: Nishinoya."
  },
  {
    icon: "🤝",
    name: "KAPITÄN",
    text: "Ist keine eigene Spielposition, übernimmt aber eine wichtige Führungsrolle im Team. Beispiel: Daichi."
  }
];

const roleGrid = document.getElementById("roleGrid");

roles.forEach(role => {
  const card = document.createElement("article");
  card.className = "role-card";

  card.innerHTML = `
    <div class="role-icon">${role.icon}</div>
    <h4>${role.name}</h4>
    <p>${role.text}</p>
  `;

  roleGrid.appendChild(card);
});

// ========================================
// SKILLS AND TECHNIQUES
// ========================================

const skills = [
  {
    icon: "🙌",
    name: "ANNAHME",
    label: "CONTROL",
    text: "Der Ball wird kontrolliert, häufig mit den Unterarmen, zum Zuspieler gespielt."
  },
  {
    icon: "☝️",
    name: "ZUSPIEL",
    label: "PRECISION",
    text: "Ein präziser Pass bereitet den nächsten Angriff vor. Timing und Kommunikation sind entscheidend."
  },
  {
    icon: "💥",
    name: "ANGRIFF",
    label: "POWER",
    text: "Ein Angriffsschlag wird mit Anlauf, Sprung und Armschwung ausgeführt."
  },
  {
    icon: "🧱",
    name: "BLOCK",
    label: "DEFENCE",
    text: "Spieler springen am Netz, um gegnerische Angriffe abzuwehren oder abzulenken."
  },
  {
    icon: "🎯",
    name: "AUFSCHLAG",
    label: "FOCUS",
    text: "Der Ball wird von hinter der Grundlinie ins Spiel gebracht. Es gibt verschiedene Aufschlagtechniken."
  },
  {
    icon: "🦶",
    name: "BEWEGUNG",
    label: "SPEED",
    text: "Schnelle Schritte, gute Positionierung und Reaktionsvermögen sind für alle Positionen wichtig."
  }
];

const skillGrid = document.getElementById("skillGrid");

skills.forEach((skill, i) => {
  const card = document.createElement("article");
  card.className = "skill-card";

  card.innerHTML = `
    <small>0${i + 1} / ${skill.label}</small>
    <div class="skill-icon">${skill.icon}</div>
    <h3>${skill.name}</h3>
    <p>${skill.text}</p>
  `;

  skillGrid.appendChild(card);
});

// ========================================
// VOLLEYBALL RULES
// ========================================

const rules = [
  {
    title: "DREI BERÜHRUNGEN",
    text: "Eine Mannschaft darf den Ball normalerweise bis zu dreimal berühren, bevor er über das Netz gespielt wird. Ein Blockkontakt zählt nicht dazu."
  },
  {
    title: "PUNKTE",
    text: "Jeder Ballwechsel bringt einen Punkt. Ein regulärer Satz geht bis 25 Punkte, der fünfte Satz bis 15. Es braucht zwei Punkte Vorsprung."
  },
  {
    title: "ROTATION",
    text: "Gewinnt das annehmende Team das Aufschlagrecht, rotieren die Spieler im Uhrzeigersinn weiter."
  },
  {
    title: "AUFSCHLAG",
    text: "Der Aufschlag wird von hinter der Grundlinie ausgeführt. Der Ball muss über das Netz ins gegnerische Feld gelangen."
  },
  {
    title: "NETZ UND LINIEN",
    text: "Ein Ball auf der Linie gilt als im Feld. Netzberührungen und das Übertreten der Mittellinie sind je nach Situation regelwidrig."
  },
  {
    title: "DER LIBERO",
    text: "Ein Libero spielt in der Hinterreihe. Er darf nicht blocken oder einen Angriff oberhalb der Netzkante vollenden."
  }
];

const rulesList = document.getElementById("rulesList");

rules.forEach((rule, i) => {
  const article = document.createElement("article");
  article.className = "rule";

  article.innerHTML = `
    <strong>0${i + 1}</strong>
    <h3>${rule.title}</h3>
    <p>${rule.text}</p>
  `;

  rulesList.appendChild(article);
});

// ========================================
// SERVE CHALLENGE
// ========================================

let attempts = 0;
let hits = 0;
let serving = false;
let serveTimer = null;

const serveBall = document.getElementById("serveBall");
const target = document.getElementById("target");
const miniCourt = document.getElementById("miniCourt");
const serveBtn = document.getElementById("serveBtn");

function resetBall() {
  serveBall.style.transition = "none";
  serveBall.style.left = "48%";
  serveBall.style.top = "auto";
  serveBall.style.bottom = "5px";
}

function serve() {
  if (serving || attempts >= 10) return;

  serving = true;
  serveBtn.disabled = true;
  attempts++;

  document.getElementById("attempts").textContent = `${attempts} / 10`;

  const targetX = 15 + Math.random() * 70;
  const targetY = 12 + Math.random() * 23;

  target.style.left = `${targetX}%`;
  target.style.top = `${targetY}%`;

  // Zufällige Treffergenauigkeit als kleines Arcade-Spiel.
  const hit = Math.random() < 0.55;
  const offsetX = hit ? (Math.random() - .5) * 5 : 18 + Math.random() * 15;
  const offsetY = hit ? (Math.random() - .5) * 5 : 10 + Math.random() * 15;

  const landingX = Math.max(5, Math.min(92, targetX + offsetX));
  const landingY = Math.max(5, Math.min(92, targetY + offsetY));

  resetBall();

  // Neue Animation im nächsten Frame starten.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      serveBall.style.transition = "left .65s ease-out, top .65s ease-out";
      serveBall.style.bottom = "auto";
      serveBall.style.top = `${landingY}%`;
      serveBall.style.left = `${landingX}%`;
    });
  });

  document.getElementById("serveMessage").textContent = "🏐 BALL IN THE AIR!";

  serveTimer = setTimeout(() => {
    if (hit) {
      hits++;
      document.getElementById("serveMessage").textContent = "🔥 NICE SERVE! +1 Treffer";
      showToast("POINT! 🏐");
    } else {
      document.getElementById("serveMessage").textContent = "Knapp daneben! Versuche es erneut.";
    }

    document.getElementById("hits").textContent = hits;
    serving = false;
    serveBtn.disabled = attempts >= 10;

    if (attempts === 10) {
      document.getElementById("serveMessage").textContent =
        `GAME OVER! ${hits} von 10 Aufschlägen getroffen.`;
    }
  }, 750);
}

function resetServe() {
  clearTimeout(serveTimer);
  attempts = 0;
  hits = 0;
  serving = false;
  serveBtn.disabled = false;

  resetBall();
  document.getElementById("attempts").textContent = "0 / 10";
  document.getElementById("hits").textContent = "0";
  document.getElementById("serveMessage").textContent =
    "Bereit für deinen ersten Aufschlag?";
}

serveBtn.addEventListener("click", serve);
document.getElementById("serveReset").addEventListener("click", resetServe);

// ========================================
// MATCH SCOREBOARD
// ========================================

let scoreA = 0;
let scoreB = 0;
let matchOver = false;

function updateScore() {
  document.getElementById("scoreA").textContent =
    String(scoreA).padStart(2, "0");
  document.getElementById("scoreB").textContent =
    String(scoreB).padStart(2, "0");

  const max = Math.max(scoreA, scoreB);
  const diff = Math.abs(scoreA - scoreB);

  if (max >= 25 && diff >= 2) {
    matchOver = true;

    const winner = scoreA > scoreB ? "KARASUNO" : "NEKOMA";
    document.getElementById("matchStatus").textContent =
      `${winner} WINS THE SET! 🏆`;
  } else if (scoreA >= 24 && scoreB >= 24) {
    document.getElementById("matchStatus").textContent = "DEUCE! KEEP FIGHTING!";
  } else {
    document.getElementById("matchStatus").textContent = "THE MATCH IS ON! 🏐";
  }
}

document.getElementById("pointA").addEventListener("click", () => {
  if (!matchOver) {
    scoreA++;
    updateScore();
  }
});

document.getElementById("pointB").addEventListener("click", () => {
  if (!matchOver) {
    scoreB++;
    updateScore();
  }
});

document.getElementById("resetMatch").addEventListener("click", () => {
  scoreA = 0;
  scoreB = 0;
  matchOver = false;
  updateScore();
  document.getElementById("matchStatus").textContent = "LET THE GAME BEGIN!";
});

// ========================================
// HAIKYUU QUIZ
// ========================================

const questions = [
  {
    question: "Wie heisst die Hauptfigur von Haikyuu!!?",
    answers: ["Kenma Kozume", "Shoyo Hinata", "Toru Oikawa", "Kotaro Bokuto"],
    correct: 1
  },
  {
    question: "In welchem Team spielt Hinata?",
    answers: ["Nekoma", "Inarizaki", "Karasuno", "Fukurodani"],
    correct: 2
  },
  {
    question: "Welche Position spielt Kageyama?",
    answers: ["Libero", "Zuspieler", "Mittelblocker", "Aussenangreifer"],
    correct: 1
  },
  {
    question: "Welches Tier symbolisiert Nekoma?",
    answers: ["Krähe", "Fuchs", "Katze", "Eule"],
    correct: 2
  },
  {
    question: "Wie viele Spieler stehen pro Team auf dem Feld?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Wie heisst Karasunos Libero?",
    answers: ["Nishinoya", "Tsukishima", "Sugawara", "Oikawa"],
    correct: 0
  },
  {
    question: "Wie viele reguläre Teamberührungen sind erlaubt?",
    answers: ["2", "3", "4", "5"],
    correct: 1
  },
  {
    question: "In welcher Schule spielt Kenma?",
    answers: ["Karasuno", "Nekoma", "Shiratorizawa", "Inarizaki"],
    correct: 1
  },
  {
    question: "Wie viele Punkte benötigt man normalerweise zum Gewinn eines regulären Satzes?",
    answers: ["15", "20", "21", "25"],
    correct: 3
  },
  {
    question: "Wie heisst der Film über Karasuno gegen Nekoma?",
    answers: [
      "The Final Serve",
      "The Dumpster Battle",
      "To The Sky",
      "The Last Match"
    ],
    correct: 1
  }
];

let quizIndex = 0;
let quizScore = 0;
let answered = false;

const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const quizNext = document.getElementById("quizNext");

function showQuestion() {
  answered = false;
  const q = questions[quizIndex];

  document.getElementById("quizCounter").textContent =
    `QUESTION ${String(quizIndex + 1).padStart(2, "0")} / ${questions.length}`;

  document.getElementById("quizBar").style.width =
    `${quizIndex / questions.length * 100}%`;

  quizQuestion.textContent = q.question;
  quizAnswers.innerHTML = "";
  document.getElementById("quizFeedback").textContent = "";

  quizNext.hidden = true;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    quizAnswers.appendChild(button);
  });
}

function checkAnswer(index) {
  if (answered) return;

  answered = true;
  const q = questions[quizIndex];

  quizAnswers.querySelectorAll("button").forEach((button, i) => {
    button.disabled = true;

    if (i === q.correct) button.classList.add("correct");
    if (i === index && index !== q.correct) button.classList.add("wrong");
  });

  if (index === q.correct) {
    quizScore++;
    document.getElementById("quizFeedback").textContent = "🔥 CORRECT! NICE PLAY!";
  } else {
    document.getElementById("quizFeedback").textContent =
      `Richtig wäre: ${q.answers[q.correct]}`;
  }

  quizNext.hidden = false;
}

function showResult() {
  document.getElementById("quizBar").style.width = "100%";
  document.getElementById("quizCounter").textContent = "QUIZ COMPLETE";

  quizQuestion.textContent = `${quizScore} / ${questions.length} POINTS`;
  quizAnswers.innerHTML = "";

  let message = "KEEP TRAINING! 🏐";

  if (quizScore >= 5) message = "GOOD JOB! YOU'RE GETTING STRONGER! 💪";
  if (quizScore >= 8) message = "AMAZING! HAIKYUU EXPERT! 🔥";
  if (quizScore === 10) message = "PERFECT! YOU'RE THE ACE! 🏆";

  document.getElementById("quizFeedback").textContent = message;
  quizNext.textContent = "PLAY AGAIN ↻";
  quizNext.hidden = false;
}

quizNext.addEventListener("click", () => {
  if (quizIndex >= questions.length - 1 && answered) {
    // Letzte Antwort – erst Ergebnis zeigen.
    if (quizNext.textContent !== "PLAY AGAIN ↻") {
      showResult();
      return;
    }
  }

  if (quizNext.textContent === "PLAY AGAIN ↻") {
    quizIndex = 0;
    quizScore = 0;
    quizNext.textContent = "NEXT QUESTION →";
    showQuestion();
    return;
  }

  quizIndex++;
  showQuestion();
});

showQuestion();

// ========================================
// TOAST NOTIFICATIONS
// ========================================

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, 2200);
}

// SMALL ENTRANCE ANIMATION

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  ".section-heading, .story-layout, .team-showcase, .challenge-box"
).forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(element);
});
