import "./Dropdown.css"

// eslint-disable-next-line react/prop-types
function Dropdown({hidden = true, position, validation}) {
    const selections = ["Flamingo", "Lion", "Tiger"]
    return (
        <div className = {hidden ? "dropdown hidden" : "dropdown"} style={position}>
            <div className="dropdown-pointer"></div>
            <ul>
                {
                selections.map((item) => (<li><a onClick = {validation(item)}>{item}</a></li>) )
                }
            </ul>
        </div>
    )
}

export default Dropdown

