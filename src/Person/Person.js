// import React
import React from 'react';
import { render } from 'react-dom';

// in its simplest form a component is a function returning some jsx
const person = (props) => {
    // if you want to pass in properties into the elements you add the argument 'props' which for best practise should be named props but can always be named differently
    return <div>
                <p> Person component: I am {props.name} and I am {props.age}</p>
                <p>{props.children}</p>
                {/* children is a special property that takes any nested children within the component, this includes tags and plain text(as seen in this case) and renders them  */}
            </div> 

}

export default person;

// when using class based components and passing in props it would be ....
// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }