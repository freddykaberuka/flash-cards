const Buttons = () => {
    return ( 
        <div className="buttons">
            <div className="done"><input type="check"style={{width:"15px"}}/>Solved</div>
            <div className="prev">prev</div>
            <div className="reset">reset</div>
            <div className="next">next</div>
        </div>
     );
}
 
export default Buttons;