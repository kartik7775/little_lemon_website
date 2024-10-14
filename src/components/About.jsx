import "./styles/about.css";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-section_wrapper">
                <div className="about-text">
                    <h1 className="about-brand-title">Little Lemon</h1>
                    <h3 className="restaurant-location">Chicago</h3>
                    <p className="about-description-text">
                        Norem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem, vero. Repellendus aut autem commodi a, animi id
                        eveniet, Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sapiente eligendi et possimus magnam?
                        Ea, officia. Kaudantium. Perspiciatis deserunt.
                    </p>
                </div>

                <div className="about-image">
                    <div className="front-image">
                        <img
                            src="src\assets\restaurant.jpg"
                            alt="restaurant-food"
                        />
                    </div>

                    <div className="back-image">
                        <img
                            src="src\assets\restaurant chef B.jpg"
                            alt="restaurant-food"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
