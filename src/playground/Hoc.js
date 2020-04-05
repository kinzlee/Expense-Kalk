import React from 'react';
import ReactDom from 'react-dom';
const Info = (props) => {
    return (
    <div>
        <h1>Title goes here</h1>
        <p> the inormation you need to know is  :{props.information} </p>
    </div>
    );
}

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => {
//         return  (
//             <div>
//                 {props.isAdmin && <p> this is the sign up sectionNN }
//                 <WrappedComponent {...props}/>
//             </div>
//         )
//     }
// }

const AuthenticationMessage = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
            {props.isAuthenticated && <p> this is the sign up section for you to register</p>}
            <WrappedComponent {...props}/>
            </div>
        )
    }
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = AuthenticationMessage(Info);


// ReactDom.render(<AdminInfo information="the information is you know it" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} Authenticated="Register to continue to application" />, document.getElementById('app'));
