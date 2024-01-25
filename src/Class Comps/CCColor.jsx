import { Component } from "react";

export default class CCColor extends Component{

    state={
        color: 'white'
    };

    chngColor = (newColor)=>{
        console.log(newColor); //.בדיקה שמגיע לפונקציה
        this.setState({color: newColor});
    }


    render(){
        return(
            <div style={{
                backgroundColor : this.state.color,                
                padding: 20,
                paddingLeft:10,
                paddingRight:10
            }}>
                <button style={{margin:10}} onClick={()=>this.chngColor('blue')}>Blue</button>
                <button style={{margin:10}} onClick={()=>this.chngColor('green')}>Green</button>
                <button style={{margin:10}} onClick={()=>this.chngColor('pink')}>Pink</button>
                <button onClick={()=>this.chngColor('red')}>Red</button><br/><br/>
                <button style={{margin:10}} onClick={()=>this.chngColor('orange')}>Orange</button>
                <button style={{margin:10}} onClick={()=>this.chngColor('black')}>Black</button>
                <button style={{margin:10}} onClick={()=>this.chngColor('purple')}>Purple</button>
                <button onClick={()=>this.chngColor('brown')}>Brown</button>
            </div>
        );
    }
}