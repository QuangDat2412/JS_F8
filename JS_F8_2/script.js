// var users = [
//     {
//         id: 1,
//         name: 'Quang Dat',
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Alo',
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Hello',
//     },
//     {
//         id: 3,
//         user_id: 2,
//         content: 'aoaoao',
//     },
// ];

// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000);
//     })
// }

// function getUsersbyIDs(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id)
//         })
//         resolve(result);
//     });
// }

// getComments()
//     .then(function(comments){
//         var userIds = comments.map(function(comments){
//             return comments.user_id;
//         });

//         return getUsersbyIDs(userIds)
//             .then(function(users){
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             });
//     })
//     .then(function(data){
//         var commentBLock = document.getElementById('comment-block')
//         var html = '';
//         data.comments.forEach(function(comment){
//             var user = data.users.find(function(user){
//                 return user.id ===comment.user_id;
//             });

//             html += `<li>${user.name}: ${comment.content}</li>`
//         });

//         commentBLock.innerHTML = html;
//     });


// var postApi = 'https://jsonplaceholder.typicode.com/photos';

// fetch(postApi)
//     .then(function (response) {
//         return response.json();
//     })

//     .then(function(photos){
//         var htmls =photos.map(function(photo){
//             return `<li>
//             <h2>${photo.albumId}</h2>
//             <p>${photo.id}</p>
//             <img src="${photo.url}" alt="">
//             </li>`;
//         })

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function(err){
//         console.log('Co loi!');
//     });

var listCoursesBlock = document.querySelector('#list-courses');

var coursesApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);
    handleCreateForm();   
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function createCourse(data,callback){
    var options ={
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    fetch(coursesApi, options)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id){
    var options ={
        method: 'Delete', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(coursesApi + '/' + id, options)
        .then(function(response){
            return response.json();
        })
        .then(function(){
            var courseItem = document.querySelector(".course-item-" + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}
function handleChangeCourse(id){
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
        
    var formData = {
        name: name,
        description: description
    };
    if (name != "" && description != "") {
        changeCourse(id,formData, function () {
            alert('Update thanh cong');
            getCourses(renderCourses);
        });
    } else {
        alert("Hãy nhập đầy đủ thông tin");
    }
}

function changeCourse(id,data,callback) {
    var option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } // khi an vao nut change: hien khung thay doi va thay doi khi an vao nut save
    fetch(coursesApi + '/' + id, option)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
    


function renderCourses(courses){
    var htmls = courses.map(function(course){
        return `
            <li class ="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleChangeCourse(${course.id})">Change</button>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var  createBtn = document.querySelector('#create');

    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        };
        if (name != "" && description != "") {
            createCourse(formData, function () {
                alert('Da tao thanh cong');
                getCourses(renderCourses);
            });
           } else {
                alert("Hãy nhập đầy đủ thông tin");
           }
    }
}
    