fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(values => {
        const userContainer = document.querySelector('.user-container');

        values.forEach(value => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            const userInfo = document.createElement('p');
            userInfo.classList.add('user-info');
            userInfo.innerText = `${value.id} - ${value.name}`;

            const btn = document.createElement('button');
            btn.classList.add('user-btn');
            btn.innerText = 'Details';
            btn.onclick = function () {
                document.location.href = 'user-details.html?userId=' + JSON.stringify(value);
            }

            userBlock.append(userInfo, btn);
            userContainer.appendChild(userBlock);
        });
    });
