import { useState } from "react";
import "./styles/reservations.css";
import BookingConfirmation from "./BookingConfirmation";

const Reservations = () => {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDate = setDate();
        const guestCount = setGuests();
        bookingConfirmation();
    };

    const bookingConfirmation = () => {
        return (
            <BookingConfirmation date={date} guests={guests} />
        )
    }

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

{/* {bookingConfirmation && <BookingConfirmation />} */}

                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Select date</label>
                        <input
                            type="date"
                            id="res-date"
                            required
                            onChange={(e) => setDate(e.target.value)}
                        />

                        <label htmlFor="res-time">Select time</label>
                        <select id="res-time " required>
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
                            onChange={(e) => setGuests(e.target.value)}
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
                            className="submit-btn"
                            type="submit"
                            defaultValue="Make Your reservation"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Reservations;
