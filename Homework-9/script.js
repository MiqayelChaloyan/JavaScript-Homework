// function fetchData(url) {
//     const BASE_URL = 'https://ghibliapi.herokuapp.com/';
//     const newUrl = url.startsWith('/') ? url.slice(1) : url;
//     return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json());
// }


// // fetchData('people').then((data) => console.log(data))   //datanery stacanq amboxjutyamb



// init()

// function init() {
//     const rootElement = document.querySelector('#root');
//     const divElement = App();
//     rootElement.append(divElement) //kanchumenq App() functian u ira veradardzrac arjeqy append enq anum #root divi mej
// }




// function App() {
//     const container = document.createElement('div')
//     container.setAttribute('component-name', 'App')

//     const state = {
//         people: [],
//         films: []
//     }

//     window.state = state

//     function setState(obj) {
//         for (let key in obj) {
//             state[key] = obj[key]
//         }
//         render()
//     }

//     const btn = createButton()
//     btn.onclick = function () {
//         fetchData('films').then((data) => setState({ films: data }))
//     }


//     function render() {
//         container.innerHTML = ''
//         const peopleEl = People(state.people);
//         Films(state.films);
//         container.append(peopleEl);
//         container.append(btn)

//     }

//     fetchData('people').then((data) => setState({ people: data }));

//     render()

//     return container
// }

// function People(people) {
//     const container = document.createElement('div')
//     container.setAttribute('component-name', 'People')

//     people.forEach(({ name, age, gender }) => {
//         const userEl = Person(name, age, gender)
//         container.append(userEl);
//     })


//     return container
// }

// ////

// function Films(film) {
   
//     const moviesEl = document.querySelector('.movies')

//     film.forEach(({ image, title }) => {
//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie')
//         movieEl.innerHTML = `
//         <div>
//         <img src=${image} class="img" alt=${title}>
//         </div>
//         `;

//         moviesEl.appendChild(movieEl)
        
//     })

//     return moviesEl
// }

// ////

// function Person(name, age, gender) {
//     const template = document
//         .querySelector('#person-template')
//         .content.cloneNode(true)
//     template.querySelector('.name').innerHTML = name
//     template.querySelector('.age').innerHTML = age
//     template.querySelector('.gender').innerHTML = gender
//     return template
// }


// /////////////////////////////////////
// function createButton() {
//     const button = document.createElement('button');
//     button.id = 'btn';
//     button.type = 'button';
//     button.textContent = 'click';


//     return button
// }

// //////////////////////////////
// // function F(image, title) {
// //     const template = document
// //         .querySelector('#person-template')
// //         .content.cloneNode(true)
// //     template.querySelector('.img').innerHTML = image
// //     template.querySelector('.title').innerHTML = title

// //     return template
// // }
// /////////////////////////////////////




