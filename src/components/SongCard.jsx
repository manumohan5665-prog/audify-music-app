function SongCard({ title, artist, image, onPlay }) {
    return (
        <div className="song-card">

            <div className="song-image">
                {image}
            </div>

            <div className="song-info">
                <h3>{title}</h3>
                <p>{artist}</p>
            </div>

            <button
                className="song-play"
                onClick={onPlay}
            >
                ▶
            </button>

            <button className="more-button">
                ⋯
            </button>

        </div>
    );
}

export default SongCard;