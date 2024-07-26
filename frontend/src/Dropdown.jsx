import "./Dropdown.css"
// eslint-disable-next-line react/prop-types
function Dropdown({hidden = true, position}) {
    return (
        <div className = {hidden ? "dropdown hidden" : "dropdown"} style={position}>
            <div className="dropdown-pointer"></div>
            <ul>
               <li><a href="">Flamingo</a></li> 
               <li><a href="">Flamingo</a></li>
            </ul>
        </div>
    )
}

export default Dropdown