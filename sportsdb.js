const searchButton = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getTeams(data.teams))
}
const getTeams = teams => {
    teams.forEach(team => {
        console.log(team)
        const teamContainer = document.getElementById('team-container');
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `
            <div class="row m-4">
                <div class="col-md-4 shadow rounded">
                    <h2>${team.strTeam}</h2>
                    <h3>${team.strCountry}</h3>
                    <img width="200px" src="${team.strTeamBanner}">
                </div>
            </div>
        `;
        teamContainer.appendChild(div);
    })
}