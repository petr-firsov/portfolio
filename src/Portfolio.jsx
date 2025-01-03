import { cards } from "./cards";
import { filterNames } from "./filterNames";
import { useState } from "react";

function Toolbar({filterNames, selected, onSelectFilter}) {
    const filters = filterNames.map(filterName => {
        if (filterName == selected) {
            return (
                <div className="filter">
                        <input 
                        type = "radio" 
                        id = {filterName} 
                        key = {filterName}
                        className = 'filter-checkbox'
                        name = "filter" 
                        defaultChecked
                        />
                    <label className="filter-label">
                        {filterName}
                    </label>
                </div>
            )
        } else {
            return (
                <div className = "filter">
                    <label className="filter-label">
                        <input type = "radio" 
                        id = {filterName} 
                        key = {filterName} 
                        className = 'filter-checkbox'
                        name = "filter" />
                        {filterName}
                    </label>
                </div>
            )
        }
});

    return (
        <form 
        className = 'toolbar'
        onChange = {onSelectFilter}>
            {filters}
        </form>
    )
}

function ProjectList({selectedFilter}) {
    const shownCards = cards.map(card => {
        if (selectedFilter === 'All' || card.category === selectedFilter)  {
            return (
                <img 
                src = {card.img} 
                className = {card.category} />
            )
        } 
    });

    return (
        <div className = "project-list">
            {shownCards}
        </div>
    )
}


export default function Portfolio() {
    let [selectedFilter, setSelectedFilter] = useState('All');

    function selectFilter(e) {
        setSelectedFilter(selectedFilter = e.target.id);
    }

    return (
        <div>
            <Toolbar 
            filterNames = {filterNames}
            selected = {selectedFilter}
            onSelectFilter = {selectFilter}
            />
            <ProjectList
            selectedFilter = {selectedFilter} />
        </div>
    )
}