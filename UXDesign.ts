namespace UXDesign {

  const audioctx: AudioContext = new AudioContext;
  const gainNodes: GainNode[] = [
    audioctx.createGain(), //    Gain für Sound 1
    // audioctx.createGain(), // Gain für Sound 2
    // audioctx.createGain(), // ...
    // audioctx.createGain()  // Gain für Sound 100001
  ];
  let sources: MediaElementAudioSourceNode[];
  let mute: Element = document.querySelector(".mute");

  window.addEventListener("load", init);

  function init(): void {
    //window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keypress", doubleKeyPressRB);
    window.addEventListener("keyup", doubleKeyUpRB);
    window.addEventListener("keypress", doubleKeyPressGewitter);
    window.addEventListener("keyup", doubleKeyUpGewitter);
    window.addEventListener("keypress", doubleKeyPressSonnenwind);
    window.addEventListener("keyup", doubleKeyUpSonnenwind);

    sources = [
      audioctx.createMediaElementSource(document.getElementsByTagName("audio")[0]), //    Sound 1
      // audioctx.createMediaElementSource(document.getElementsByTagName("audio")[1]), // Sound 2
      // audioctx.createMediaElementSource(document.getElementsByTagName("audio")[2]), // ...
      // audioctx.createMediaElementSource(document.getElementsByTagName("audio")[3])  // Sound 100001
    ];

    audio();
  }

  // Web Audio API
  function audio(): void {
    for (let _source in sources) {
      let source = sources[_source];
      let gainNode = gainNodes[_source];

      // Soundquelle mit Gain "verkabeln"
      source.connect(gainNode);

      // Gain auf 0 setzen
      gainNode.gain.value = 0;

      // Gain mit Lautsprecher "verkabeln"
      gainNode.connect(audioctx.destination);


    }
  }

  /*function handleKeyDown(_event: KeyboardEvent): void {

      console.group("EventInfo");
      let info: string = "Type: " + _event.type;
      info += " | target: " + _event.target;
      info += " | currentTarget: " + _event.currentTarget;
      info += " | phase: " + _event.eventPhase;
      console.log(info);
      console.log(_event);
      console.groupEnd();

      if (_event.key == "ArrowUp") {
          console.log("Pfeil nach oben wurde gedr�ckt");
      }
  }*/

  function handleKeyPress(_event: KeyboardEvent): void {

    if (_event.key == "a") {
      console.log("a wurde gedr�ckt");

      document.getElementById("regentropfen+").classList.remove("hidden");
      document.getElementById("regentropfen+").classList.add("visible");

      gainNodes[0].gain.value = 1; // => Entsprechender Gain für Regensound wird von 0% auf 100% (=1) gesetzt.
      console.log("Gain: " + gainNodes[0].gain.value);
    }

    else if (_event.key == "d") {
      console.log("d wurde gedr�ckt");

      document.getElementById("regentropfen-").classList.remove("hidden");
      document.getElementById("regentropfen-").classList.add("visible");
    }

    else if (_event.key == "s") {
      console.log("s wurde gedr�ckt");

      document.getElementById("sonne").classList.remove("hidden");
      document.getElementById("sonne").classList.add("visible");
    }

    else if (_event.key == "w") {
      console.log("w wurde gedr�ckt");

      document.getElementById("wind").classList.remove("hidden");
      document.getElementById("wind").classList.add("visible");
    }
  }


  function handleKeyUp(_event: KeyboardEvent): void {
    console.log("Taste geht hoch!");

    if (_event.key == "a") {
      document.getElementById("regentropfen+").classList.remove("visible");
      document.getElementById("regentropfen+").classList.add("hidden");

      gainNodes[0].gain.value = 0; // => Entsprechender Gain für Regensound wird wieder von 100% auf 0% gesetzt.
      console.log("Gain: " + gainNodes[0].gain.value);
    }

    else if (_event.key == "d") {
      console.log("d wurde gedr�ckt");

      document.getElementById("regentropfen-").classList.remove("visible");
      document.getElementById("regentropfen-").classList.add("hidden");
    }

    else if (_event.key == "s") {
      document.getElementById("sonne").classList.remove("visible");
      document.getElementById("sonne").classList.add("hidden");
    }

    else if (_event.key == "w") {
      document.getElementById("wind").classList.remove("visible");
      document.getElementById("wind").classList.add("hidden");
    }
  }


  function doubleKeyPressRB(_event: KeyboardEvent): void {

    let tropfenPositiv: HTMLElement = document.getElementById("regentropfen+");
    let tropfenNegativ: HTMLElement = document.getElementById("regentropfen-");
    let sonne: HTMLElement = document.getElementById("sonne");
    let regenbogen: HTMLElement = document.getElementById("regenbogen");
    /*let imgSonne: HTMLImageElement = document.getElementById("sonne").getElementsByTagName("img")[0];
    let imgTropfen: HTMLImageElement = document.getElementById("regentropfen+").getElementsByTagName("img")[0];
    let imgTropfen2: HTMLImageElement = document.getElementById("regentropfen-").getElementsByTagName("img")[0];*/

    if ((tropfenPositiv.classList.contains("visible") || tropfenNegativ.classList.contains("visible")) && sonne.classList.contains("visible")) {
      console.log("Regenbogen wurde gedr�ckt");

      /*let s: CSSStyleDeclaration = imgSonne.style;
      s.display = "inline";
      s.width = "670";
      s.height = "470";

      let t: CSSStyleDeclaration = imgTropfen.style;
      t.display = "inline";
      t.width = "670";
      t.height = "470";*/

      window.removeEventListener("keypress", handleKeyPress);

      regenbogen.classList.remove("hidden");
      regenbogen.classList.add("visible");

      tropfenPositiv.classList.remove("visible");
      tropfenPositiv.classList.add("hidden");

      tropfenNegativ.classList.remove("visible");
      tropfenNegativ.classList.add("hidden");

      sonne.classList.remove("visible");
      sonne.classList.add("hidden");
    }
  }

  function doubleKeyUpRB(_event: KeyboardEvent): void {

    let regenbogen: HTMLElement = document.getElementById("regenbogen");

    //let imgSonne: HTMLImageElement = document.getElementById("sonne").getElementsByTagName("img")[0];
    //let imgTropfen: HTMLImageElement = document.getElementById("regentropfen").getElementsByTagName("img")[0];


    if (regenbogen.classList.contains("visible")) {
      console.log("Regenbogen wurde gedr�ckt");

      regenbogen.classList.remove("visible");
      regenbogen.classList.add("hidden");

      /*let s: CSSStyleDeclaration = imgSonne.style;
      s.display = "block";
      s.width = "1000";
      s.height = "700";

      let t: CSSStyleDeclaration = imgTropfen.style;
      t.display = "block";
      t.width = "1000";
      t.height = "700";*/

      window.addEventListener("keypress", handleKeyPress);
    }
  }


  function doubleKeyPressGewitter(_event: KeyboardEvent): void {

    let tropfenPositiv: HTMLElement = document.getElementById("regentropfen+");
    let tropfenNegativ: HTMLElement = document.getElementById("regentropfen-");
    let gewitter: HTMLElement = document.getElementById("gewitter");

    if (tropfenPositiv.classList.contains("visible") && tropfenNegativ.classList.contains("visible")) {
      console.log("Gewitter wurde gedr�ckt");

      window.removeEventListener("keypress", handleKeyPress);

      gewitter.classList.remove("hidden");
      gewitter.classList.add("visible");

      tropfenPositiv.classList.remove("visible");
      tropfenPositiv.classList.add("hidden");

      tropfenNegativ.classList.remove("visible");
      tropfenNegativ.classList.add("hidden");
    }
  }

  function doubleKeyUpGewitter(_event: KeyboardEvent): void {

    let gewitter: HTMLElement = document.getElementById("gewitter");

    if (gewitter.classList.contains("visible")) {
      console.log("gewitter wurde gedr�ckt");

      gewitter.classList.remove("visible");
      gewitter.classList.add("hidden");

      window.addEventListener("keypress", handleKeyPress);
    }
  }

  function doubleKeyPressSonnenwind(_event: KeyboardEvent): void {

    let wind: HTMLElement = document.getElementById("wind");
    let sonne: HTMLElement = document.getElementById("sonne");
    let sonnenwind: HTMLElement = document.getElementById("sonnenwind");
    /*let imgSonne: HTMLImageElement = document.getElementById("sonne").getElementsByTagName("img")[0];
    let imgTropfen: HTMLImageElement = document.getElementById("regentropfen+").getElementsByTagName("img")[0];
    let imgTropfen2: HTMLImageElement = document.getElementById("regentropfen-").getElementsByTagName("img")[0];*/

    if (wind.classList.contains("visible") && sonne.classList.contains("visible")) {
      console.log("Sonnenwind wurde gedr�ckt");

      window.removeEventListener("keypress", handleKeyPress);

      sonnenwind.classList.remove("hidden");
      sonnenwind.classList.add("visible");

      sonne.classList.remove("visible");
      sonne.classList.add("hidden");

      wind.classList.remove("visible");
      wind.classList.add("hidden");

    }
  }

  function doubleKeyUpSonnenwind(_event: KeyboardEvent): void {

    let sonnenwind: HTMLElement = document.getElementById("sonnenwind");

    if (sonnenwind.classList.contains("visible")) {
      console.log("gewitter wurde gedr�ckt");

      sonnenwind.classList.remove("visible");
      sonnenwind.classList.add("hidden");

      window.addEventListener("keypress", handleKeyPress);
    }
  }
}
