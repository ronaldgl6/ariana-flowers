// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola mi amor", time: 8 },
  { text: "Estaba sentado en mi computadora y...", time: 12 },
  { text: "me encontré estas flores ...", time: 17 },
  { text: "Están bien bonitas...", time: 21 },
  { text: "Y como tú eres la persona más hermosa...", time: 25 },
  { text: "Entonces tienes que tenerlas tú...", time: 30 },
  { text: "C:", time: 33 },
  { text: "♫  ♪  ♫  ♪", time: 36 },
  { text: "Que bonita canción ...", time: 40 },
  { text: "♫ Y LA LUZ ENCUENTRO AL FIIIINNN ♫", time: 44 },
  { text: "♫  ♪", time: 60 },
  { text: "Espera un momento...", time: 65 },
  { text: "Voy a contarte un secreto C:", time: 69 },
  { text: "...", time: 73 },
  { text: "Te acuerdas que me preguntastes sobre las músicas", time: 77 },
  { text: "Las cuales me recuerdan a ti", time: 81 },
  { text: "Esta canción es una de esas", time: 85 },
  { text: "Cada vez que la escucho", time: 89 },
  { text: "Pienso en nosotros <3", time: 93 },
  { text: "<3 <3 <3", time: 97 },
  { text: "Hay dias que recuerdo..", time: 100 },
  { text: "Tiempos atrás, cuando no, hablábamos pensaba en..", time: 103 },
  { text: "si algún dia iba a encontrar, a alguien como tú", time: 107 },
  { text: "Tiempo aquel persiguiendo un sueño", time: 110 },
  { text: "Tiempo fue en la oscuridad...", time: 117 },
  { text: "Tiempo que, no habia visto como...", time: 122 },
  { text: "es la realidad", time: 126 },
  { text: "Tú siempre luces como estrella", time: 130 },
  { text: "Contigo aquí, todo es claridad", time: 136 },
  { text: "Si conmigo estas, es fácil ver", time: 140 },
  { text: "Que contigo quiero estar...", time: 145 },
  { text: "♫  ♪", time: 150 },
  { text: "se aclaró aquella niebla", time: 154 },
  { text: "♭  ♩  ♫  ♭", time: 158 },
  { text: "Ahora el cielo es azul", time: 163 },
  { text: "Es real brillando así..", time: 167 },
  { text: "Ya cambió la vida entera", time: 172 },
  { text: "♭  ♩  ♫  ♭", time: 179 },
  { text: "Esta vez todo es diferente...", time: 180 },
  { text: "♭  ♩ VEO EN TI LA LUZ ♫  ♭", time: 185 },
  { text: "Te Quiero.", time: 208 },
];

// Animar las letras
/*function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}*/
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var fadeOutDuration = 0.5; // Duración del efecto de desaparición en segundos
    var timeSinceStart = time - currentLine.time;
    var timeUntilEnd = currentLine.time + 7 - time;

    var opacity;
    if (timeSinceStart < fadeInDuration) {
      // Efecto de aparición
      opacity = timeSinceStart / fadeInDuration;
    } else if (timeUntilEnd < fadeOutDuration) {
      // Efecto de desaparición
      opacity = timeUntilEnd / fadeOutDuration;
    } else {
      // Opacidad completa
      opacity = 1;
    }

    // Aplica el efecto de aparición/desaparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
