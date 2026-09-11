function PlaylistCard({ title, type, image }) {
    return (
        <div className="playlist-card">

            <div className="playlist-image">
                {image}
            </div>

            <h3>{title}</h3>

            <p>{type}</p>

        </div>
    );
}

export default PlaylistCard;