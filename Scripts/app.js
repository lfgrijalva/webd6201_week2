// IIFE - Immediately Invoked Function Expression
// means -> anonymous self excecuting function
(function(){
    let h2 = document.createElement("H2");
    let Start = function () {
        console.log('%c App Started','color:blue; font-size: 20px');
        
        Main();

        let doc = document.getElementById("mainContent");

        // Create a new h2 tag with a class of Display-2 "My Text Content" as the text
        h2.setAttribute("class","Display-2");
        h2.textContent = "My Text Content";
        doc.appendChild(h2);
        
        h2.addEventListener("mouseover", MouseOver);
        h2.addEventListener("mouseout", MouseOut);

        let brand = document.getElementsByClassName("navbar-brand")[0];

        brand.textContent = "Client-Side Scripting";
    }

    let Main = function () {
        console.log('%c |','color:green; font-size: 16px');
        console.log('%c -->Main Functionality','color:green; font-size: 16px');
    }

    function MouseOut(){
        //MouseOut scope
        h2.style.color="black";
        h2.style.fontWeight = "normal";
        h2.textContent = "My Text Content";
    }

    function MouseOver() {
        //MouseOver scope
        h2.style.color="blue";
        h2.style.fontWeight = "bold";
        h2.textContent="MouseOver";
    }
    window.addEventListener("load",Start);
})();