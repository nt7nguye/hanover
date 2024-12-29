import { useParams } from 'react-router-dom';

export default function SearchResults() {
    const { query } = useParams();

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            {/* Add your search results content here */}
        </div>
    );
}
