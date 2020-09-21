// here you import React inorder to render anything to the dom and the component class. 
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// its important to use the capital because smaller case is reserved for elements. eg you could create your own element <Div> that react could render knowing it is different from <div>


const App = props => {
  // you use useState like a function returns an array with 2 elements. start by passing in the state property. the first element will always be the current state/updated state. the 2nd element will be a function that allows us to change the state and informs react about it
  // here we use array destructuring to pass in the return values to these variables 'personsState' and 'setPersonsState'. that is now how you will access the state in the jsx
  // with array destructuring we can pass the elelments in array on the right to elements on the left e.g var [first, second, third] = ['laide', 'arrow', 'jets']
  // therefore in this case the array returned by function useState will return 2 elements will be destructured to the 2 elements personsState that represents the current state and setPersonsState which is a function that will allow us to change state and inform react to update the dom 
  const [personsState, setPersonsState] = useState({

    persons:[
      { name: " Ashley",age:29},
      {name:"Sherlock", age:39},
      {name:"Watson", age:67}

    ],
    otherState: "an example" 
    // otherState will remain untouched when setState is called since it is not changed (see setState method below)
  });
  const switchNameHandler = () =>{
    // alert("HeyyA!")
    // console.log("Was Clicked")
    setPersonsState({
      persons:[
        { name: "Ashleigh",age:29},
        {name:"Sherlock", age:39},
        {name:"Watson", age:87}
      ]
    })
  }
  
  return (
    // this is jsx not html it can be written in a js file and be transpiled and understood by the compiler
    <div className="App">
      <h1>Hey you, how you doing?</h1>
      {/* directly reference the event handler without using the this keyword */}
      <button onClick={switchNameHandler}>Switch Here</button>
      {/* here you use the personsState object that was created above instead of the 'this' keyword' since we dont have a class anymore */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person  name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing </Person>
      <Person  name={personsState.persons[2].name} age={personsState.persons[2].age}/>

    </div>
      // this jsx is the equivalent of the following code
      // createElement() take a minimum of 3 arguments (the parent element, the property of the element and the child elements)
      // return React.createElement('div', null, React.createElement('p',null, 'noted'))
  );

}


// export the 'App' class as the default export meaninf if you import this file your importing the class
export default App;



// class based component alternative
// create a class eg 'App' that inherits from the 'Component' class that was imported above fro the react library.
// class App extends Component {
//   state = {
//     persons:[
//       { name: " Ashley",age:29},
//       {name:"Sherlock", age:39},
//       {name:"Watson", age:67}

//     ],
//     otherState: "an example" 
//     // otherState will remain untouched when setState is called since it is not changed (see setState method below)
//   }
//   switchNameHandler = () =>{
//     // alert("HeyyA!")
//     // console.log("Was Clicked")
//     // personsState.persons[0].name = "Ashleigh" DO NOT ATTEMPT CHANGE STATE LIKE THIS REACT WILL REFUSE
//     // Insstead use the 'setState()' method that comes from the component class. It will allow you to update the state property and inform react to update the dom
//     this.setState({
//       persons:[
//         { name: " Ashleigh",age:29},
//         {name:"Sherlock", age:39},
//         {name:"Watson", age:87}
//       ]
//     })
//   }
// this class has a one method the 'render' method which react will call to render something to the screen. every component has to render or return some html which can be rendered to the dom. you can listen do other things  e.g listen for events, do math etc
// render() {
  