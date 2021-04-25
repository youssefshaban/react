import './App.css';
import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state ={
            count:1
        }
    }


    changeCount=(op)=>{
        if(op === '+'){
            this.setState({count:this.state.count+1})
        }else if(op === '-'){
            this.setState({count:this.state.count-1})
        }
    }

    render() {
        return (
            <>
                
                <div className="container"><br/>
                    <div> count : {this.state.count}</div>
                    <button onClick={()=>this.changeCount("+")} className="btn btn-primary">increase</button>
                    <button onClick={()=>this.changeCount("-")} className="btn btn-primary">decrease</button>
                    <hr/>
                </div>
              
            </>
        );
    }
}

export default App;
