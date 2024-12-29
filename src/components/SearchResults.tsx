import { useParams } from 'react-router-dom';
import styles from './SearchResults.module.css';
import { useState, useEffect } from 'react';
import { getJson } from 'serpapi';

interface SearchResult {
    title: string;
    url: string;
    description: string;
}

export default function SearchResults() {
    const { query } = useParams();
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (!query) return;
        const fetchResults = async () => {
            const response = await fetch(
                `https://serpapi.com/api/v1/search?engine=google&q=${query}&api_key=${
                    import.meta.env.VITE_SERP_API_KEY
                }`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            setResults(data.organic);
        };

        fetchResults();
    }, [query]);

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
