import PropTypes from "prop-types";
import uniqid from 'uniqid';
import { cards } from "./cards.js";

export default function ProjectList({selectedFilter}) {
    const filteredCards = cards.filter(card => {
        return (selectedFilter == 'All' || card.category == selectedFilter) 
    });

    return (
        <div className="project-list">
            {filteredCards.map(filteredCard => {
            return (
                <img 
                key={uniqid()}
                src={filteredCard.img} 
                className={filteredCard.category} />
            )
            })}
        </div>
    )
}

ProjectList.propTypes = {
    selectedFilter: PropTypes.string,
};