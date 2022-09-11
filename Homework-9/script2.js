
// const people = [
//   {
//     "name": "Haku",
//     "gender": "Male",
//     "age": "12"
//   },
//   {
//     "name": "Pazu",
//     "gender": "Male",
//     "age": "13"
//   },
//   {
//     "name": "Lusheeta Toel Ul Laputa",
//     "gender": "Female",
//     "age": "13"
//   },
//   {
//     "name": "Captain Dola",
//     "gender": "Female",
//     "age": "60"
//   },
//   {
//     "name": "Romska Palo Ul Laputa",
//     "gender": "Male",
//     "age": "33"
//   },
//   {
//     "name": "Uncle Pom",
//     "gender": "Male",
//     "age": "Unspecified/Elderly"
//   },
//   {
//     "name": "General Mouro",
//     "gender": "Male",
//     "age": "Unspecified/Adult"
//   },
// ];
// function fetchData(url) {
//   const BASE_URL = 'https://ghibliapi.herokuapp.com/';
//   const newUrl = url.startsWith('/') ? url.slice(1) : url
//   return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json())
// }

// // fetchData('people').then((data) => console.log(data))
// // fetchData('films').then((data) => console.log(data))

// init()

// function init() {
//   const rootEl = document.querySelector('#root')
//   const divEl = App()
//   rootEl.append(divEl)
// }

// function App() {
//   const container = document.createElement('div')
//   container.setAttribute('component-name', 'App')

//   const state = {
//     people: [],
//   }

//   window.state = state

//   function setState(obj) {
//     for (let key in obj) {
//       state[key] = obj[key]
//     }
//     render()
//   }

//   function render() {
//     container.innerHTML = ''
//     const peopleEl = People(state.people)
//     container.append(peopleEl)
//   }

//   fetchData('people').then((data) => {
//     setState({ people: data })
//   })

//   render()

//   return container
// }

// function People(people) {
//   const container = document.createElement('div')
//   container.setAttribute('component-name', 'People')

//   people.forEach(({ name, age, gender }) => {
//     const userEl = Person(name, age, gender)
//     container.append(userEl)
//   })

//   return container
// }

// function Person(name, age, gender) {
//   const template = document
//     .querySelector('#person-template')
//     .content.cloneNode(true)

//   template.querySelector('.name').innerHTML = name
//   template.querySelector('.age').innerHTML = age
//   template.querySelector('.gender').innerHTML = gender

//   return template
// }


