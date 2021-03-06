import React from 'react'
import Main from './components/Main'
import User from './components/User'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'Max'
        }
    }

    changeUsername=(newName)=>{
        this.setState({
            username:newName
        })
    }
    render(){
        return(
            <div>
               <Main changeUsername={this.changeUsername}/> 
               <User username={this.state.username}/>
            </div>
        );
    }
}

export default App