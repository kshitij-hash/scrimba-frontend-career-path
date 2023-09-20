const HomeScore = document.getElementById('home');
const GuestScore = document.getElementById('guest');
const homeName = document.getElementById('home-name');
const guestName = document.getElementById('guest-name');

let current_score_home = 0, current_score_guest = 0;

function leadingTeam() {
    if (current_score_home > current_score_guest) {
        homeName.style.color = "#16FF00";
        guestName.style.color = "#eee";
    } else if (current_score_home < current_score_guest) {
        guestName.style.color = "#16FF00";
        homeName.style.color = "#eee";
    }
}

function addone() {
    current_score_home++;
    HomeScore.innerHTML = current_score_home;
    leadingTeam();
}

function addtwo() {
    current_score_home += 2;
    HomeScore.innerHTML = current_score_home;
    leadingTeam();
}

function addthree() {
    current_score_home += 3;
    HomeScore.innerHTML = current_score_home;
    leadingTeam();
}

function addoneToGuest() {
    current_score_guest++;
    GuestScore.innerHTML = current_score_guest;
    leadingTeam();
}

function addtwoToGuest() {
    current_score_guest += 2;
    GuestScore.innerHTML = current_score_guest;
    leadingTeam();
}

function addthreeToGuest() {
    current_score_guest += 3;
    GuestScore.innerHTML = current_score_guest;
    leadingTeam();
}

function resetScore() {
    current_score_home = 0;
    current_score_guest = 0;
    HomeScore.innerHTML = current_score_home;
    GuestScore.innerHTML = current_score_guest;
    homeName.style.color = "#eee";
    guestName.style.color = "#eee";
}