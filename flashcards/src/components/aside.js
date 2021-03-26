import '../App.css'
const Aside = () => {
    return ( 
        <div className="aside-container">
        <div className="aside">
            <h3>Category</h3>
            <p className="level">level 1</p>
            <p className="level">level 2</p>
            <p className="level">level 3</p>
            <p className="level">level 4</p>
            </div>
            <br/>
            <div className="btn-create"><p className="button" style={{position:"relative",bottom:"0", paddingLeft:"0"}}>create card</p></div>
            
        </div>
     );
}
 
export default Aside;