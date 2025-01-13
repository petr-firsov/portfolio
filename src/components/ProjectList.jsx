import { cards } from "./cards";

export default function ProjectList({selectedFilter}) {
    const filteredCards = cards.filter(card => {
        if (selectedFilter == 'All') {
            return true
        } else {
            return (card.category == selectedFilter)
        }
    });

    const shownCards = filteredCards.map(filteredCard => {
        return (
            <img 
            key={filteredCard.category}
            src={filteredCard.img} 
            className={filteredCard.category} />
        )
    });

    return (
        <div className="project-list">
            {shownCards}
        </div>
    )
}
