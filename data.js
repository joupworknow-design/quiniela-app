// Base de datos oficial de los partidos y pronósticos - Quiniela Mundial 2026
// Partidos m1-m22: pronósticos pre-cargados por el administrador
// A partir de m23 (Ghana vs Panamá): cada participante ingresa su propio pronóstico

const INITIAL_MATCHES = [
  { id: "m1", stage: "Fase de Grupos", group: "A", homeTeam: "México", awayTeam: "Sudáfrica", date: "2026-06-11 18:00", realHomeScore: 2, realAwayScore: 0, completed: true },
  { id: "m2", stage: "Fase de Grupos", group: "A", homeTeam: "Corea del Sur", awayTeam: "Chequia", date: "2026-06-12 15:00", realHomeScore: 2, realAwayScore: 1, completed: true },
  { id: "m3", stage: "Fase de Grupos", group: "B", homeTeam: "Canadá", awayTeam: "Bosnia y Herzegovina", date: "2026-06-12 19:00", realHomeScore: 1, realAwayScore: 1, completed: true },
  { id: "m4", stage: "Fase de Grupos", group: "D", homeTeam: "EE.UU.", awayTeam: "Paraguay", date: "2026-06-13 14:00", realHomeScore: 4, realAwayScore: 1, completed: true },
  { id: "m5", stage: "Fase de Grupos", group: "B", homeTeam: "Catar", awayTeam: "Suiza", date: "2026-06-13 17:00", realHomeScore: 1, realAwayScore: 1, completed: true },
  { id: "m6", stage: "Fase de Grupos", group: "C", homeTeam: "Brasil", awayTeam: "Marruecos", date: "2026-06-13 20:00", realHomeScore: 1, realAwayScore: 1, completed: true },
  { id: "m7", stage: "Fase de Grupos", group: "C", homeTeam: "Haití", awayTeam: "Escocia", date: "2026-06-14 13:00", realHomeScore: 0, realAwayScore: 1, completed: true },
  { id: "m8", stage: "Fase de Grupos", group: "D", homeTeam: "Australia", awayTeam: "Turquía", date: "2026-06-14 16:00", realHomeScore: 2, realAwayScore: 0, completed: true },
  { id: "m9", stage: "Fase de Grupos", group: "E", homeTeam: "Alemania", awayTeam: "Curazao", date: "2026-06-14 19:00", realHomeScore: 7, realAwayScore: 1, completed: true },
  { id: "m10", stage: "Fase de Grupos", group: "F", homeTeam: "Países Bajos", awayTeam: "Japón", date: "2026-06-14 21:00", realHomeScore: 2, realAwayScore: 2, completed: true },
  { id: "m11", stage: "Fase de Grupos", group: "E", homeTeam: "Costa de Marfil", awayTeam: "Ecuador", date: "2026-06-15 14:00", realHomeScore: 1, realAwayScore: 0, completed: true },
  { id: "m12", stage: "Fase de Grupos", group: "F", homeTeam: "Suecia", awayTeam: "Túnez", date: "2026-06-15 17:00", realHomeScore: 5, realAwayScore: 1, completed: true },
  { id: "m13", stage: "Fase de Grupos", group: "H", homeTeam: "España", awayTeam: "Cabo Verde", date: "2026-06-15 20:00", realHomeScore: 0, realAwayScore: 0, completed: true },
  { id: "m14", stage: "Fase de Grupos", group: "G", homeTeam: "Bélgica", awayTeam: "Egipto", date: "2026-06-15 22:00", realHomeScore: 1, realAwayScore: 1, completed: true },
  { id: "m15", stage: "Fase de Grupos", group: "H", homeTeam: "Arabia Saudita", awayTeam: "Uruguay", date: "2026-06-15 23:00", realHomeScore: 1, realAwayScore: 1, completed: true },
  { id: "m16", stage: "Fase de Grupos", group: "G", homeTeam: "Irán", awayTeam: "Nueva Zelanda", date: "2026-06-16 15:00", realHomeScore: 2, realAwayScore: 2, completed: true },
  
  // Partidos Por Jugar (En curso o futuros)
  { id: "m17", stage: "Fase de Grupos", group: "I", homeTeam: "Francia", awayTeam: "Senegal", date: "2026-06-16 20:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m18", stage: "Fase de Grupos", group: "I", homeTeam: "Irak", awayTeam: "Noruega", date: "2026-06-16 22:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m19", stage: "Fase de Grupos", group: "J", homeTeam: "Argentina", awayTeam: "Argelia", date: "2026-06-16 23:30", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m20", stage: "Fase de Grupos", group: "J", homeTeam: "Austria", awayTeam: "Jordania", date: "2026-06-17 17:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m21", stage: "Fase de Grupos", group: "K", homeTeam: "Portugal", awayTeam: "RD Congo", date: "2026-06-18 18:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m22", stage: "Fase de Grupos", group: "L", homeTeam: "Inglaterra", awayTeam: "Croacia", date: "2026-06-19 20:00", realHomeScore: null, realAwayScore: null, completed: false },

  // ─────────────────────────────────────────────────────────────────────────
  // A PARTIR DE AQUÍ: Cada participante ingresa sus propios pronósticos
  // ─────────────────────────────────────────────────────────────────────────

  // Grupo L - 2ª Jornada
  { id: "m23", stage: "Fase de Grupos", group: "L", homeTeam: "Ghana", awayTeam: "Panamá", date: "2026-06-19 17:00", realHomeScore: null, realAwayScore: null, completed: false },

  // Grupo K - 2ª Jornada
  { id: "m24", stage: "Fase de Grupos", group: "K", homeTeam: "Senegal", awayTeam: "Austria", date: "2026-06-20 17:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m25", stage: "Fase de Grupos", group: "K", homeTeam: "Portugal", awayTeam: "Argentina", date: "2026-06-21 20:00", realHomeScore: null, realAwayScore: null, completed: false },

  // Grupo J - 2ª Jornada
  { id: "m26", stage: "Fase de Grupos", group: "J", homeTeam: "México", awayTeam: "EE.UU.", date: "2026-06-22 18:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m27", stage: "Fase de Grupos", group: "J", homeTeam: "Bolivia", awayTeam: "Suráfrica", date: "2026-06-22 21:00", realHomeScore: null, realAwayScore: null, completed: false },

  // Grupo I - 2ª Jornada
  { id: "m28", stage: "Fase de Grupos", group: "I", homeTeam: "Francia", awayTeam: "Irak", date: "2026-06-23 17:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m29", stage: "Fase de Grupos", group: "I", homeTeam: "Senegal", awayTeam: "Noruega", date: "2026-06-23 20:00", realHomeScore: null, realAwayScore: null, completed: false },

  // Grupo L - 3ª Jornada
  { id: "m30", stage: "Fase de Grupos", group: "L", homeTeam: "Inglaterra", awayTeam: "Ghana", date: "2026-06-24 17:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m31", stage: "Fase de Grupos", group: "L", homeTeam: "Croacia", awayTeam: "Panamá", date: "2026-06-24 17:00", realHomeScore: null, realAwayScore: null, completed: false },

  // Resto de Partidos de Fase de Grupos (Jornada 3)
  { id: "m32", stage: "Fase de Grupos", group: "A", homeTeam: "México", awayTeam: "Chequia", date: "2026-06-25 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m33", stage: "Fase de Grupos", group: "A", homeTeam: "Sudáfrica", awayTeam: "Corea del Sur", date: "2026-06-25 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m34", stage: "Fase de Grupos", group: "B", homeTeam: "Canadá", awayTeam: "Suiza", date: "2026-06-25 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m35", stage: "Fase de Grupos", group: "B", homeTeam: "Bosnia y Herzegovina", awayTeam: "Catar", date: "2026-06-25 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m36", stage: "Fase de Grupos", group: "C", homeTeam: "Brasil", awayTeam: "Escocia", date: "2026-06-26 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m37", stage: "Fase de Grupos", group: "C", homeTeam: "Marruecos", awayTeam: "Haití", date: "2026-06-26 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m38", stage: "Fase de Grupos", group: "D", homeTeam: "EE.UU.", awayTeam: "Turquía", date: "2026-06-26 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m39", stage: "Fase de Grupos", group: "D", homeTeam: "Paraguay", awayTeam: "Australia", date: "2026-06-26 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m40", stage: "Fase de Grupos", group: "E", homeTeam: "Alemania", awayTeam: "Ecuador", date: "2026-06-27 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m41", stage: "Fase de Grupos", group: "E", homeTeam: "Curazao", awayTeam: "Costa de Marfil", date: "2026-06-27 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m42", stage: "Fase de Grupos", group: "F", homeTeam: "Países Bajos", awayTeam: "Túnez", date: "2026-06-27 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m43", stage: "Fase de Grupos", group: "F", homeTeam: "Japón", awayTeam: "Suecia", date: "2026-06-27 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m44", stage: "Fase de Grupos", group: "G", homeTeam: "Bélgica", awayTeam: "Nueva Zelanda", date: "2026-06-28 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m45", stage: "Fase de Grupos", group: "G", homeTeam: "Egipto", awayTeam: "Irán", date: "2026-06-28 15:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m46", stage: "Fase de Grupos", group: "H", homeTeam: "España", awayTeam: "Uruguay", date: "2026-06-28 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m47", stage: "Fase de Grupos", group: "H", homeTeam: "Cabo Verde", awayTeam: "Arabia Saudita", date: "2026-06-28 19:00", realHomeScore: null, realAwayScore: null, completed: false },
  { id: "m48", stage: "Fase de Grupos", group: "I", homeTeam: "Francia", awayTeam: "Noruega", date: "2026-06-29 15:00", realHomeScore: null, realAwayScore: null, completed: false }
];


// Usuarios Iniciales del Tablero (sin PIN para que se registren ellos mismos)
const INITIAL_USERS = [
  { id: "angel", name: "Ángel", pin: null, avatar: "🦁" },
  { id: "jairo", name: "Jairo", pin: null, avatar: "🏆" },
  { id: "jesus", name: "Jesús", pin: null, avatar: "🔥" },
  { id: "anabell", name: "Anabell", pin: null, avatar: "🌟" },
  { id: "luis", name: "Luis", pin: null, avatar: "🦖" },
  { id: "nicolas", name: "Nicolás", pin: null, avatar: "⚡" },
  { id: "yein", name: "Yein", pin: null, avatar: "😎" },
  { id: "jonathan", name: "Jonathan", pin: null, avatar: "⚽" }
];

// Pronósticos oficiales vaciados
const INITIAL_PREDICTIONS = {
  // Partido 1: México vs Sudáfrica
  "angel_m1": { homeScore: 1, awayScore: 1 },
  "jairo_m1": { homeScore: 2, awayScore: 1 },
  "jesus_m1": { homeScore: 2, awayScore: 0 },
  "anabell_m1": { homeScore: 2, awayScore: 0 },
  "luis_m1": { homeScore: 2, awayScore: 0 },
  "nicolas_m1": { homeScore: 2, awayScore: 0 },
  "yein_m1": { homeScore: 2, awayScore: 0 },

  // Partido 2: Corea del Sur vs Chequia
  "angel_m2": { homeScore: 1, awayScore: 0 },
  "jairo_m2": { homeScore: 1, awayScore: 0 },
  "jesus_m2": { homeScore: 0, awayScore: 3 },
  // anabell_m2 no tiene pronóstico
  "luis_m2": { homeScore: 1, awayScore: 0 },
  "nicolas_m2": { homeScore: 0, awayScore: 0 },
  "yein_m2": { homeScore: 1, awayScore: 0 },

  // Partido 3: Canadá vs Bosnia y Herzegovina
  "angel_m3": { homeScore: 1, awayScore: 0 },
  "jairo_m3": { homeScore: 2, awayScore: 0 },
  "jesus_m3": { homeScore: 0, awayScore: 2 },
  "anabell_m3": { homeScore: 1, awayScore: 0 },
  "luis_m3": { homeScore: 1, awayScore: 1 },
  "nicolas_m3": { homeScore: 1, awayScore: 0 },
  "yein_m3": { homeScore: 2, awayScore: 0 },

  // Partido 4: EE.UU. vs Paraguay
  "angel_m4": { homeScore: 1, awayScore: 2 },
  "jairo_m4": { homeScore: 2, awayScore: 1 },
  "jesus_m4": { homeScore: 2, awayScore: 0 },
  "anabell_m4": { homeScore: 2, awayScore: 1 },
  "luis_m4": { homeScore: 1, awayScore: 2 },
  "nicolas_m4": { homeScore: 2, awayScore: 2 },
  "yein_m4": { homeScore: 2, awayScore: 1 },

  // Partido 5: Catar vs Suiza
  "angel_m5": { homeScore: 1, awayScore: 2 },
  "jairo_m5": { homeScore: 0, awayScore: 2 },
  "jesus_m5": { homeScore: 0, awayScore: 1 },
  "anabell_m5": { homeScore: 0, awayScore: 2 },
  "luis_m5": { homeScore: 0, awayScore: 2 },
  "nicolas_m5": { homeScore: 1, awayScore: 2 },
  "yein_m5": { homeScore: 0, awayScore: 2 },

  // Partido 6: Brasil vs Marruecos
  "angel_m6": { homeScore: 3, awayScore: 1 },
  "jairo_m6": { homeScore: 3, awayScore: 2 },
  "jesus_m6": { homeScore: 2, awayScore: 0 },
  "anabell_m6": { homeScore: 3, awayScore: 1 },
  "luis_m6": { homeScore: 2, awayScore: 2 },
  "nicolas_m6": { homeScore: 3, awayScore: 2 },
  "yein_m6": { homeScore: 2, awayScore: 1 },

  // Partido 7: Haití vs Escocia
  "angel_m7": { homeScore: 0, awayScore: 2 },
  "jairo_m7": { homeScore: 0, awayScore: 2 },
  "jesus_m7": { homeScore: 0, awayScore: 3 },
  "anabell_m7": { homeScore: 1, awayScore: 1 },
  "luis_m7": { homeScore: 0, awayScore: 2 },
  "nicolas_m7": { homeScore: 1, awayScore: 2 },
  "yein_m7": { homeScore: 0, awayScore: 2 },

  // Partido 8: Australia vs Turquía
  "angel_m8": { homeScore: 0, awayScore: 2 },
  "jairo_m8": { homeScore: 1, awayScore: 2 },
  "jesus_m8": { homeScore: 1, awayScore: 1 },
  "anabell_m8": { homeScore: 1, awayScore: 2 },
  "luis_m8": { homeScore: 1, awayScore: 2 },
  "nicolas_m8": { homeScore: 1, awayScore: 2 },
  "yein_m8": { homeScore: 1, awayScore: 1 },

  // Partido 9: Alemania vs Curazao
  "angel_m9": { homeScore: 3, awayScore: 0 },
  "jairo_m9": { homeScore: 3, awayScore: 0 },
  "jesus_m9": { homeScore: 5, awayScore: 0 },
  "anabell_m9": { homeScore: 3, awayScore: 1 },
  "luis_m9": { homeScore: 3, awayScore: 0 },
  "nicolas_m9": { homeScore: 4, awayScore: 0 },
  "yein_m9": { homeScore: 4, awayScore: 0 },

  // Partido 10: Países Bajos vs Japón
  "angel_m10": { homeScore: 1, awayScore: 2 },
  "jairo_m10": { homeScore: 2, awayScore: 2 },
  "jesus_m10": { homeScore: 3, awayScore: 0 },
  "anabell_m10": { homeScore: 1, awayScore: 1 },
  "luis_m10": { homeScore: 2, awayScore: 1 },
  "nicolas_m10": { homeScore: 1, awayScore: 2 },
  "yein_m10": { homeScore: 2, awayScore: 0 },

  // Partido 11: Costa de Marfil vs Ecuador
  "angel_m11": { homeScore: 1, awayScore: 1 },
  "jairo_m11": { homeScore: 1, awayScore: 2 },
  "jesus_m11": { homeScore: 0, awayScore: 2 },
  "anabell_m11": { homeScore: 1, awayScore: 1 },
  "luis_m11": { homeScore: 1, awayScore: 1 },
  "nicolas_m11": { homeScore: 0, awayScore: 2 },
  "yein_m11": { homeScore: 0, awayScore: 1 },

  // Partido 12: Suecia vs Túnez
  "angel_m12": { homeScore: 1, awayScore: 0 },
  "jairo_m12": { homeScore: 2, awayScore: 0 },
  "jesus_m12": { homeScore: 2, awayScore: 0 },
  "anabell_m12": { homeScore: 2, awayScore: 1 },
  "luis_m12": { homeScore: 1, awayScore: 0 },
  "nicolas_m12": { homeScore: 1, awayScore: 1 },
  "yein_m12": { homeScore: 2, awayScore: 0 },

  // Partido 13: España vs Cabo Verde
  "angel_m13": { homeScore: 4, awayScore: 0 },
  "jairo_m13": { homeScore: 3, awayScore: 1 },
  "jesus_m13": { homeScore: 5, awayScore: 0 },
  "anabell_m13": { homeScore: 3, awayScore: 0 },
  "luis_m13": { homeScore: 3, awayScore: 0 },
  "nicolas_m13": { homeScore: 3, awayScore: 0 },
  "yein_m13": { homeScore: 3, awayScore: 0 },

  // Partido 14: Bélgica vs Egipto
  "angel_m14": { homeScore: 2, awayScore: 1 },
  "jairo_m14": { homeScore: 2, awayScore: 0 },
  "jesus_m14": { homeScore: 3, awayScore: 0 },
  "anabell_m14": { homeScore: 2, awayScore: 0 },
  "luis_m14": { homeScore: 2, awayScore: 0 },
  "nicolas_m14": { homeScore: 2, awayScore: 0 },
  "yein_m14": { homeScore: 2, awayScore: 1 },
  "jonathan_m14": { homeScore: 2, awayScore: 2 },

  // Partido 15: Arabia Saudita vs Uruguay
  "angel_m15": { homeScore: 0, awayScore: 2 },
  "jairo_m15": { homeScore: 1, awayScore: 2 },
  "jesus_m15": { homeScore: 1, awayScore: 3 },
  "anabell_m15": { homeScore: 0, awayScore: 1 },
  "luis_m15": { homeScore: 0, awayScore: 2 },
  "nicolas_m15": { homeScore: 0, awayScore: 2 },
  "yein_m15": { homeScore: 0, awayScore: 2 },
  "jonathan_m15": { homeScore: 0, awayScore: 2 },

  // Partido 16: Irán vs Nueva Zelanda
  "angel_m16": { homeScore: 0, awayScore: 2 },
  "jairo_m16": { homeScore: 1, awayScore: 2 },
  "jesus_m16": { homeScore: 1, awayScore: 1 },
  "anabell_m16": { homeScore: 0, awayScore: 1 },
  "luis_m16": { homeScore: 0, awayScore: 1 },
  "nicolas_m16": { homeScore: 1, awayScore: 1 },
  "yein_m16": { homeScore: 0, awayScore: 1 },
  "jonathan_m16": { homeScore: 1, awayScore: 0 },

  // Partido 17: Francia vs Senegal
  "angel_m17": { homeScore: 3, awayScore: 0 },
  "jairo_m17": { homeScore: 3, awayScore: 1 },
  "jesus_m17": { homeScore: 3, awayScore: 0 },
  "anabell_m17": { homeScore: 2, awayScore: 0 },
  "luis_m17": { homeScore: 2, awayScore: 1 },
  "nicolas_m17": { homeScore: 3, awayScore: 1 },
  "yein_m17": { homeScore: 2, awayScore: 1 },
  "jonathan_m17": { homeScore: 2, awayScore: 1 },

  // Partido 18: Irak vs Noruega
  "angel_m18": { homeScore: 1, awayScore: 2 },
  "jairo_m18": { homeScore: 0, awayScore: 2 },
  "jesus_m18": { homeScore: 1, awayScore: 2 },
  "anabell_m18": { homeScore: 0, awayScore: 0 },
  "luis_m18": { homeScore: 1, awayScore: 2 },
  "nicolas_m18": { homeScore: 1, awayScore: 3 },
  "yein_m18": { homeScore: 0, awayScore: 2 },
  "jonathan_m18": { homeScore: 0, awayScore: 3 },

  // Partido 19: Argentina vs Argelia
  "angel_m19": { homeScore: 3, awayScore: 0 },
  "jairo_m19": { homeScore: 2, awayScore: 1 },
  "jesus_m19": { homeScore: 2, awayScore: 0 },
  "anabell_m19": { homeScore: 3, awayScore: 1 },
  "luis_m19": { homeScore: 2, awayScore: 0 },
  "nicolas_m19": { homeScore: 2, awayScore: 0 },
  "yein_m19": { homeScore: 2, awayScore: 0 },
  "jonathan_m19": { homeScore: 1, awayScore: 1 },

  // Partido 20: Austria vs Jordania
  "angel_m20": { homeScore: 1, awayScore: 1 },
  "jairo_m20": { homeScore: 1, awayScore: 0 },
  "jesus_m20": { homeScore: 1, awayScore: 0 },
  "anabell_m20": { homeScore: 1, awayScore: 0 },
  "luis_m20": { homeScore: 1, awayScore: 1 },
  "nicolas_m20": { homeScore: 2, awayScore: 1 },
  "yein_m20": { homeScore: 2, awayScore: 0 },
  "jonathan_m20": { homeScore: 2, awayScore: 0 },

  // Partido 21: Portugal vs RD Congo
  "angel_m21": { homeScore: 3, awayScore: 0 },
  "jairo_m21": { homeScore: 3, awayScore: 0 },
  "jesus_m21": { homeScore: 2, awayScore: 0 },
  "anabell_m21": { homeScore: 2, awayScore: 0 },
  "luis_m21": { homeScore: 2, awayScore: 0 },
  "nicolas_m21": { homeScore: 2, awayScore: 0 },
  "yein_m21": { homeScore: 3, awayScore: 0 },
  "jonathan_m21": { homeScore: 3, awayScore: 0 },

  // Partido 22: Inglaterra vs Croacia
  "angel_m22": { homeScore: 3, awayScore: 2 },
  "jairo_m22": { homeScore: 3, awayScore: 2 },
  "jesus_m22": { homeScore: 2, awayScore: 1 },
  "anabell_m22": { homeScore: 2, awayScore: 0 },
  "luis_m22": { homeScore: 2, awayScore: 2 },
  "nicolas_m22": { homeScore: 3, awayScore: 1 },
  "yein_m22": { homeScore: 2, awayScore: 1 },
  "jonathan_m22": { homeScore: 1, awayScore: 2 }
};

const COUNTRIES = [
  "México", "Sudáfrica", "Corea del Sur", "Chequia", "Canadá", "Bosnia y Herzegovina",
  "EE.UU.", "Paraguay", "Catar", "Suiza", "Brasil", "Marruecos", "Haití", "Escocia",
  "Australia", "Turquía", "Alemania", "Curazao", "Países Bajos", "Japón", "Costa de Marfil",
  "Ecuador", "Suecia", "Túnez", "España", "Cabo Verde", "Bélgica", "Egipto", "Arabia Saudita",
  "Uruguay", "Irán", "Nueva Zelanda", "Francia", "Senegal", "Irak", "Noruega", "Argentina",
  "Argelia", "Austria", "Jordania", "Portugal", "RD Congo", "Inglaterra", "Croacia",
  "Ghana", "Panamá", "Bolivia", "Suráfrica"
];

