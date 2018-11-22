import React from 'react'


class Main extends React.Component{
    constructor(props){
        super(props)
    }


    

    render(){
        return(
            <div>
                <h1>The Main page</h1>
                <button onClick={()=>this.props.changeUsername('Anna')}>Change the Username </button>
            </div>
        );
    }
}


export default Main 