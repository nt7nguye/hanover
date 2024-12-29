import { useParams } from 'react-router-dom';
import styles from './SearchResults.module.css';

interface SearchResult {
    title: string;
    url: string;
    description: string;
}

export default function SearchResults() {
    const { query } = useParams();

    // Mock data - replace with actual API call later
    const results: SearchResult[] = [
        {
            title: 'Howdy',
            url: 'howdy.tamu.edu',
            description:
                'Howdy is a comprehensive web portal connecting students, applicants, faculty, staff, parents and former students to their web-based services at Texas A&M',
        },
        {
            title: 'Connecting you to Texas A&M',
            url: 'tamu.edu/connect',
            description:
                'Central hub for all Texas A&M connections and services',
        },
        // Add more mock results as needed
    ];

    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                <h1>{query}</h1>
                <button className={styles.editQuery}>Edit Query</button>
            </div>

            <div className={styles.resultsSection}>
                <h2>Sources</h2>
                {results.map((result, index) => (
                    <div key={index} className={styles.resultCard}>
                        <h3>
                            <a href={result.url} className={styles.resultTitle}>
                                {result.title}
                            </a>
                        </h3>
                        <span className={styles.resultUrl}>{result.url}</span>
                        <p className={styles.resultDescription}>
                            {result.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
