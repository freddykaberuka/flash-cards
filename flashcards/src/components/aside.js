import '../App.css'
import AdCard from './Card/adCard'
const Aside = () => {
    return ( 
        <div className="aside-container">
        <div className="aside">
            <h3>Category</h3>
            <ul >
                <li className="level">Data Analysis</li>
                <li className="levelo">Programming</li>
                <li className="levelo">Penetration Testing</li>
            </ul>
            </div>
            <br/>
            <div className="asideForm"><AdCard /></div>
        </div>
     );
}
 
export default Aside;