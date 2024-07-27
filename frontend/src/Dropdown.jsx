import "./Dropdown.css"
// eslint-disable-next-line react/prop-types
function Dropdown({hidden = true, position}) {
    return (
        <div className = {hidden ? "dropdown hidden" : "dropdown"} style={position}>
            <div className="dropdown-pointer"></div>
            <ul>
               <li><a >Flamingo</a></li> 
               <li><a >Lion</a></li>
               <li><a >Tiger</a></li>
            </ul>
        </div>
    )
}

export default Dropdown