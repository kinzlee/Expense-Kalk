import React from 'react';
import reactDom from 'react-dom';


const header = (
    <div>
        <h1>This is the heading right here</h1>
        <p> this is the paragraph</p>
    </div>
)

const Profile = (props) => {
    return (
        <div>
            <p>Name: </p>
            {props.children}
            <p>Age: </p>
        </div>
    )
}
reactDom.render(< Profile><p>This is tunik hand workx</p></ Profile>, document.getElementById('app'))