const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Users';
document.body.appendChild(h1);

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url).then(response => response.json()).then(values => {
    const usersContainer = document.createElement('div');
    usersContainer.classList.add('usersContainer');
    document.body.appendChild(usersContainer);

    values.forEach((value) => {
        const userId = value.id;
        const userName = value.name;

        const userBlock = document.createElement('div');
        userBlock.classList.add('userBlock');

        const userInfo = document.createElement('p');
        userInfo.classList.add('userInfo')
        userInfo.innerText = `${userId} - ${userName}`;

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'user-details';

        btn.addEventListener('click',function() {
            document.location.href = 'user-details.html?userId=' + JSON.stringify(value);
        })


        userBlock.append(userInfo, btn);
        usersContainer.appendChild(userBlock);

    })
})