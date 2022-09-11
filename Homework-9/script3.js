// // // function fetchData(url) {
// // //     const BASE_URL = 'https://ghibliapi.herokuapp.com/'
// // //     const newUrl = url.startsWith('/') ? url.slice(1) : url
// // //     return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json())
// // // }


// // // init()

// // // function init() {
// // //     const rootEl = document.querySelector('#root')
// // //     const divEl = App()
// // //     rootEl.append(divEl)
// // // }

// // // /////////////
// // // let clicked = false;
// // // function useIt() {
// // //     if (clicked === false) {
// // //         fetchData('films').then((data) => {
// // //             App(data)
// // //             createElements(data)
// // //         })
// // //     }
// // //     clicked = true
// // // }


// // // //////////////
// // // function App(data) {
// // //     const container = document.createElement('div')
// // //     container.setAttribute('component-name', 'App')

// // //     const state = {
// // //         people: [],
// // //         films: []
// // //     }

// // //     setState({ films: data })

// // //     window.state = state

// // //     function setState(obj) {
// // //         for (let key in obj) {
// // //             state[key] = obj[key]
// // //         }
// // //         render()
// // //     }

// // //     function render() {
// // //         container.innerHTML = ''
// // //         const peopleEl = People(state.people)
// // //         container.append(peopleEl)
// // //     }

// // //     fetchData('people').then((data) => {
// // //         setState({ people: data })
// // //     })


// // //     render()
// // //     return container
// // // }


// // // function People(people) {
// // //     const container = document.createElement('div')
// // //     container.setAttribute('component-name', 'People')

// // //     people.forEach(({ name, age, gender, eye_color, hair_color }) => {
// // //         const userEl = Person(name, age, gender, eye_color, hair_color)
// // //         container.append(userEl)
// // //     })


// // //     return container
// // // }

// // // function Person(name, age, gender, eye_color, hair_color) {
// // //     const template = document
// // //         .querySelector('#person-template')
// // //         .content.cloneNode(true)

// // //     template.querySelector('.name').innerHTML = name
// // //     template.querySelector('.age').innerHTML = age
// // //     template.querySelector('.gender').innerHTML = gender
// // //     template.querySelector('.eye_color').innerHTML = eye_color
// // //     template.querySelector('.hair_color').innerHTML = hair_color
// // //     return template
// // // }

// // ////////////////////////////////////////////////////////////////////////////////////////////



// // // function createElements(data) {
// // //     for (let i = 0; i < 5; i++) {
// // //         const moviesEl = document.querySelector('.movies')
// // //         const movieEl = document.createElement('div');
// // //         movieEl.innerHTML = `

// // //             <img src="${data[i].image}" class="image"  alt="" />
// // //             <div class="title">${data[i].title}</div>

// // //             `;
// // //         moviesEl.appendChild(movieEl)
// // //     }
// // // }


// // // /////////////////////////////////////////////////////////////////////////////////////////////
// // // /////////////////////////////////////////////////////////////////////////////////////////////



// // // function getMovies(movie) {
// // //     let html = "";
// // //     if (movie) {
// // // movie.forEach(({ image, title }) => {
// // //     html += `
// // //        <div class="movie">
// // //             <img class="image" src="${image}" alt="">
// // //             <span class="title">${title}</span>
// // //        </div>
// // //     `
// // // })
// // //     }
// // //    console.log(html)
// // // }


// // // //////////////////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////


// function fetchData(url) {
//     const BASE_URL = "https://ghibliapi.herokuapp.com/";
//     const newUrl = url.startsWith("/") ? url.slice(1) : url;
//     return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json());
// }

// function fetchFilms(id) {
//     const newUrl = `people/${id}`;
//     const films = fetchData(newUrl).then((data) => data.films);
//     return films;
// }

// // function fetchFilm(filrmUrl) {
// //     return fetch(filrmUrl).then((res) => res.json());
// // }

// init();

// function init() {
//     const rootEl = document.querySelector("#root");
//     const divEl = App();
//     rootEl.append(divEl);
// }

// function App() {
//     const container = document.createElement("div");
//     container.setAttribute("component-name", "App");
//     const state = {
//         people: [],
//         id: null,
//         films: [],
//     };

//     window.state = state;

//     function setState(obj) {
//         for (let key in obj) {
//             state[key] = obj[key];
//         }

//         render();
//     }

//     function render() {
//         container.innerHTML = "";
//         const peopleEl = People(state, setState);
//         container.append(peopleEl);
//     }

//     fetchData("people").then((data) => {
//         setState({ people: data });
//     });

//     render();

//     return container;
// }

// function People({ people, id: stateID, films }, setState) {
//     const container = document.createElement("div");
//     container.setAttribute("component-name", "People");
//     people.forEach(({ name, age, gender, eye_color, hair_color, id }) => {
//         const userEl = Person(
//             name,
//             age,
//             gender,
//             eye_color,
//             hair_color,
//             id,
//             setState
//         );
//         container.append(userEl);

//         //////////////////

//         if (id === stateID) {
//             const moviesEl = document.createElement('div')
//             moviesEl.className = "movies"
//             moviesEl.innerHTML = getMovies(films)
//             container.append(moviesEl);
//         }

//         /////////////////
//     });

//     return container;
// }
// function Person(name, age, gender, eye_color, hair_color, id, setState) {
//     const template = document
//         .querySelector("#person-template")
//         .content.cloneNode(true);
//     template.querySelector(".name").innerHTML = name;
//     template.querySelector(".age").innerHTML = age;
//     template.querySelector(".gender").innerHTML = gender;
//     template.querySelector(".eye_color").innerHTML = eye_color;
//     template.querySelector(".hair_color").innerHTML = hair_color;
//     template.querySelector(".btn").onclick = () => {
//         fetchData("films").then((data) => {
//             setState({ films: data }, id);
//         });
//         fetchFilms(id).then(() => {
//             setState({ films: [], id });
//         });
//     };
//     return template;
// }

// // ////////////////////

// function getMovies(movie) {
//     let html = "";
//     if (movie) {
//         movie.forEach(({ image, title }) => {
//             console.log(image, title)
//             html += `
//        <div class="movie">
//             <img class="image" src="${image}" alt="">
//             <h2 class="title">${title}</h2>
//        </div>
//     `
//         })
//         return html
//     }
// }



//////////////////////////////////////////////////


// number  * 30

// function f(n) {
//   return new Promise((resolve) => {
//      setTimeout(() => {
//         resolve(n)
//      }, n * 30)
//    })
// }

// console.log(f(100).then(n => n));


//////////////

// const myArr = [1, 40, 50, 2, 30];

// function foo(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(n), n * 30
//         })
//     })
// }

// const res = []

// const t = myArr.map(el => {
//     return foo(el)
// })

// const promises = Promise.all([t])

// promises.then(res => {
//     console.log(res);
// })
