import { cards } from "./cards";

export default function Portfolio() {
    return (
        <>
            <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected="All"
            onSelectFilter={(filter) => {console.log(filter);}}/>
            <ProjectList />
        </>
    )
}