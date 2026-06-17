// admin.js - panel de resultados con Firebase Auth + Firestore

const { auth, db } = window.firebaseServices;

const COUNTRY_CODES = {
  "Argelia": "dz", "Argentina": "ar", "Australia": "au", "Austria": "at", "Bélgica": "be",
  "Bosnia y Herzegovina": "ba", "Brasil": "br", "Canadá": "ca", "Cabo Verde": "cv", "Colombia": "co",
  "Croacia": "hr", "Curazao": "cw", "Curaçao": "cw", "Chequia": "cz", "RD Congo": "cd", "Ecuador": "ec",
  "Egipto": "eg", "Inglaterra": "gb-eng", "Francia": "fr", "Alemania": "de", "Ghana": "gh", "Haití": "ht",
  "Irán": "ir", "Irak": "iq", "Costa de Marfil": "ci", "Japón": "jp", "Jordania": "jo", "México": "mx",
  "Marruecos": "ma", "Países Bajos": "nl", "Nueva Zelanda": "nz", "Noruega": "no", "Panamá": "pa",
  "Paraguay": "py", "Portugal": "pt", "Catar": "qa", "Arabia Saudita": "sa", "Escocia": "gb-sct",
  "Senegal": "sn", "Sudáfrica": "za", "Corea del Sur": "kr", "España": "es", "Suecia": "se", "Suiza": "ch",
  "Túnez": "tn", "Turquía": "tr", "EE.UU.": "us", "Uruguay": "uy", "Uzbekistán": "uz"
};

let adminCurrentStage = "";
let matches = [];
let currentUser = null;

function getCountryFlag(countryName) {
  if (!countryName) return "";
  const code = COUNTRY_CODES[countryName];
  if (!code) return "";
  return `<img src="https://flagcdn.com/w40/${code}.png" alt="Bandera de ${countryName}" style="width:20px;height:auto;border-radius:2px;vertical-align:middle;margin-right:6px;">`;
}

function setStage(stage) {
  adminCurrentStage = stage;
  renderAdminPanel();
}
window.setStage = setStage;

window.adminLogout = async () => {
  await auth.signOut();
  window.location.href = "index.html";
};

function renderUnauthorized() {
  const panel = document.getElementById("adminPanel");
  panel.innerHTML = `
    <div style="max-width: 500px; margin: 30px auto; text-align: center;">
      <h2>Acceso restringido</h2>
      <p>Debes iniciar sesión con un usuario <strong>admin</strong> para gestionar resultados.</p>
      <button class="btn btn-primary" onclick="window.location.href='index.html'">Ir al inicio</button>
    </div>
  `;
}

function renderAdminPanel() {
  const panel = document.getElementById("adminPanel");
  if (!currentUser || currentUser.role !== "admin") {
    renderUnauthorized();
    return;
  }

  const filtered = adminCurrentStage ? matches.filter((m) => m.stage === adminCurrentStage) : matches;
  if (filtered.length === 0) {
    panel.innerHTML = "<p>No hay partidos para esta fase.</p>";
    return;
  }

  let html = `<h2>Actualizar Marcadores Finales</h2><div class="matches-grid">`;
  filtered.forEach((m) => {
    const home = m.realHomeScore != null ? m.realHomeScore : "";
    const away = m.realAwayScore != null ? m.realAwayScore : "";
    html += `
      <div class="match-card">
        <div class="match-header">
          <span class="match-stage">${m.stage || ""}</span>
          <span>${m.date || ""}</span>
        </div>
        <div class="match-teams-score">
          <div class="team-row">
            <div class="team-info">${getCountryFlag(m.homeTeam)}<span>${m.homeTeam}</span></div>
            <input type="number" class="score-input" id="h_${m.id}" value="${home}" min="0">
          </div>
          <div class="team-row">
            <div class="team-info">${getCountryFlag(m.awayTeam)}<span>${m.awayTeam}</span></div>
            <input type="number" class="score-input" id="a_${m.id}" value="${away}" min="0">
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" onclick="saveMatchScore('${m.id}')">Guardar</button>
        </div>
      </div>
    `;
  });
  html += "</div>";
  panel.innerHTML = html;
}

window.saveMatchScore = async (matchId) => {
  if (!currentUser || currentUser.role !== "admin") {
    alert("No autorizado.");
    return;
  }
  const homeEl = document.getElementById(`h_${matchId}`);
  const awayEl = document.getElementById(`a_${matchId}`);
  if (!homeEl || !awayEl) return;

  const home = homeEl.value.trim() === "" ? null : parseInt(homeEl.value, 10);
  const away = awayEl.value.trim() === "" ? null : parseInt(awayEl.value, 10);
  if (home === null || away === null || Number.isNaN(home) || Number.isNaN(away)) {
    alert("Debes ingresar ambos marcadores.");
    return;
  }

  await db.collection("matches").doc(matchId).set({
    realHomeScore: home,
    realAwayScore: away,
    completed: true,
    status: "FINISHED",
    liveHomeScore: null,
    liveAwayScore: null,
    minute: null
  }, { merge: true });
};

function initAdmin() {
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      currentUser = null;
      renderUnauthorized();
      return;
    }

    const userSnap = await db.collection("users").doc(user.uid).get();
    const userData = userSnap.exists ? userSnap.data() : {};
    currentUser = { uid: user.uid, role: userData.role || "user" };
    renderAdminPanel();
  });

  db.collection("matches").onSnapshot((snap) => {
    matches = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => {
        const left = new Date((a.date || "").replace(" ", "T") + "Z").getTime();
        const right = new Date((b.date || "").replace(" ", "T") + "Z").getTime();
        return left - right;
      });
    renderAdminPanel();
  });
}

initAdmin();
