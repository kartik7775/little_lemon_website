import "./styles/testimonials.css";

const Testimonials = () => {
    const Testimonials = [
        {
            id: 1,
            rating: 4.5,
            avatar: "https://i.pravatar.cc/300",
            custName: "Harry P.",
            review: "Mem ipsum dolor  elit. Perferendis..",
        },
        {
            id: 2,
            rating: 5,
            avatar: "https://i.pravatar.cc/301",
            custName: "Naina G.",
            review: "Pidolor  elit. Perferendis, laborum.",
        },
        {
            id: 3,
            rating: 4.5,
            avatar: "https://i.pravatar.cc/302",
            custName: "Roberto M.",
            review: "Lipsum  elit. Perferendis, yumm .",
        },
        {
            id: 4,
            rating: 5,
            avatar: "https://i.pravatar.cc/299",
            custName: "Rehaman A.",
            review: "Boluk revaw  elit, laborum tenetur.",
        },
    ];

    return (
        <div className="testimonials-section_wrapper">
            <div className="testimonials-background"></div>

            <h1 className="section-heading">Testimonials</h1>

            <div className="review-cards">
                {Testimonials.map((testi) => (
                    <div className="review-card" key={testi.id}>
                        <p className="rating"> ⭐ {testi.rating} </p>
                        <div className="avatar-and-name">
                            <img
                                src={testi.avatar}
                                alt={testi.name}
                                className="avatar"
                            />
                            <p className="customer-name">{testi.custName}</p>
                        </div>
                        <p className="review-text">{testi.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
