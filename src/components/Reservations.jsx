import { useState } from "react";
import "./styles/reservations.css";

const Reservations = () => {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        bookingConfirmation();
    };

    const bookingConfirmation = () => {
        alert(
            `Reservation confirmed for ${guests} guests on ${date} at ${time} `
        );
        setDate("");
        setGuests("");
        setOccasion("");
        setTime("");
    };

    return (
        <>
            <div className="reservations-container">
                <div className="header">
                    <h1 className="">Reservations</h1>
                    <p className="">
                        Now you can book one or more tables as per your
                        occasion..
                    </p>
                </div>

                <div className="form-field">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Date</label>
                        <input
                            type="date"
                            id="res-date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />

                        <label htmlFor="res-time">Time</label>
                        <select
                            id="res-time "
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
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
                            required
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />

                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option>Select Occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Business Party</option>
                            <option>Casual Meeting</option>
                            <option>Other Special Occasion</option>
                        </select>

                        <input
                            className="submit-btn"
                            type="submit"
                            value="Make Your reservation"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Reservations;
