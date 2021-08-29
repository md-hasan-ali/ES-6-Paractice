fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => showValue(data))

const showValue = data => {
    for (const element of data) {
        const container = document.getElementById('container');
        const div = document.createElement('div');
        div.classList.add('title');
        div.innerHTML = `
        <h1 style="color:red">${element.id}</h1>
        <h2>Name : ${element.name}</h2> <br>
        <p> Email : ${element.email}</p>
        <button onclick="detailComment('${element.id}')">Show Data<button/>
    `;
        container.appendChild(div);
    }
}
const detailComment = commentId => {
    const url = `https://jsonplaceholder.typicode.com/comments/?id=${commentId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentDetails(data[0]))
}
const displayCommentDetails = comment => {
    console.log(comment)
    const details = document.getElementById('details');
    details.innerHTML = '';
    const div = document.createElement('div')
    div.classList.add('design');
    div.innerHTML = `
        <h1>Id : ${comment.id}</h1>
        <h2>Email : ${comment.email}</h2>
    `;
    details.appendChild(div);
}