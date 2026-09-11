import { useState } from "react";
import PlaylistCard from "../components/PlaylistCard";
import SongCard from "../components/SongCard";

import { playlists, songs } from "../data/songs";

function Home() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Pop", "Rock", "Chill", "Hip Hop"];

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

                {categories.map((category) => (

                    <button
                        key={category}
                        className={`category ${selectedCategory === category ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
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
                        <PlaylistCard
                            key={playlist.id}
                            title={playlist.title}
                            type={playlist.type}
                            image={playlist.image}
                        />
                    ))}

                </div>

            </section>


            {/* Recently Played */}
            <section className="section recent-section">

                <div className="section-header">
                    <h2>Recently Played</h2>
                    <button>See All</button>
                </div>

                <SongCard
                    title={songs[0].title}
                    artist={songs[0].artist}
                    image={songs[0].image}
                    onPlay={() => console.log("Play:", songs[0].title)}
                />

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