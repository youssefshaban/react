import './App.css';
import React from 'react';
import Profile from './components/profile/Profile'

class App extends React.Component {

 constructor() {
        super();
        this.state ={
            name:"youssef shaban",
            count:1
        }
    }

    changeName= ()=>{
        if (this.state.name == 'youssef shaban'){
        this.setState({name:'ahmed'});
    }
        else{
        this.setState({name:'youssef shaban'});
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
                    <p className="p">Welcome {this.state.name} </p>
                    <button onClick={this.changeName} className="btn btn-primary">change name</button><br/>
                    <div> count : {this.state.count}</div>
                    <button onClick={()=>this.changeCount("+")} className="btn btn-primary">increase</button>
                    <button onClick={()=>this.changeCount("-")} className="btn btn-primary">decrease</button>
                    <hr/>
                    <Profile/>
                </div>
              
            </>
        );
    }
}

export default App;
