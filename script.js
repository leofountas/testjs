let title = "This is a real song"
const myName = "Leo";
const nana = " la banana";

console.log(title);

for(i = 0; i < 10; i++) {
    console.log(myName + nana);
}
// ----------------------------------------------------------------------------------------------------------

let libraryBooks = 500;
libraryBooks += 50;
trashBooks = libraryBooks - 10;
libraryBooks = trashBooks - 5;

let totalBooks = `Our library has ${libraryBooks} books`;

console.log(totalBooks)

// ------------------------------------------------------------------------------------------------------------------

let cinemaTicket = {
    film: "Batman",
    price: "free...is Bruce that pays",
    theaterNumber: "77",
    clientName: "Leo",
}

let welcomeTxt = "Goodmorning " + cinemaTicket.clientName + " the film " + cinemaTicket.film + " will be played in the theater number " + cinemaTicket.theaterNumber + "." ;

console.log(welcomeTxt);
// ----------------------------------------------------------------------------------------------------------------------------------

const cds = ["Meteora","Mercury-Act1","Spirits"];

let totatlAlbums = cds.length;

cds.push("The Eminem Show","Bleach");

cds.pop();

console.log(cds);
// ---------------------------------------------------------------------------------------------------------------------------------------------------

