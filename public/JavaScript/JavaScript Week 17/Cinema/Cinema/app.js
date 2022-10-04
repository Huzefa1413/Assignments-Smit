var myData = JSON.parse(window.localStorage.getItem("Movies Array"))
var data = JSON.parse(window.localStorage.getItem("Users Array"));
var login = JSON.parse(window.localStorage.getItem("Login Email"));
var loginUser;
for (let key in data) {
    if (data[key].email === login) {
        loginUser = key;
        break;
    }
}
function Movie(movie_name, movie_genre, movie_duration, movie_rating, movie_language, movie_cast, movie_director, movie_synopsis, movie_banner_src, movie_poster_src) {
    this.movie_name = movie_name;
    this.movie_genre = movie_genre;
    this.movie_rating = movie_rating;
    this.movie_duration = movie_duration;
    this.movie_language = movie_language;
    this.movie_cast = movie_cast;
    this.movie_director = movie_director;
    this.movie_synopsis = movie_synopsis;
    this.movie_banner_src = movie_banner_src;
    this.movie_poster_src = movie_poster_src;
    this.movie_seats = [];
    for (let i = 0; i < 50; i++) {
        this.movie_seats[i] = false;
    }
}
if (myData === null) {
    var moviesList = [];
    const myMovie1 = new Movie("London Nahi Jaunga (2D)", "Drama", "02 hr 37 min", "U", "Urdu", "Humayun Saeed, Mehwish Hayat, Kubra Khan", "Nadeem Baig", "Sara seems to have always had a full life on the surface but she has always felt there is something out there that's missing, till she stumbles upon her mothers Diary.", "./assets/LondonNahiJaunga_banner.jpg", "./assets/LondonNahiJaunga.jpg")
    moviesList.push(myMovie1);
    const myMovie2 = new Movie("Quaid-e-Azam Zindabad (2D)", "Action", "02 hr 22 min", "U", "Urdu", "Fahad Mustafa, Mahira Khan, Asad Ali Palijo", "Nabeel Qureshi", "Quaid-e-Azam Zindabad is a slogan near and dear to many Pakistanis. Nowadays, corruption sweeps across the nation that was once built upon on the basis of being pure and clean. Several institutions are infiltrated through bribery.", "./assets/QuaideazamZindabad_banner.jpg", "./assets/QuaideazamZindabad.jpg")
    moviesList.push(myMovie2);
    const myMovie3 = new Movie("Maa Da Ladla (2D)", "Comedy", "02 hr 20 min", "U", "Punjabi", "Iftikhar Thakur, Neeru Bajwa, Tarsem Jassar", "Deep Jagdeep Jaedy", "The story revolves around Gora, Sehaj and Kevin. Gora is a struggling actor while Sehaj is a single mother who lives with her son Kevin. Sehaj hires Gora to play Kevin`s father. Will everything go according to plan?", "./assets/MaaDaLadla_banner.jpg", "./assets/MaaDaLadla.jpg")
    moviesList.push(myMovie3);
    const myMovie4 = new Movie("Honest Thief (2D)", "Action", "01 hr 39 min", "U", "English", "Jai Courtney, Liam Neeson, Kate Walsh", "Mark Williams", "Wanting to lead an honest life, a notorious bank robber turns himself in, only to be double-crossed by two ruthless FBI agents.", "./assets/HonestThief_banner.jpg", "./assets/HonestThief.jpg")
    moviesList.push(myMovie4);
    const myMovie5 = new Movie("Thor: Love and Thunder (3D)", "Action", "01 hr 59 min", "U", "English", "Chris Hemsworth, Christian Bale, Karen Gillan", "Taika Waititi", "Thor reunites with Valkyrie, Korg and his ex-girlfriend Jane Foster to fight the threat of Gorr, The God Butcher.", "./assets/ThorLoveAndThunder_banner.jpg", "./assets/ThorLoveAndThunder.jpg")
    moviesList.push(myMovie5);
    const myMovie6 = new Movie("Avatar Re-Release (3D)", "Action", "02 hr 48 min", "NYC", "English", "Sam Worthington, Sigourney Weaver, Zoe Saldana", "James Cameron", "A Paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", "./assets/AvatarRerelease_banner.jpg", "./assets/AvatarRerelease.jpg")
    moviesList.push(myMovie6);

    window.localStorage.setItem("Movies Array", JSON.stringify(moviesList));
}
else {
    var moviesList = JSON.parse(window.localStorage.getItem("Movies Array"));
}
if (data[loginUser].ticket.length === 0) {
    for (let m in moviesList) {
        let ticket =
        {
            movie: moviesList[m].movie_name,
            ticket: 0
        }
        data[loginUser].ticket.push(ticket);
        let seat =
        {
            movie: moviesList[m].movie_name,
            seats: []
        }
        data[loginUser].seats.push(seat);

        window.localStorage.setItem("Users Array", JSON.stringify(data));
    }
}

document.getElementById("welcomeusername").innerText = "Welcome " + data[loginUser].username;

var slideshow = document.getElementById("slideshow");
var movies = document.getElementById("movies");
var movieinfo = document.getElementById("movieinfo");
var cinema = document.getElementById("cinema");
var ticket = document.getElementById("ticket");
var navmovies = document.getElementById("navmovies");

for (var k in moviesList) {
    let div = document.createElement("div");
    navmovies.appendChild(div);
    let span1 = document.createElement("span");
    span1.setAttribute("class", "column1");
    span1.innerText = data[loginUser].ticket[k].movie;
    let span2 = document.createElement("span");
    span2.setAttribute("class", "column2");
    span2.setAttribute("id", "bookedTickets" + k);
    span2.innerText = data[loginUser].ticket[k].ticket;
    div.appendChild(span1);
    div.appendChild(span2);
}

for (let i = 0; i < moviesList.length; i++) {
    let divbanner = document.createElement("div");
    divbanner.setAttribute("id", "cmovie" + (i + 1));
    slideshow.appendChild(divbanner);
    let imgbanner = document.createElement("img");
    imgbanner.setAttribute("src", moviesList[i].movie_banner_src);
    divbanner.appendChild(imgbanner);
    slideshow.children[0].style.display = "block";

    let divposter = document.createElement("div");
    divposter.setAttribute("id", "movie" + (i + 1));
    divposter.setAttribute("onclick", "info(this.id)");
    movies.appendChild(divposter);
    let imgposter = document.createElement("img");
    imgposter.setAttribute("src", moviesList[i].movie_poster_src);
    divposter.appendChild(imgposter);


    let divinfo = document.createElement("div");
    divinfo.setAttribute("id", "movie" + (i + 1) + "info");
    movieinfo.appendChild(divinfo);
    let divinfoimage = document.createElement("div");
    divinfoimage.setAttribute("class", "image");
    let divinfoinfo = document.createElement("div");
    divinfoinfo.setAttribute("class", "info");
    let divinfobutton = document.createElement("div");
    divinfobutton.setAttribute("class", "button");
    divinfobutton.setAttribute("onclick", "bookTickets(this)");
    divinfobutton.innerText = "Book Tickets";

    divinfo.appendChild(divinfoimage);
    divinfo.appendChild(divinfoinfo);
    divinfo.appendChild(divinfobutton);

    let divinfoimageimage = document.createElement("img");
    divinfoimageimage.setAttribute("src", moviesList[i].movie_poster_src);
    divinfoimage.appendChild(divinfoimageimage);

    let divinfoinfoheading = document.createElement("h1");
    divinfoinfoheading.innerText = moviesList[i].movie_name;
    divinfoinfo.appendChild(divinfoinfoheading);

    let divinfoinfospanduration1 = document.createElement("span");
    divinfoinfospanduration1.innerText = "Genre/Duration";
    divinfoinfospanduration1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospanduration1);
    let divinfoinfospanduration2 = document.createElement("span");
    divinfoinfospanduration2.innerText = moviesList[i].movie_genre + " | " + moviesList[i].movie_duration;
    divinfoinfo.appendChild(divinfoinfospanduration2);

    let divinfoinfospanrating1 = document.createElement("span");
    divinfoinfospanrating1.innerText = "Rating";
    divinfoinfospanrating1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospanrating1);
    let divinfoinfospanrating2 = document.createElement("span");
    divinfoinfospanrating2.innerText = moviesList[i].movie_rating;
    divinfoinfo.appendChild(divinfoinfospanrating2);

    let divinfoinfospanlanguage1 = document.createElement("span");
    divinfoinfospanlanguage1.innerText = "Language";
    divinfoinfospanlanguage1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospanlanguage1);
    let divinfoinfospanlanguage2 = document.createElement("span");
    divinfoinfospanlanguage2.innerText = moviesList[i].movie_language;
    divinfoinfo.appendChild(divinfoinfospanlanguage2);

    let divinfoinfospancast1 = document.createElement("span");
    divinfoinfospancast1.innerText = "Cast";
    divinfoinfospancast1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospancast1);
    let divinfoinfospancast2 = document.createElement("span");
    divinfoinfospancast2.innerText = moviesList[i].movie_cast;
    divinfoinfo.appendChild(divinfoinfospancast2);

    let divinfoinfospandirector1 = document.createElement("span");
    divinfoinfospandirector1.innerText = "Director";
    divinfoinfospandirector1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospandirector1);
    let divinfoinfospandirector2 = document.createElement("span");
    divinfoinfospandirector2.innerText = moviesList[i].movie_director;
    divinfoinfo.appendChild(divinfoinfospandirector2);

    let divinfoinfospansynopsis1 = document.createElement("span");
    divinfoinfospansynopsis1.innerText = "Synopsis";
    divinfoinfospansynopsis1.setAttribute("class", "heading");
    divinfoinfo.appendChild(divinfoinfospansynopsis1);
    let divinfoinfospansynopsis2 = document.createElement("span");
    divinfoinfospansynopsis2.innerText = moviesList[i].movie_synopsis;
    divinfoinfo.appendChild(divinfoinfospansynopsis2);

    let divcinema = document.createElement("div");
    divcinema.setAttribute("id", "movie" + (i + 1) + "cinema");
    cinema.appendChild(divcinema);

    let divcinemaposter = document.createElement("div");
    divcinemaposter.setAttribute("class", "poster");
    divcinema.appendChild(divcinemaposter);
    let divcinemaposterimage = document.createElement("img");
    divcinemaposterimage.setAttribute("src", moviesList[i].movie_banner_src);
    divcinemaposter.appendChild(divcinemaposterimage);

    let divcinemascreen = document.createElement("div");
    divcinemascreen.setAttribute("class", "screen");
    divcinemascreen.innerText = "SCREEN";
    divcinema.appendChild(divcinemascreen);

    let divcinemaseats = document.createElement("div");
    divcinemaseats.setAttribute("class", "seats");
    divcinema.appendChild(divcinemaseats);

    let row1 = document.createElement("div");
    divcinemaseats.appendChild(row1);

    for (let j = 0; j < 10; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", (i + 1) + "seat" + j);
        row1.appendChild(column);
        let img = document.createElement("img");
        column.appendChild(img);
    }

    let row2 = document.createElement("div");
    divcinemaseats.appendChild(row2);

    for (let j = 10; j < 20; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", (i + 1) + "seat" + j);
        row2.appendChild(column);
        let img = document.createElement("img");
        column.appendChild(img);
    }

    let row3 = document.createElement("div");
    divcinemaseats.appendChild(row3);

    for (let j = 20; j < 30; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", (i + 1) + "seat" + j);
        row3.appendChild(column);
        let img = document.createElement("img");
        column.appendChild(img);
    }

    let row4 = document.createElement("div");
    divcinemaseats.appendChild(row4);

    for (let j = 30; j < 40; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", (i + 1) + "seat" + j);
        row4.appendChild(column);
        let img = document.createElement("img");
        column.appendChild(img);
    }

    let row5 = document.createElement("div");
    divcinemaseats.appendChild(row5);

    for (let j = 40; j < 50; j++) {
        let column = document.createElement("div");
        column.setAttribute("id", (i + 1) + "seat" + j);
        row5.appendChild(column);
        let img = document.createElement("img");
        column.appendChild(img);
    }

    for (let l = 0; l < 50; l++) {
        if (moviesList[i].movie_seats[l]) {
            document.getElementById((i + 1) + "seat" + l).childNodes[0].setAttribute("src", "./assets/chairreserved.png");
        }
        else {
            document.getElementById((i + 1) + "seat" + l).childNodes[0].setAttribute("src", "./assets/chair.png");
            document.getElementById((i + 1) + "seat" + l).childNodes[0].setAttribute("onclick", "bookSeats(this.parentElement.id)");
        }
    }

    let divcinemabutton = document.createElement("div");
    divcinemabutton.setAttribute("class", "button");
    divcinemabutton.setAttribute("onclick", "printTicket(this)");
    divcinemabutton.innerText = "Print Ticket";
    divcinema.appendChild(divcinemabutton);
}

//Slide Show Start
function hideSlideshow() {
    for (let i = 0; i < slideshow.childElementCount; i++) {
        slideshow.children[i].style.display = "none";
    }
}
var i = 1;
setInterval(function () {
    hideSlideshow();
    document.getElementById("cmovie" + i).style.display = "block";
    if (i === slideshow.childElementCount) {
        i = 0;
    }
    i++
}, 3000);
//Slide Show End

//Movie Info Start
function info(movieId) {
    slideshow.style.display = "none";
    movies.style.display = "none";
    document.getElementById(movieId + "info").parentElement.style.display = "block";
    document.getElementById(movieId + "info").style.display = "flex";
}
//Movie Info End

//Book Tickets Start
function bookTickets(movieId) {
    document.getElementById(movieId.parentElement.id).parentElement.style.display = "none";
    document.getElementById(movieId.parentElement.id).style.display = "none";
    movieId = movieId.parentElement.id.slice(0, 6)
    document.getElementById(movieId + "cinema").parentElement.style.display = "block";
    document.getElementById(movieId + "cinema").style.display = "flex";
}
//Book Tickets End

const seatPic = document.getElementById("extrachair").src

//Book Seats Start
function bookSeats(seatid) {
    if(document.getElementById(seatid).childNodes[0].src === seatPic)
    {
        document.getElementById(seatid).childNodes[0].setAttribute("src", "./assets/chairselected.png")
        const movienumber = seatid.slice(0, 1) - 1;
        const seatnumber = seatid.slice(5);
        let tempseat = seatnumber;
        tempseat++;
        moviesList[movienumber].movie_seats[seatnumber] = true;
        data[loginUser].ticket[movienumber].ticket++;
        data[loginUser].seats[movienumber].seats.push("Seat Number " + tempseat);
        document.getElementById("bookedTickets" + movienumber).innerText = data[loginUser].ticket[movienumber].ticket;
    }
    else{
        document.getElementById(seatid).childNodes[0].setAttribute("src", "./assets/chair.png")
        const movienumber = seatid.slice(0, 1) - 1;
        const seatnumber = seatid.slice(5);
        let tempseat = seatnumber;
        tempseat++;
        moviesList[movienumber].movie_seats[seatnumber] = false;
        data[loginUser].ticket[movienumber].ticket--;
        document.getElementById("bookedTickets" + movienumber).innerText = data[loginUser].ticket[movienumber].ticket;
        const index = data[loginUser].seats[movienumber].seats.indexOf("Seat Number " + tempseat);
        data[loginUser].seats[movienumber].seats.splice(index,1);
    }  
}
//Book Seats End

//Print Tickets Start
function printTicket(value) {
    window.localStorage.setItem("Users Array", JSON.stringify(data));
    window.localStorage.setItem("Movies Array", JSON.stringify(moviesList));
    const movieIndex = value.parentElement.id.slice(5, 6) - 1;
    cinema.style.display = "none";
    ticket.style.display = "block";
    document.getElementById('moviename').innerText = moviesList[movieIndex].movie_name;
    document.getElementById('username').innerText = data[loginUser].username;
    document.getElementById('mobilenumber').innerText = data[loginUser].number;
    document.getElementById('email').innerText = data[loginUser].email;
    document.getElementById('seatstotal').innerText = data[loginUser].ticket[movieIndex].ticket;
    var seatsList = document.getElementById('seatsnumber');
    for (let j in data[loginUser].seats[movieIndex].seats) {
        let div = document.createElement("div");
        seatsList.appendChild(div);
        div.innerText = data[loginUser].seats[movieIndex].seats[j];
    }
    document.getElementById('totalamount').innerText = data[loginUser].ticket[movieIndex].ticket * 800;
}
//Print Tickets End