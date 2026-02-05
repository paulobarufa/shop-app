import "./styles/FilterInput.css"

function FilterInput({name, title, state, onChange}) {

    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" name={name} checked={state} onChange={onChange}/>
            <label for="huey">{title}</label>
        </div>
    )
}

export default FilterInput