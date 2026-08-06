import "./ResultsHeader.css";

function ResultsHeader({ query, totalResults }) {

    return(

        <div className="results-header">

            <h2>

                {query
                ? `Results for "${query}"`
                : "All Dog Breeds"}

            </h2>

            <p>

                {totalResults} breeds found

            </p>

        </div>

    )

}

export default ResultsHeader;