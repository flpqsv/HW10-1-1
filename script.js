var header = document.getElementsByClassName("productHeader");

console.dir(header);
console.log(document.querySelector("productHeader"));

var button = document.getElementsByClassName("button");

console.dir(button);
console.log(document.querySelector('button'));
console.log(document.querySelector('button').offsetHeight, document.querySelector('button').offsetWidth);

var contacts = document.getElementsByClassName("contactForm");

console.dir(contacts);
console.log(document.querySelector("contactForm"));

var contactsButton = document.getElementById("contactsButton");

console.dir(contactsButton);
console.log(document.querySelector("contactsButton"));
function getCoords(contactsButton) {
    var box = contactsButton.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
console.log(getCoords(contactsButton));