import "./styles/hero.css";

const Hero = () => {
    return (
        <>
            <div className="hero-section-wrapper">
               <div className="hero-background"></div>
                <div className="hero-text">
                    <h1 className="brand-title">Little Lemon</h1>
                    <h3 className="restaurant-location">Chicago</h3>
                    <p className="description-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem, vero. Repellendus aut autem commodi a, animi id
                        eveniet laudantium. Perspiciatis deserunt.
                    </p>
                    <button className="reserve-button">Reserve a Table</button>
                </div>

                <div className="hero-image">
                    <img
                        src="src\assets\restauranfood.jpg"
                        alt="restaurant-food"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
