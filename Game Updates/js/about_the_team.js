var teams = [{name:"Suyogya Poudel", img: "../img/suyogya.jpg", alt:"Image of Suyogya", year:"Freshman", major:"Computer Science", description:"-----"},
				{name:"Chandler Phillips", img: "../img/chandler.png", alt:"Image of Chandler", year:"Junior", major:"Computer Science", description:"-----"},
				{name:"Jaylee Chase", img: "../img/jaylee.jpeg", alt:"Image of Jaylee", year:"Sophomore", major:"Computer Science", description:"-----"},
				{name:"Veda Jammula", img: "../img/veda.jpeg", alt:"Image of Veda", year:"Sophomore", major:"Computer Science", description:"-----"},
				{name:"Sam Williamson", img: "../img/sam.jpeg", alt:"Image of Sam", year:"Junior", major:"Computer Science", description:"-----"},
				{name:"Jack Flaherty", img: "../img/jack.jpeg", alt:"Image of Jack", year:"Sophomore", major:"Computer Science", description:"-----"}];


function loadTeamPage() {
    var n = 0;
    var HTML = "";
    for (var n = 0; n < teams.length; n++) {
        HTML += "<a href=\"#\" onclick=\"switchTeam(" + n + ")\" class=\"dropdown-item\">";
        HTML += teams[n].name;
        HTML += "</a>";
    }
    var dropdown = document.getElementById("team_selector");
    dropdown.innerHTML = HTML;
}

function switchTeam(teamMem) {
    var team = teams[teamMem];
    document.getElementById("t_name").innerHTML = team.name;
    document.getElementById("t_major").innerHTML = team.major;
    document.getElementById("t_year").innerHTML = team.year;
    document.getElementById("t_description").innerHTML = team.description;
    document.getElementById("team_img").src = team.img;
    document.getElementById("team_img").alt = team.alt;
}
				

