import "./styles/weeksspecials.css";

const WeeksSpecials = () => {
    const Menu = [
        {
            id: 1,
            imageUrl: "src/assets/greek salad.jpg",
            alt: "greek salad",
            dishName: "Greek Salad",
            price: "$12.99",
            desc: "Greek dolor sit amet consectetur, adipisicing elit. Tempora facere quia ad unde accusamus sequi.",
        },
        {
            id: 2,
            imageUrl: "src/assets/bruchetta.png",
            alt: "bruchetta",
            dishName: "Bruchetta",
            price: "$5.99",
            desc: "Bruchetta ipsum dolor sit amet consectetur, adipisicing elit. Tempora facere quia ad unde accusamus sequi.",
        },
        {
            id: 3,
            imageUrl: "src/assets/lemon dessert.jpg",
            alt: "lemon dessert",
            dishName: "Lemon Dessert",
            price: "$5.00",
            desc: "Lemon orem ipsum dolor sit amet consectetur, adipisicing elit. Tempora facere quia ad unde accusamus sequi.",
        },
    ];

    return (
        <div className="weeks-specials_wrapper" id="menu">
            <div className="title-and-online_btn">
                <h1 className="section-title">This weeks specials!</h1>
                <button className="online-menu_btn">Online Menu</button>
            </div>

            <div className="menu-cards">
                {Menu.map((item) => (
                    <div className="menu-card" key={item.id}>
                        <div className="food-item_card">
                            <img src={item.imageUrl} alt={item.alt} />

                            <div className="food-title-and-price">
                                <h4 className="food-item-name">
                                    {item.dishName}
                                </h4>
                                <h5 className="food-item-price">
                                    {item.price}
                                </h5>
                            </div>

                            <p className="food-item-desc">{item.desc}</p>

                            <p className="action-btn">
                                Order a delivery &nbsp;🛵 📦
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeksSpecials;
