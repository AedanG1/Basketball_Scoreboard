document.addEventListener('DOMContentLoaded', function() {
    const homeScoreBtnGroup = document.getElementById("home-score-group")
    const guestScoreBtnGroup = document.getElementById("guest-score-group")
    const homeScore = document.getElementById("home-counter")
    const guestScore = document.getElementById("guest-counter")
    
    let home = 0
    let guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
    
    homeScoreBtnGroup.addEventListener('click', (event) => {
        if (event.target.dataset.home === "1") {
            home++
        } else if (event.target.dataset.home === "2") {
            home += 2
        } else {
            home += 3
        }
        homeScore.textContent = home
    })
    
    guestScoreBtnGroup.addEventListener('click', (event) => {
        if (event.target.dataset.guest === "1") {
            guest++
        } else if (event.target.dataset.guest === "2") {
            guest += 2
        } else {
            guest += 3
        }
        guestScore.textContent = guest
    })
})