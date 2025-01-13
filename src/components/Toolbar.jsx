function FilterInput({filter, selected, checkRadio}) {
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

export default function Toolbar({filterNames, selected, onSelectFilter}) {

    const filters = filterNames.map(filterName => {
            return (
                <FilterInput 
                key={filterName}
                filter={filterName} 
                selected={selected}
                checkRadio={onSelectFilter} />
            )
    });

    return (
        <form className = 'toolbar'>
            {filters}
        </form>
    )
}