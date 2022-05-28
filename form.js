const ApiUrl_Posts="https://jsonplaceholder.typicode.com/posts?_limit=5"
const ApiUrl_Users="https://jsonplaceholder.typicode.com/users?_limit=5"
const ApiUrl_ToDos="https://jsonplaceholder.typicode.com/todos?_limit=5"
const ApiURL_photos="https://jsonplaceholder.typicode.com/photos?_limit=5"


const GetPostsApiData= async(apiurl,cb) =>{
try {
    const FinalData=await(await fetch(apiurl)).json()
    cb(FinalData,false)
} catch (e) {
    cb(false,e.message)
}

}

const GetusersApiData= async(apiurl,cb) =>{
    try {
        const FinalData=await(await fetch(apiurl)).json()
        cb(FinalData,false)
    } catch (e) {
        cb(false,e.message)
    }
    
    }

const GetToDosApiData= async(apiurl,cb) =>{
    try {
        const FinalData=await(await fetch(apiurl)).json()
        cb(FinalData,false)
    } catch (e) {
        cb(false,e.message)
    }
    
    }
const GetPhotosApiData=async(apiurl,cb) =>{
    try{
        const finalData=await(await fetch(apiurl)).json()
        cb(finalData,false)

    }
    catch(e){
        cb(false,e.message)
    }
}
GetPostsApiData(ApiUrl_Posts,(data,error)=>{
if(data) {
    console.log("success")
    console.log(data)
}
else{
    console.log("fee error")
    console.log(error)
}
})
GetusersApiData(ApiUrl_Users,(data,error)=>{
    if(data) {
        console.log("success")
        console.log(data)
    }
    else{
        console.log("fee error")
        console.log(error)
    }
})
GetToDosApiData(ApiUrl_ToDos,(data,error)=>{
    if(data) {
        console.log("success")
        console.log(data)
    }
    else{
        console.log("fee error")
        console.log(error)
    }
    })
GetPhotosApiData(ApiURL_photos,(data,error)=>{
    if(data){
        console.log("success")
        console.log(data)

    }
    else{
        console.log("fee error")
        console.lod(error)
    }
})
const Buttons = document.querySelector("#Buttons")

var btn_posts = document.createElement("button")
btn_posts.innerText= "Posts"
Buttons.appendChild(btn_posts)

var btn_users= document.createElement("button")
btn_users.innerText="users"
Buttons.appendChild(btn_users)

var btn_todos = document.createElement("button")
btn_todos.innerText= "ToDos"
Buttons.appendChild(btn_todos)

var btn_photos=document.createElement("button")
btn_photos.innerText="users"
Buttons.appendChild(btn_photos)

var table = document.createElement("table");

btn_posts.addEventListener("click", function(e){
    table.innerHTML=""
    GetPostsApiData(ApiUrl_Posts,(data,error) => {
    if(data) {
        console.log("success")
        console.log(data)
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }


        var tr = table.insertRow(-1);   
          console.log(col);
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    else{
        console.log(" error")
        console.log(error)
    }
 })

})
btn_users.addEventListener("click", function(e){
    table.innerHTML=""
    GetPostsApiData(ApiUrl_Posts,(data,error) => {
    if(data) {
        console.log("success")
        console.log(data)
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }


        var tr = table.insertRow(-1);   
          console.log(col);
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    else{
        console.log(" error")
        console.log(error)
    }
 })
 
})
btn_todos.addEventListener("click", function(e){
    table.innerHTML=""

    GetToDosApiData(ApiUrl_ToDos,(data,error) => {
    if(data) {
        console.log("success")
        console.log(data)
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }


        var tr = table.insertRow(-1);   
          console.log(col);
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        
        divContainer.appendChild(table);
    }
    else{
        console.log(" error")
        console.log(error)
    }
 })
})
btn_photos.addEventListener("click", function(e){
    table.innerHTML=""
    GetPostsApiData(ApiUrl_Posts,(data,error) => {
    if(data) {
        console.log("success")
        console.log(data)
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }


        var tr = table.insertRow(-1);   
          console.log(col);
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    else{
        console.log(" error")
        console.log(error)
    }
 })
 
})