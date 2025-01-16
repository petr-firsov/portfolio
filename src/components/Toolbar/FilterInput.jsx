import PropTypes from "prop-types"

export function FilterInput({filter, selected, checkRadio}) {
    return (
        <div className="filter">
                <input 
                type="radio" 
                className='filter-radioBtn'
                id={filter}
                checked={filter == selected} 
                onChange={checkRadio}/>
            <label className="filter-label" htmlFor={filter}>
                {filter}
            </label>
        </div>
    )
}

FilterInput.propTypes = {
    filter: PropTypes.string,
    selected: PropTypes.string,
    checkRadio: PropTypes.func,
}