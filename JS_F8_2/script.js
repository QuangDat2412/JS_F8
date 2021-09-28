var listCoursesBlock = document.querySelector('#list-courses');
var inputName = document.querySelector('input[name="name"]');
var inputDescription = document.querySelector('textarea[name="description"]');
var saveBtn = document.querySelector('.save');

var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleSaveForm();
}

start();

function renderCourses(courses) {
    if (courses.length == 0) {
        var htmls = `<tr>
                        <td colspan='4' class='text-center'>
                            Bạn chưa đăng khóa học nào.
                        </td>
                    </tr>
                    `;
        document.querySelector('#list-courses tbody').innerHTML = htmls;
    } else {
        var htmls = courses.map(function (course) {
            return `<tr class ="course-item-${course.id}">
                        <th scope="row">${course.id}</th>
                        <td>${course.name}</td>
                        <td>${course.description}</td>
                        <td>
                            <button type="button" class="btn btn-primary" onclick="getCourseValue(${course.id})">Sửa</button>
                            <button type="button" class="btn btn-primary" onclick="handleDeleteCourse(${course.id})">Xóa</button>
                        </td>   
                    </tr>`;
        });
        document.querySelector('#list-courses tbody').innerHTML = htmls.join('');
    }
}

function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    fetch(coursesApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function changeCourse(id, data, callback) {
    var option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    fetch(coursesApi + '/' + id, option)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'Delete', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (confirm('Ban co thuc su muon xoa')) {
        fetch(coursesApi + '/' + id, options)
            .then(function (response) {
                return response.json();
            })
            .then(function () {
                var courseItem = document.querySelector('.course-item-' + id);
                if (courseItem) {
                    courseItem.remove();
                }
                getCourses(renderCourses);
            });
    }
}
function getCourseValue(id) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (courses) {
            inputName.value = courses[id - 1].name;
            inputDescription.value = courses[id - 1].description;
        });
    saveBtn.setAttribute('id', id);
}

function handleSaveForm() {
    saveBtn.onclick = function () {
        var name = inputName.value;
        var description = inputDescription.value;

        var formData = {
            name: name,
            description: description,
        };
        let courseId = saveBtn.getAttribute('id');
        if (name != '' && description != '') {
            if (courseId == 0 || courseId) {
                changeCourse(courseId, formData, function () {
                    getCourses(renderCourses);
                });
                saveBtn.removeAttribute('id');
            } else {
                createCourse(formData, function () {
                    getCourses(renderCourses);
                });
            }
            inputName.value = '';
            inputDescription.value = '';
        } else {
            alert('Hãy nhập đầy đủ thông tin');
        }
    };
}
