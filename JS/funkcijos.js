let pElement = document.getElementById("name");
pElement.innerHTML = "<p>Donatas Kubilius</p>";



let mElement = document.getElementById("music");
mElement.innerHTML = "<p>AC/DC</p><p>Metallica</p><p>Iron Maiden</p><p>Pink Floyd</p><p>Foo Fighters</p>";



let m2Element = document.getElementById("music2");
let allBands = ""
let bands = ["<p>AC/DC</p>" + "<p>Metallica</p>" + "<p>Iron Maiden</p>" + "<p>Pink Floyd</p>" + "<p>Foo Fightrers</p>"]
for (let i = 0; i < bands.length; i++) {
    allBands += bands[i];

}
m2Element.innerHTML = allBands