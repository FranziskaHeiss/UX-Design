let imgs;
let sounds;

let rain;

// KeyCodes
const w = 87;
const a = 65;
const s = 83;
const d = 68;

function setup() {
  // Alle Bilder in Array speichern
  imgs = document.getElementsByTagName("img");

  // Sounds in entsprechende Variablen speichern
  sounds = document.getElementsByTagName("audio");
}

function draw() {
  let img = -1;
  let sound = -1;

  // "Zeichenfläche" leer räumen
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  for (let i = 0; i < sounds.length; i++) {
    sounds[i].pause();
  }

  // Tastendrücke auswerten
  if ((keyIsDown(a) || keyIsDown(d)) && keyIsDown(s)) {
    // Regenbogen
    img = 4;

  } else if (keyIsDown(w) && keyIsDown(s)) {
    // Sonne & Wind
    img = 6;
    sound = 3; 
     

  } else if (keyIsDown(a) && keyIsDown(d)) {
    // Gewitter
    img = 5;
    sound = 1;

  } else if (keyIsDown(w)) {
    // Wind
    img = 3;
    sound = 2;

  } else if (keyIsDown(a)) {
    // Regen +
    img = 0;
    sound = 0;

  } else if (keyIsDown(s)) {
    // Sonne
    img = 2;
    sound = 3;

  } else if (keyIsDown(d)) {
    // Regen -
    img = 1;
    sound = 0;
  }

  // Ensprechendes Bild anzeigen
  showImg(img);
  playSound(sound)
}

function showImg(_arrayIndex) {
  if (_arrayIndex >= 0) {
    imgs[_arrayIndex].style.display = "block";
  }
}

function playSound(_sound) {
  if (_sound >= 0) {
    sounds[_sound].play();
  }
}