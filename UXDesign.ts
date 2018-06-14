namespace UXDesign {

    window.addEventListener("load", init);

    /*let tropfen: HTMLElement = document.getElementById("regentropfen");
    let sonne: HTMLElement = document.getElementById("sonne");
    let regenbogen: HTMLElement = document.getElementById("regenbogen");*/

    //test2

    function init(): void {
      //window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keypress", handleKeyPress);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("keypress", doubleKeyPressRB);
        window.addEventListener("keyup", doubleKeyUpRB);
        window.addEventListener("keypress", doubleKeyPressGewitter);
        window.addEventListener("keyup", doubleKeyUpGewitter);     
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
            console.log("Pfeil nach oben wurde gedrückt");
        }
    }*/

    function handleKeyPress(_event: KeyboardEvent): void {

        if (_event.key == "a") {
            console.log("a wurde gedrückt");
                      
            document.getElementById("regentropfen+").classList.remove("hidden");
            document.getElementById("regentropfen+").classList.add("visible");
            document.getElementById("audio_regen").setAttribute("autoplay", "true"); 
            
            /*let audioNumber: number = 0;
            if (audioNumber == 0) {
                let audio: HTMLElement = document.createElement("audio");
                audio.setAttribute("id", "audio_regen");
                audio.setAttribute("src", "sound/regen.mp3");
                audio.setAttribute("type", "audio/mp3");
                audio.setAttribute("autoplay", "true");
                document.getElementById("regentropfen+").appendChild(audio);
                audioNumber++;
            }*/
        }

        else if (_event.key == "d") {
            console.log("d wurde gedrückt");         

            document.getElementById("regentropfen-").classList.remove("hidden");
            document.getElementById("regentropfen-").classList.add("visible");
        }

        else if (_event.key == "s") {
            console.log("s wurde gedrückt");         

            document.getElementById("sonne").classList.remove("hidden");
            document.getElementById("sonne").classList.add("visible");
        }

        else if (_event.key == "w") {
            console.log("w wurde gedrückt");

            document.getElementById("wind").classList.remove("hidden");
            document.getElementById("wind").classList.add("visible");
        }
    }


    function handleKeyUp(_event: KeyboardEvent): void {
        console.log("Taste geht hoch!");

        if (_event.key == "a") {
            document.getElementById("regentropfen+").classList.remove("visible");
            document.getElementById("regentropfen+").classList.add("hidden"); 
            document.getElementById("audio_regen").removeAttribute("autoplay");        
        }

        else if (_event.key == "d") {
            console.log("d wurde gedrückt");         

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
            console.log("Regenbogen wurde gedrückt");

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
            console.log("Regenbogen wurde gedrückt");

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
            console.log("Gewitter wurde gedrückt");

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
            console.log("gewitter wurde gedrückt");

            gewitter.classList.remove("visible");
            gewitter.classList.add("hidden"); 
           
            window.addEventListener("keypress", handleKeyPress);
        }
    }   
}
