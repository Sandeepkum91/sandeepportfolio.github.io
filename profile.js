 
       var options = {
            strings: ["Sandeep kumar","a Frontend developer", "a Web designer", " a Content creator", " Explorer"],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 2000,
            loop: true
        };

        var typed = new Typed(".typ-ed", options);


        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
         });