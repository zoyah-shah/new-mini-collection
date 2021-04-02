
// console.log("Hello, is this working);

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyUKsTPPNZc3s7p2" }).base(
  "appUZOpUWfI75S3i6"
);

//get the "songs" table from the base, select ALL the records, and specify the functions that will receive the data
base("songs").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our book data
const songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our songs array
    songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the songs
  consoleLogSongs();
  showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }
  
  // loop through the books, create an h2 for each one, and add it to the page
  function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {

        var songContainer = document.createElement("div");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);
      

        // add song titles to out song container
        var songName = document.createElement("h1");
        songName.classList.add("song-name");
        songName.innerText = song.fields.song_name;
        songContainer.append(songName);

        // add artists to our song container
        var songArtist = document.createElement("h1");
        songArtist.classList.add("song-artist");
        songArtist.innerText = song.fields.artist_name;
        songContainer.append(songArtist);

        // add description to our song container
        var songDescription = document.createElement("p");
        songDescription.classList.add("song-description");
        songDescription.innerText = song.fields.description;
        songContainer.append(songDescription);

        // add image to cong container
        var songImage = document.createElement("img");
        songImage.classList.add("song-image");
        songImage.src = song.fields.song_image[0].url;
        songContainer.append(songImage);


        // get genre field from airtable
        // loop through the array and add each genre
        // as a class to the song container

        var songGenre = song.fields.genre;
        songGenre.forEach(function(genre) {
        songContainer.classList.add(genre);
    });


        // add event listener to filter
        // to add an active class to our song
        var filterEdm = document.querySelector('.edm');
        filterEdm.addEventListener("click", function(){

        if (songContainer.classList.contains("edm")){    
            songContainer.style.background = "red";
        } else {
            songContiner.style.background("white");
        }
        })

        var filterDubstep = document.querySelector(".dubstep");
        filterDubstep.addEventListener("click", function(){
            if (songContainer.classList.contains("dubstep")){    
                songContainer.style.background = "blue";
            } else {
                songContiner.style.background("white");
            }
        })

        var filterTropicalhouse = document.querySelector(".tropicalhouse");
        filterTropicalhouse.addEventListener("click", function(){
            if (songContainer.classList.contains("tropicalhouse")){    
                songContainer.style.background = "green";
            } else {
                songContiner.style.background("white");
            }
        })

        var filterElectroHouse = document.querySelector(".electrohouse");
        filterElectroHouse.addEventListener("click", function(){
            if (songContainer.classList.contains("electrohouse")){    
                songContainer.style.background = "purple";
            } else {
                songContainer.style.background("white");
            }
        })

        var filterElectroPop = document.querySelector(".electropop");
        filterElectroPop.addEventListener("click", function(){
            if (songContainer.classList.contains("electropop")){    
                songContainer.style.background = "orange";
            } else {
                songContiner.style.background("white");
            }
        })

        var filterElectroTrap = document.querySelector(".electrotrap");
        filterElectroTrap.addEventListener("click", function(){
            if (songContainer.classList.contains("electrotrap")){    
                songContainer.style.background = "yellow";
            } else {
                songContiner.style.background("white");
            }
        })

        var filterReset = document.querySelector(".js-reset");
        filterReset.addEventListener("click", function(){
            songContainer.style.background = "white";
            
        })









        
        // add event listener
        // when user clicks on song container
        // image and description appear or disappear
        songContainer.addEventListener("click", function(){
            songDescription.classList.toggle("active");
            songImage.classList.toggle("active");

        })



    });
  }
