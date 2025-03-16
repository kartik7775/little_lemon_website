const Reservations = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section>
            <div className="container">
                <div className="header">
                    <h1 className="">Reservations</h1>
                    <p className="">
                        Now you can book one or more tables as per your
                        occasion..
                    </p>
                </div>

                <div className="form-field">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" />
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time ">
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                            <option>18:30</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>21:30</option>
                            <option>22:00</option>
                            <option>22:30</option>
                            <option>23:00</option>
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number"
                            placeholder={1}
                            min={1}
                            max={10}
                            id="guests"
                        />
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Business Party</option>
                            <option>Casual Meeting</option>
                            <option>Other Special Occasion</option>
                        </select>
                        <input
                            type="submit"
                            defaultValue="Make Your reservation"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reservations;
