import PropTypes from "prop-types";
import { FilterInput } from "./FilterInput";

export default function Toolbar({filterNames, selected, onSelectFilter}) {
    return (
        <form className = 'toolbar'>
            {filterNames.map(filterName => {
            return (
                <FilterInput 
                key={filterName}
                filter={filterName} 
                selected={selected}
                checkRadio={onSelectFilter} />
            )})}
        </form>
    )
}

Toolbar.propTypes = {
    filterNames: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
}