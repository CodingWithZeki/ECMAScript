/*Json*/
/*
function getJson(){
    fetch('product.json')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
    }).catch(error => {
        console.log(error);
    })
}

getJson();
*/


/*External API*/
/*
function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json()
        }).then(users => {
            console.log(users)
    })
}
*/

/*2. Aşama*/
function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json()
        }).then(users => {
        var html = "";
        users.results.forEach(user => {
            html += `
            <div>
            <img src = "${user.picture.medium}">
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
            </div>
            `;

        });
        document.querySelector("#users").innerHTML = html;
    }).catch(error => {
        console.log(error);
    })
}



//getExternalApi();

function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/todos/";

    var data = {
        method: "POST",
        body : JSON.stringify({
            userId : 1,
            title: "sample title",
            body: "sample body"
        }),
        header: new Headers({
            'content-type':'application/json'
        })
    }
    fetch(url,data)
        .then(res => {
            console.log(res);
        })
}

postExternalApi();