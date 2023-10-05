import { useState, useEffect } from "react";

export const Calculator = () => {
   
    const [daysLeft, setDaysLeft] = useState(null);

        useEffect(() => {
            const calculateDaysLeft = () => {
                const nextPayDate = new Date();
                const lastPayDate = new Date('2023-09-01');
                const timeDifference = Math.abs(lastPayDate - nextPayDate);
                console.log(timeDifference);
                const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                console.log(daysLeft);
                setDaysLeft(daysLeft);
            };

            calculateDaysLeft();
        }, []);

        return (
            <div class="result">

            <section>
                <div>
                    <label for="lastPayDate">Last paydate:</label>
                    <input id="lastPayDate" name="lastPayDate" type="date"></input>
                </div>

                <div>
                    <label for="nextPayDate">Next paydate:</label>
                    <input id="nextPayDate" name="nextPayDate" type="date"></input>
                </div>
                <button type="submit">Submit</button>
            </section>

            <section>
            <h3>Days left until payday:</h3>
                {daysLeft && <p>{daysLeft}</p>}
            </section>

            </div>
        );

}
