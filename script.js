// ======================================================
// 📻 CONFIGURACIÓN DE LA RADIO
// ======================================================
const stationWebsites = {
  "Radio La Unción": "https://radiolauncion.com/",
  "Radio Vida": "https://radiovidacusco.com/",
  "Radio Unión Cristiana": "https://zeno.fm/radio/radio-union-cristiana/",
  "Radio Nueva Luz": "https://radionuevaluzcusco.com/",
  "Radio DiospySuyana": "https://diospisuyanaradio.com/",
  "Al Fin Radio": "https://alfinradio.blogspot.com/?m=1",
  "Radio Poder Celestial": "https://onlineradiobox.com/pe/podercelestial/",
  "Radio Bethel": "https://www.bethel.fm/",
  "Radio Nueva Luz Live": "https://radionuevaluzcusco.com/",
};
const schedule = [
  {
    startTime: "00:00:00",
    endTime: "04:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Hora Cero con Jesús",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "04:00:00",
    endTime: "05:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "A Solas Con Dios",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "05:56:00",
    endTime: "06:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5, 6, 0],
  },

  //lunes a Viernes ❌📛📛🛑❌❌❌❌❌❌❌❌❌❌


  
  {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
      logo: "/assets/RadioBethel.jpg"
    },
    programName: "Despierta con Bethel",
    days: [1,2,3,4,5],
  },
  {
    startTime: "07:00:00",
    endTime: "07:06:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5 ],
  },
  {
    startTime: "07:06:00",
    endTime: "07:56:00",
    station: {
      name: "Radio Unión Cristiana",
      url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
      logo: "/assets/RadioUnionCristiana.jpg"
    },
    programName: "Fortaleza Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "07:56:00",
    endTime: "08:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:00:00",
    endTime: "08:56:00",
    station:  {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Mensaje",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:56:00",
    endTime: "09:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:00:00",
    endTime: "09:30:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:30:00",
    endTime: "10:56:00",
    station:  {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Tus Mañanas",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "10:56:00",
    endTime: "11:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "11:00:00",
    endTime: "12:00:00",
    station:  {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Al Aire con Enoc Garcia",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "12:00:00",
    endTime: "13:00:00",
    station:  {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "D Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "13:00:00",
    endTime: "14:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Vida Noticias",
    days: [1, 2, 3, 4, 5],
  },

  {
    startTime: "14:00:00",
    endTime: "15:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:00:00",
    endTime: "15:56:00",
    station:  {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Retro",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:56:00",
    endTime: "16:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
    {
    startTime: "16:00:00",
    endTime: "17:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Undifined",
    days: [1, 2, 3, 4, 5],
  },

  {
    startTime: "17:00:00",
    endTime: "18:00:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Zona Libre",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "18:00:00",
    endTime: "20:00:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Encuentro Latinoamericano",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "20:00:00",
    endTime: "20:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Tu Historia Preferida",
    days: [1, 2, 3, 4, 5],
  },
   {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Programa Final",
    days: [1, 2, 3, 4, 5],
  },





  // Sábado🟢🟡🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
  
  
  {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Amanecer con Dios",
    days: [6],
  },
  {
    startTime: "07:00:00",
    endTime: "11:00:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "break",
    days: [6],
  },

  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio La Voz Celestial",
      url: "https://stream3.rcast.net/67255",
      logo: "/assets/RadioLaVozCelestial.png"
    },
    programName: "Indefinido",
    days: [6],
  },
  {
    startTime: "13:00:00",
    endTime: "15:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Undefined",
    days: [6],
  },
  {
    startTime: "15:00:00",
    endTime: "20:30:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "indefinido",
    days: [6],
  },
     {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [6],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Programa Final",
    days: [6],
  },





  // Domingo🟥⚪⚪🟥⚪🟥⚪⚪🟧🟥⚪⚪🟥🟥🟧🟥🟥⚪
   {
    startTime: "06:00:00",
    endTime: "07:00:00",
    station: {
      name: "Al Fin Radio ",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/e97vtkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJlOTd2dGtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInRtIjpmYWxzZSwicnR0bCI6NSwianRpIjoiZExza0NKQzhUakNoc2VYWDJtRy1xQSIsImlhdCI6MTc1Mzg5MjY3MCwiZXhwIjoxNzUzODkyNzMwfQ.GH1WXAOKnIqMSmBGAMp_xlLkaVLpgSHIPQQ3idEbe1Y",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undifined",
    days: [0],
  },
     {
    startTime: "07:00:00",
    endTime: "08:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "El Sembrador",
    days: [0],
  },
  {
    startTime: "08:00:00",
    endTime: "10:20:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°1",
    days: [0],
  },
  {
    startTime: "10:20:00",
    endTime: "11:00:00",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Break Music",
    days: [0],
  },
  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°2",
    days: [0],
  },
    {
    startTime: "13:00:00",
    endTime: "20:30:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undefined",
    days: [0],
  },
   {
    startTime: "20:30:00",
    endTime: "21:30:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "La Biblia en 365 Dias",
    days: [0],
  },
  {
    startTime: "21:30:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undefined",
    days: [0],
  }
];

// ======================================================
// 📦 ELEMENTOS DEL DOM
// ======================================================

// --- Header ---
const headerStatusIndicator = document.getElementById("Estado-de-Header-A6-I");
const headerStatusText = document.getElementById("Estado-de-Texto-en-Header-A7-I");

// --- Reproductor Principal ---
const radioPlayer = document.getElementById("Reproductor-D3Sub12-I");
const stationNameElement = document.getElementById("Nombre-de-la-Estacion-D3Sub2-I");
const stationLogo = document.getElementById("Logo-Img-I");
const programNameElement = document.getElementById("Nombre-Del-Programa-D3Sub3-I");
const connectionStatusElement = document.getElementById("Estado-De-Conexion-D3Sub4-I");
const playPauseButton = document.getElementById("Boton-Play-Pause-D3Sub5");
const playPauseIcon = document.getElementById("Icono-Play");

// --- Progreso y Siguiente Evento ---
const programProgressBar = document.getElementById("Barra-de-Progreso-del-Programa-D3Sub8-I");
const nextEventTitle = document.getElementById("Titulo-Siguiente-Evento-D3Sub10-I");
const nextEventDetails = document.getElementById("Detalles-Siguiente-Evento-D3Sub11-I");

// --- Menú de Programación del Día (Lateral Izquierdo y Móvil) ---
const scheduleListContainer = document.getElementById("Lista-de-Horarios-del-Dia-D2Sub4-I");
const dayMenuContainer = document.querySelector(".Contenedor-Lateral-Izquierdo-D2");
const dayMenuOverlay = document.getElementById("dayMenuOverlay-D5-I");
const dayMenuButton = document.getElementById("currentDayIndicator"); // Botón en barra móvil

// --- Menú de Estaciones (Móvil) ---
const stationsMenuButton = document.getElementById("menuButton");
const stationsMenuContainer = document.getElementById("menuEstacionesMovil");
const stationsMenuOverlay = document.getElementById("menuEstacionesOverlay");
const stationsMenuCloseButton = document.getElementById("menuEstacionesClose");
const stationsMenuList = document.getElementById("menuEstacionesContent");

// --- Lista de Estaciones (PC) ---
const pcStationsContainer = document.querySelector(".logos-estaciones");

// --- Pantalla de Carga ---
const preloader = document.getElementById("Precarga");
const preloaderButton = document.getElementById("Precarga-Boton-B3-I");


// ======================================================
// ⚙️ VARIABLES DE CONTROL
// ======================================================
let pausedManually = false; // Controla si la pausa fue iniciada manualmente por el usuario
let currentStation = null; // Guarda la estación que está sonando o debería sonar
let isUserInteraction = false; // Bandera para saber si el usuario ha interactuado

// ======================================================
// 🛠️ FUNCIONES AUXILIARES
// ======================================================

/**
 * Convierte una cadena de tiempo "HH:mm:ss" a segundos desde la medianoche.
 * @param {string} time - La cadena de tiempo.
 * @returns {number} - El número total de segundos.
 */
function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Actualiza los indicadores de estado de conexión en el header y en el reproductor.
 */
function updateConnectionStatus() {
  const isOnline = navigator.onLine;

  if (isOnline) {
    if (headerStatusIndicator) {
      headerStatusIndicator.classList.remove("disconnected");
      headerStatusIndicator.classList.add("connected");
    }
    if (headerStatusText) headerStatusText.textContent = "En línea";
  } else {
    if (headerStatusIndicator) {
      headerStatusIndicator.classList.remove("connected");
      headerStatusIndicator.classList.add("disconnected");
    }
    if (headerStatusText) headerStatusText.textContent = "Sin conexión";
    if (connectionStatusElement) connectionStatusElement.textContent = "Sin conexión";
  }
}

/**
 * Obtiene la estación programada para la hora y día actual.
 * @returns {object|undefined} - El objeto del programa actual o undefined si no hay ninguno.
 */
function getScheduledStation() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  return schedule.find((s) => {
    const startSeconds = timeToSeconds(s.startTime);
    const endSeconds = timeToSeconds(s.endTime);
    return currentSeconds >= startSeconds && currentSeconds < endSeconds && s.days.includes(currentDay);
  });
}

// ======================================================
// 🔄 ACTUALIZACIÓN DE LA INTERFAZ (UI)
// ======================================================

/**
 * Actualiza la información de la estación y el programa en la UI.
 * @param {object|null} station - La estación actual.
 * @param {string} program - El nombre del programa actual.
 */
function updateStationInfo(station, program) {
  if (station) {
    if (stationNameElement) stationNameElement.textContent = station.name;
    if (stationLogo) {
      stationLogo.src = station.logo;
      stationLogo.alt = `Logo de ${station.name}`;
    }
    if (programNameElement) programNameElement.textContent = program;
    currentStation = station;
  } else {
    if (stationNameElement) stationNameElement.textContent = "Radio Online";
    if (stationLogo) {
      stationLogo.src = "";
      stationLogo.alt = "Logo de la estación";
    }
    if (programNameElement) programNameElement.textContent = "Fuera del aire";
    currentStation = null;
  }
}

/**
 * Actualiza la barra de progreso del programa actual.
 * @param {object|null} scheduled - El objeto del programa actual.
 */
function updateProgramProgress(scheduled) {
  if (scheduled && programProgressBar) {
    const now = new Date();
    const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const startSeconds = timeToSeconds(scheduled.startTime);
    const endSeconds = timeToSeconds(scheduled.endTime);
    const duration = endSeconds - startSeconds;

    if (duration > 0) {
      const elapsed = currentSeconds - startSeconds;
      const progress = Math.min(100, (elapsed / duration) * 100);
      programProgressBar.style.width = `${progress}%`;
    } else {
      programProgressBar.style.width = '0%';
    }
  } else if (programProgressBar) {
    programProgressBar.style.width = '0%';
  }
}

/**
 * Actualiza la información del próximo evento en la UI.
 */
function updateNextEvent() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  let nextEvent = null;
  // Buscar en los próximos 7 días
  for (let i = 0; i < 7; i++) {
    const dayToCheck = (currentDay + i) % 7;
    const programsOnDay = schedule
      .filter(s => s.days.includes(dayToCheck))
      .sort((a, b) => timeToSeconds(a.startTime) - timeToSeconds(b.startTime));

    nextEvent = programsOnDay.find(s => {
      const startSeconds = timeToSeconds(s.startTime);
      // Si es hoy, buscar programas futuros. Si es otro día, el primero sirve.
      return i === 0 ? startSeconds > currentSeconds : true;
    });

    if (nextEvent) break;
  }

  if (nextEventDetails) {
    if (nextEvent) {
      nextEventDetails.textContent = `${nextEvent.programName} `;
    } else {
      nextEventDetails.textContent = "No hay más eventos programados.";
    }
  }
}

/**
 * Actualiza la API de Media Session para controles de medios nativos.
 * @param {object} station - La estación actual.
 * @param {string} programName - El nombre del programa.
 */
function updateMediaSession(station, programName) {
  if ('mediaSession' in navigator && station) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: programName || "Radio Online",
      artist: station.name,
      album: "En Vivo",
      artwork: [{ src: station.logo, sizes: '512x512', type: 'image/png' }]
    });

    navigator.mediaSession.setActionHandler('play', () => playPause(false));
    navigator.mediaSession.setActionHandler('pause', () => playPause(true));
  }
}

// ======================================================
// 🎵 LÓGICA DEL REPRODUCTOR
// ======================================================

/**
 * Reproduce una estación específica.
 * @param {object} station - La estación a reproducir.
 * @param {boolean} forcePlay - Indica si se debe forzar la reproducción.
 */
function playStation(station, forcePlay = false) {
  if (!radioPlayer || !station) return;

  if (pausedManually && !forcePlay) {
    console.log("Pausado manualmente, no se inicia la reproducción automática.");
    return;
  }

  if (!navigator.onLine) {
    updateConnectionStatus();
    return;
  }

  // Solo cambiar la fuente si es diferente
  if (radioPlayer.src !== station.url) {
    console.log("Cambiando URL a:", station.url);
    radioPlayer.src = station.url;
  }

  radioPlayer.play().catch(error => {
    console.error("Error al intentar reproducir:", error);
    // Si falla la reproducción (ej. por política de autoplay), esperar interacción del usuario.
    isUserInteraction = false;
  });
}

/**
 * Maneja la lógica de reproducir y pausar.
 * @param {boolean} forcePause - Si es true, siempre pausará.
 */
function playPause(forcePause = false) {
  if (!radioPlayer) return;
  isUserInteraction = true; // Cualquier clic en el botón cuenta como interacción

  const shouldPause = forcePause || !radioPlayer.paused;

  if (shouldPause) {
    radioPlayer.pause();
    pausedManually = true;
    console.log("Pausa manual activada.");
  } else {
    pausedManually = false;
    console.log("Reproducción iniciada por el usuario.");
    const scheduled = getScheduledStation();
    const stationToPlay = scheduled ? scheduled.station : currentStation || schedule[0]?.station;

    if (stationToPlay) {
      playStation(stationToPlay, true); // Forzar reproducción
    } else {
      console.warn("No hay estación para reproducir.");
    }
  }
}

// ======================================================
// 🔄 BUCLE PRINCIPAL Y VERIFICACIÓN DE HORARIO
// ======================================================

/**
 * Verifica el horario y actualiza el estado del reproductor y la UI.
 */
function checkSchedule() {
  const scheduled = getScheduledStation();
  updateConnectionStatus();

  if (scheduled) {
    // Si la estación programada es diferente a la actual, o si el reproductor no tiene fuente
    if (radioPlayer.src !== scheduled.station.url) {
      console.log(`Cambio de programa a: ${scheduled.programName}`);
      updateStationInfo(scheduled.station, scheduled.programName);
      updateMediaSession(scheduled.station, scheduled.programName);
      // Solo reproducir automáticamente si el usuario ya ha interactuado
      if (isUserInteraction) {
        playStation(scheduled.station);
      } else {
        // Si no, solo preparar la URL para cuando el usuario haga clic
        radioPlayer.src = scheduled.station.url;
      }
    }
    updateProgramProgress(scheduled);
  } else {
    // No hay nada programado
    updateStationInfo(null, "Fuera del aire");
    updateProgramProgress(null);
    if (!radioPlayer.paused) {
      radioPlayer.pause();
    }
  }

  updateNextEvent();
  updateScheduleList();
}

// ======================================================
// 📝 MANEJO DE MENÚS Y LISTAS
// ======================================================

/**
 * Carga la lista de estaciones únicas en los menús (móvil y PC).
 */
function loadStationLists() {
  const uniqueStations = new Map();
  schedule.forEach(item => {
    if (!uniqueStations.has(item.station.name)) {
      uniqueStations.set(item.station.name, item.station);
    }
  });

  if (stationsMenuList) stationsMenuList.innerHTML = '';
  if (pcStationsContainer) pcStationsContainer.innerHTML = '';

  uniqueStations.forEach(station => {
    // --- Menú móvil ---
    if (stationsMenuList) {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-estaciones-movil-item';
      menuItem.innerHTML = `
        <img src="${station.logo}" alt="Logo de ${station.name}">
        <div class="menu-estaciones-movil-item-info">
          <h4>${station.name}</h4>
          <p>Toca para visitar</p>
        </div>`;
      menuItem.onclick = () => {
        window.open(station.website, '_blank');
        toggleStationsMenu(false);
      };
      stationsMenuList.appendChild(menuItem);
    }

    // --- Vista de PC ---
    if (pcStationsContainer) {
      const pcItem = document.createElement('a');
      pcItem.href = station.website;
      pcItem.target = '_blank';
      pcItem.innerHTML = `<img src="${station.logo}" alt="${station.name}" title="${station.name}">`;
      pcStationsContainer.appendChild(pcItem);
    }
  });
}

/**
 * Actualiza la lista de programación del día.
 */
function updateScheduleList() {
  if (!scheduleListContainer) return;

  scheduleListContainer.innerHTML = '';
  const now = new Date();
  const currentDay = now.getDay();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  const todaySchedule = schedule
    .filter(s => s.days.includes(currentDay))
    .sort((a, b) => timeToSeconds(a.startTime) - timeToSeconds(b.startTime));

  if (todaySchedule.length === 0) {
    scheduleListContainer.innerHTML = '<div class="horario-item">No hay programas para hoy.</div>';
    return;
  }

  todaySchedule.forEach(program => {
    const startSeconds = timeToSeconds(program.startTime);
    const endSeconds = timeToSeconds(program.endTime);
    const isActive = currentSeconds >= startSeconds && currentSeconds < endSeconds;

    const item = document.createElement('div');
    item.className = `horario-item ${isActive ? 'activo' : ''}`;
    item.innerHTML = `
      <strong>${program.startTime.substring(0, 5)}</strong> - ${program.programName}
      <br>
      <small>${program.station.name}</small>`;
    scheduleListContainer.appendChild(item);
  });
}

/**
 * Muestra u oculta el menú de programación del día (móvil).
 * @param {boolean} show - True para mostrar, false para ocultar.
 */
function toggleDayMenu(show) {
  if (dayMenuContainer && dayMenuOverlay) {
    dayMenuContainer.classList.toggle('mobile-active', show);
    dayMenuOverlay.classList.toggle('active', show);
  }
}

/**
 * Muestra u oculta el menú de estaciones (móvil).
 * @param {boolean} show - True para mostrar, false para ocultar.
 */
function toggleStationsMenu(show) {
  if (stationsMenuContainer && stationsMenuOverlay && stationsMenuButton) {
    stationsMenuContainer.classList.toggle('active', show);
    stationsMenuOverlay.classList.toggle('active', show);
    stationsMenuButton.classList.toggle('active', show);
  }
}

// ======================================================
// 🚀 INICIALIZACIÓN Y EVENTOS
// ======================================================

function initializeApp() {
  console.log("Aplicación de radio inicializada y lista.");

  // --- Configurar Eventos del Reproductor ---
  if (playPauseButton) playPauseButton.addEventListener('click', () => playPause());

  if (radioPlayer) {
    radioPlayer.addEventListener('play', () => {
      if (playPauseIcon) playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      if (connectionStatusElement) connectionStatusElement.textContent = "Conectado";
    });
    radioPlayer.addEventListener('pause', () => {
      if (playPauseIcon) playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      if (connectionStatusElement) connectionStatusElement.textContent = "Pausado";
    });
    radioPlayer.addEventListener('waiting', () => {
      if (connectionStatusElement) connectionStatusElement.textContent = "Cargando...";
    });
    radioPlayer.addEventListener('error', () => {
      if (connectionStatusElement) connectionStatusElement.textContent = "Error de conexión";
      console.error("Error en el reproductor de audio.", radioPlayer.error);
    });
  }

  // --- Configurar Eventos de Menús Móviles ---
  if (dayMenuButton) dayMenuButton.addEventListener('click', () => toggleDayMenu(true));
  if (dayMenuOverlay) dayMenuOverlay.addEventListener('click', () => toggleDayMenu(false));

  if (stationsMenuButton) stationsMenuButton.addEventListener('click', () => toggleStationsMenu(true));
  if (stationsMenuOverlay) stationsMenuOverlay.addEventListener('click', () => toggleStationsMenu(false));
  if (stationsMenuCloseButton) stationsMenuCloseButton.addEventListener('click', () => toggleStationsMenu(false));

  // --- Cargar contenido dinámico ---
  loadStationLists();

  // --- Iniciar bucle principal y primera verificación ---
  checkSchedule();
  setInterval(checkSchedule, 1000); // Verificar cada segundo

  // --- Eventos de red y visibilidad ---
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      console.log("Página visible, forzando verificación.");
      checkSchedule();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa la UI y prepara todo, pero no reproduce audio.
  initializeApp();

  // El botón de la pantalla de carga se encargará de la primera reproducción.
  if (preloaderButton) {
    preloaderButton.addEventListener('click', () => {
      // Ocultar la pantalla de carga
      if (preloader) preloader.classList.add('hidden');
      
      // Forzar la reproducción. Esto cuenta como la primera interacción del usuario.
      // La función playPause se encargará de poner isUserInteraction en true.
      playPause();
    }, { once: true }); // El evento solo se dispara una vez
  } else {
    // Si no hay preloader, la app ya está inicializada pero esperará
    // un clic en el botón de play principal.
    if (preloader) preloader.classList.add('hidden');
  }
});
