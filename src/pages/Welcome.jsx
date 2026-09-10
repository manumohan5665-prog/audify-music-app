function Welcome() {
    return (
        <div className="welcome">
            <div className="logo">
                <div className="logo-symbol">〰</div>

                <h1>Audify</h1>

                <span>MUSIC LIVES HERE</span>
            </div>

            <div className="welcome-content">
                <h2>
                    Play Your <span>World</span>
                </h2>

                <p>
                    Listen. Discover. Feel.
                    <br />
                    All in one place.
                </p>

                <button>
                    Get Started
                    <span>→</span>
                </button>

                <p className="signin">
                    Already have an account?
                    <span> Sign In</span>
                </p>
            </div>
        </div>
    );
}

export default Welcome;