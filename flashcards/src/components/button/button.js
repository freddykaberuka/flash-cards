import React, { Component } from 'react';
import './button.css';

class NextBtn extends Component{
    constructor(props){
        super(props);
        this.nextBtn = this.nextBtn.bind(this);

    }
    nextBtn(){
        this.props.nextBtn();
    }
     
    render(props){
        return(
            <div className="buttons">
                {/* <div className="buttonContainer" style={{width:"100%"}}>
                <input type="checkBox" className="btn-done" onClick={this.nextBtn} value={"Done"} /><label style={{color:"black"}}>Done</label>
            </div> */}
            <div className="buttonContainer">
                <button className="btn-prev" onClick={this.nextBtn} >Prev</button>
            </div>
            <div className="buttonContainer">
                <button className="btn-reset" onClick={this.nextBtn}>reset</button>&nbsp;&nbsp;&nbsp;
            </div>
            <div className="buttonContainer">
                <button className="btn" onClick={this.nextBtn}>Next</button>
            </div>
            </div>
        )
    }
}
export default NextBtn
