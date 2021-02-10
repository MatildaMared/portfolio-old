let checkbox = document.querySelector("#navigation__toggle");
let hamburger = document.querySelector("#navigation__label");

checkbox.addEventListener( "click", function(){
    if (this.checked) {
        document.addEventListener("click", listener);
    }
});

let listener = function(e) {
    if (e.target != checkbox && e.target != hamburger) {
        checkbox.checked = false;
        document.removeEventListener("click", listener);
    }
};