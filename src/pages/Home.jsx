function Home() {
    const categories = ["All", "Pop", "Rock", "Chill", "Hip Hop"];

    const playlists = [
        {
            title: "Chill Vibes",
            type: "Playlist",
            image: "🌅",
        },
        {
            title: "Focus Mode",
            type: "Playlist",
            image: "🌿",
        },
        {
            title: "Workout",
            type: "Playlist",
            image: "🎧",
        },
        {
            title: "Late Night",
            type: "Playlist",
            image: "🌙",
        },
    ];

    return (
        <div className="home">

            {/* Header */}
            <header className="home-header">
                <h1>Audify</h1>

                <div className="header-actions">
                    <button className="icon-button">♧</button>
                    <div className="profile-circle">A</div>
                </div>
            </header>


            {/* Greeting */}
            <section className="greeting">
                <p>Good Morning,</p>
                <h2>Music Lover</h2>
                <span>The right music for a brighter day.</span>
            </section>


            {/* Categories */}
            <div className="categories">
                {categories.map((category, index) => (
                    <button
                        key={category}
                        className={`category ${index === 0 ? "active" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>


            {/* Featured Banner */}
            <section className="featured">

                <div className="featured-content">
                    <p>Today's</p>
                    <h2>Top Hits</h2>
                    <span>Updated Daily</span>
                </div>

                <button className="featured-play">
                    ▶
                </button>

                <div className="featured-art">
                    <div className="person-art">
                        ◕
                    </div>
                </div>

            </section>


            {/* Carousel dots */}
            <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>


            {/* For You */}
            <section className="section">

                <div className="section-header">
                    <h2>For You</h2>
                    <button>See All</button>
                </div>

                <div className="playlist-scroll">

                    {playlists.map((playlist) => (
                        <div className="playlist-card" key={playlist.title}>

                            <div className="playlist-image">
                                {playlist.image}
                            </div>

                            <h3>{playlist.title}</h3>
                            <p>{playlist.type}</p>

                        </div>
                    ))}

                </div>

            </section>


            {/* Recently Played */}
            <section className="section recent-section">

                <div className="section-header">
                    <h2>Recently Played</h2>
                    <button>See All</button>
                </div>

                <div className="recent-song">

                    <div className="song-image">
                        🎵
                    </div>

                    <div className="song-info">
                        <h3>Blinding Lights</h3>
                        <p>The Weeknd</p>
                    </div>

                    <button className="song-play">
                        ▶
                    </button>

                    <button className="more-button">
                        ⋯
                    </button>

                </div>

            </section>


            {/* Bottom Navigation */}
            <nav className="bottom-nav">

                <button className="nav-item active">
                    <span>⌂</span>
                    <small>Home</small>
                </button>

                <button className="nav-item">
                    <span>⌕</span>
                    <small>Search</small>
                </button>

                <button className="nav-item">
                    <span>♫</span>
                    <small>Library</small>
                </button>

                <button className="nav-item">
                    <span>♙</span>
                    <small>Profile</small>
                </button>

            </nav>

        </div>
    );
}

export default Home;