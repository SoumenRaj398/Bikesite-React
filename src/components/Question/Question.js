import React from 'react';
import "./Question.css"

const Question = () => {
    return (
        <div className="qus-info">
            <div className="how-works">
            <h2 className="head-one">How React works</h2>
            <p>React is a JavaScript-based UI development library. 
                Facebook and an open-source developer community run it.
                In react, how the data flow has clearly defined rules.
                React apps have a structure. Each piece of code that 
                performs on its own is constrained inside a component. 
                These components work in isolation but communicate with 
                each other to make the web application work.
</p>
            </div>
            <div className="difference">
                <h2 className="head-two">Difference Between Props vs State</h2>
                <p>State-----
The state is an updatable structure that is used to contain data or 
information about the component and can change over time. The change in 
state can happen as a response to user action or system event. It is 
the heart of the react component which determines the behavior of the 
component and how it will render. A state must be kept as simple as 
possible. It represents the component's local state or information. 
It can only be accessed or modified inside the component or by the 
component directly.<br></br>

Props-----
Props are read-only components. It is an object which stores 
the value of attributes of a tag and work similar to the HTML 
attributes. It allows passing data from one component to other 
components. It is similar to function arguments and can be passed 
to the component the same way as arguments passed in a function. 
Props are immutable so we cannot modify the props from inside the 
component.

</p>
            </div>
         
            
        </div>
    );
};

export default Question;