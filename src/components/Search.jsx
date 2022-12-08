
import SearchBar from "./SearchBar"
import { Title } from "./styled/Text"


function Search(props) {

    const { data } = props

    return (
        <div>
            <Title>Search page</Title>
            <SearchBar data={data} />
        </div>)
}

export default Search