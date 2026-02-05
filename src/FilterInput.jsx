
function FilterInput({name, title, state, onChange}) {

    return (
        <>
            <input type="checkbox" name={name} checked={state} onChange={onChange}/>
            <label for="huey">{title}</label>
        </>
    )
}

export default FilterInput