console.log(document.querySelector("title").text);

let world = document.querySelectorAll("a[title$='world']");
world.forEach(function (elem) { console.log(elem.title); });