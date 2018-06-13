namespace UXDesign {

    window.addEventListener("load", init);

    /*let tropfen: HTMLElement = document.getElementById("regentropfen");
    let sonne: HTMLElement = document.getElementById("sonne");
    let regenbogen: HTMLElement = document.getElementById("regenbogen");*/

    //test2

    function init(): void {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keypress", handleKeyPress);
        window.addEventListener("keypress", doubleKeyPress);
        window.addEventListener("keyup", doubleKeyUp);
        window.addEventListener("keyup", handleKeyUp);
    }

    function handleKeyDown(_event: KeyboardEvent): void {

        /*console.group("EventInfo");
        let info: string = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        console.groupEnd();

        if (_event.key == "ArrowUp") {
            console.log("Pfeil nach oben wurde gedrückt");
        }*/
    }

    function handleKeyPress(_event: KeyboardEvent): void {
    
        if (_event.key == "a") {
            console.log("a wurde gedrückt");
                      
            document.getElementById("regentropfen").classList.remove("hidden");
            document.getElementById("regentropfen").classList.add("visible");
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

    function doubleKeyPress(_event: KeyboardEvent): void {

        let tropfen: HTMLElement = document.getElementById("regentropfen");
        let sonne: HTMLElement = document.getElementById("sonne");
        let regenbogen: HTMLElement = document.getElementById("regenbogen");
        let imgSonne: HTMLImageElement = document.getElementById("sonne").getElementsByTagName("img")[0];
        let imgTropfen: HTMLImageElement = document.getElementById("regentropfen").getElementsByTagName("img")[0];

        if (tropfen.classList.contains("visible") && sonne.classList.contains("visible")) {
            console.log("Regenbogen wurde gedrückt");

            let s: CSSStyleDeclaration = imgSonne.style;
            s.display = "inline";
            s.width = "670";
            s.height = "470";

            let t: CSSStyleDeclaration = imgTropfen.style;
            t.display = "inline";
            t.width = "670";
            t.height = "470";

            window.removeEventListener("keypress", handleKeyPress);

            regenbogen.classList.remove("hidden");
            regenbogen.classList.add("visible");

            tropfen.classList.remove("visible");
            tropfen.classList.add("hidden");

            sonne.classList.remove("visible");
            sonne.classList.add("hidden");
        }
    }

    function doubleKeyUp(_event: KeyboardEvent): void {

        let regenbogen: HTMLElement = document.getElementById("regenbogen");
        
        let imgSonne: HTMLImageElement = document.getElementById("sonne").getElementsByTagName("img")[0];
        let imgTropfen: HTMLImageElement = document.getElementById("regentropfen").getElementsByTagName("img")[0];
       

        if (regenbogen.classList.contains("visible")) {
            console.log("Regenbogen wurde gedrückt");

            regenbogen.classList.remove("visible");
            regenbogen.classList.add("hidden");
            
            let s: CSSStyleDeclaration = imgSonne.style;
            s.display = "block";
            s.width = "1000";
            s.height = "700";
            
            let t: CSSStyleDeclaration = imgTropfen.style;
            t.display = "block";
            t.width = "1000";
            t.height = "700";

            window.addEventListener("keypress", handleKeyPress);
        }
    }

    function handleKeyUp(_event: KeyboardEvent): void {
        console.log("Taste geht hoch!");

        if (_event.key == "a") {
            document.getElementById("regentropfen").classList.remove("visible");
            document.getElementById("regentropfen").classList.add("hidden");
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
}
