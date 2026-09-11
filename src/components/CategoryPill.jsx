function CategoryPill({ name, active, onClick }) {
    return (
        <button
            className={`category ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default CategoryPill;