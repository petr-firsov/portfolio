import { filterNames } from "./filterNames";
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";


export default function Portfolio() {
    const [selectedFilter, setSelectedFilter] = useState('All');

    function selectFilter(e) {
        setSelectedFilter(e.target.id);
    }

    return (
        <div className="portfolio">
            <Toolbar 
            filterNames={filterNames}
            selected={selectedFilter}
            onSelectFilter={selectFilter}
            />
            <ProjectList
            selectedFilter={selectedFilter} />
        </div>
    )
}