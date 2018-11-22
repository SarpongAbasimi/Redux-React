import React from 'react'


class User extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>The User Page</h1>
                <span>User Name: {this.props.username} </span>
            </div>
        );
    }
}


export default User