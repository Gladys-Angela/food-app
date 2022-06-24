const likarAPI =("https://api.openbrewerydb.org/breweries")
const likarMenu = document.getElementById("likarMenu");

fetch(likarAPI)
.then((res) => res.json())
.then(displaylikarNames)
.catch(console.err);
