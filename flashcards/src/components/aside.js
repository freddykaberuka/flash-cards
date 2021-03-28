import '../App.css'
const Aside = () => {
    return ( 
        <div className="aside-container">
        <div className="aside">
            <h3>Category</h3>
            <p className="level">Data Analysis</p>
            <p className="level">Artificial Intelligence</p>
            <p className="level">Programming</p>
            </div>
            <br/>
            <div className="btn-create"><p className="button" style={{position:"relative",bottom:"0", paddingLeft:"0"}}>create card</p></div>
            
        </div>
     );
}
 
export default Aside;