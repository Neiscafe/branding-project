import './Loading.css'
function Loading() {
    return <div className="loading-container">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}

export default Loading;