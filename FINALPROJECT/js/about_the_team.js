var teams = [{name:"Suyogya Poudel", img: "../img/suyogya.jpg", alt:"Image of Suyogya", year:"Freshman", major:"Computer Science", description:"I love reading, coding, playing sports/video games. Cannot say why I love coding so much but I know I lose track of time doing it, like every other hobbies I have."},
				{name:"Chandler Phillips", img: "../img/chandler.png", alt:"Image of Chandler", year:"Junior", major:"Computer Science", description:"I love to play Golf, listen to music, play video games, and to code. I didn’t start coding until my college education but I’m happy I found it because it doesn’t even feel like work, more of a hobby."},
				{name:"Jaylee Chase", img: "../img/jaylee.jpeg", alt:"Image of Jaylee", year:"Sophomore", major:"Computer Science", description:"I love live music, to travel, and just spend time with friends! I'm also a huge nerd and love reading and coding when I can!"},
				{name:"Veda Jammula", img: "../img/veda.jpeg", alt:"Image of Veda", year:"Sophomore", major:"Computer Science", description:"I love to travel and cook! My dream place to travel would be Bora Bora. My favorite tv show is Silicon Valley."},
				{name:"Sam Williamson", img: "../img/sam.jpeg", alt:"Image of Sam", year:"Junior", major:"Computer Science", description:"I love skiing, animals, games, and math. And I especially love when two or more of these things intersect. It happens more often than you’d think."},
				{name:"Jack Flaherty", img: "../img/jack.jpeg", alt:"Image of Jack", year:"Sophomore", major:"Computer Science", description:"I enjoy playing soccer, hiking, and watching sports. I also enjoy coding and learning more about programming."}];


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
