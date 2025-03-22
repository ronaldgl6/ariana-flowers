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
  { text: "♭  ♩  ♫  ♭", time: 44 },
  { text: "♫ Y LA LUZ ENCUENTRO AL FIIIINNN ♫", time: 48 },
  { text: "♫  ♪", time: 53 },
  { text: "♫  ♪", time: 60 },
  { text: "Espera un momento...", time: 65 },
  { text: "Voy a contarte un secreto C:", time: 79 },
  { text: "...", time: 84 },
  { text: "Esta canción es nuestra canción ", time: 87 },
  { text: "Cada vez que la escucho", time: 91 },
  { text: "Pienso en nosotros <3", time: 95 },
  { text: "<3 <3 <3", time: 98 },
  { text: "Hay dias que recuerdo..", time: 100 },
  { text: "Tiempos atrás, cuando no, hablábamos..", time: 103 },
  { text: "Pensaba si algún dia iba a encontrar", time: 107 },
  { text: "A esa personita especial en mi vida..", time: 111 },
  { text: "Tiempo aquel persiguiendo un sueño", time: 115 },
  { text: "Tiempo fue en la oscuridad...", time: 120 },
  { text: "Tiempo que, no habia visto como...", time: 125 },
  { text: "es la realidad", time: 129 },
  { text: "Tú siempre luces como estrella", time: 133 },
  { text: "Contigo aquí, todo es claridad", time: 139 },
  { text: "Si conmigo estoy, es fácil ver", time: 143 },
  { text: "Que contigo quiero estar...", time: 148 },
  { text: "♫  ♪", time: 153 },
  { text: "se aclaró aquella niebla", time: 157 },
  { text: "♭  ♩  ♫  ♭", time: 161 },
  { text: "Ahora el cielo es azul", time: 166 },
  { text: "Es real brillando así..", time: 170 },
  { text: "Ya cambió la vida entera", time: 175 },
  { text: "♭  ♩  ♫  ♭", time: 182 },
  { text: "Esta vez todo es diferente...", time: 183 },
  { text: "♭  ♩ VEO EN TI LA LUZ ♫  ♭", time: 188 },
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
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var fadeOutDuration = 0.5; // Duración del efecto de desaparición en segundos
    var timeSinceStart = time - currentLine.time;
    var timeUntilEnd = currentLine.time + 6 - time;

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
