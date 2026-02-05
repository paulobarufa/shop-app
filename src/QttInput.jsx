function QttInput({id, cart, onChange}) {

    return (
        <input
            type="number"
            key={`input${id}`}
            data-id={id}
            min={0}
            max={99}
            step={1}
            value={cart.find((item) => item.id === id).qtt}
            onChange={(e) => onChange(id, e.target.value)}
            className="qtt-input"
        />
    )
}

export default QttInput