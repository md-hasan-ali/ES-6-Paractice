fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getUsers(data.results))

const getUsers = users => {
    users.forEach(user => {
        console.log(user);
        const container = document.getElementById('user-container');
        const div = document.createElement('div');
        div.classList.add('design')
        div.innerHTML = `
            <img src="${user.picture.medium}">
            <h1>Country : ${user.location.country}</h1>
            <h2>City : ${user.location.city}</h2>
            <h3>Street : ${user.location.street.name}</h3>
            <h4>Street number : ${user.location.street.number}</h4>
        `;
        container.appendChild(div)
    })
}