import Offer1 from '../images/offer-banner-1.jpg'
import Offer2 from '../images/offer-banner-2.jpg'
import '../styles/offer.css'
import { useState, useEffect } from 'react';
const Offer = () => {


    const endTime = new Date('18 october,2024 20:35:00').getTime();
    const [currentTime, SetCurrentTime] = useState(Date.now());
   





    useEffect(() => {
        const updateCountDown = () => {

            const timeGap = endTime - currentTime;

            const seconds = 1000;
            const minutes = seconds * 60;
            const hours = minutes * 60;
            const days = hours * 24;

            const remainingDays = Math.floor(timeGap / days);
            const remainingHours = Math.floor((timeGap % days) / hours);
            const remainingMinutes = Math.floor((timeGap % hours) / minutes);
            const remaningSeconds = Math.floor((timeGap % minutes) / seconds);

            let displayDays = remainingDays < 10 ? '0' + remainingDays : remainingDays;
            let displayhours = remainingHours < 10 ? '0' + remainingHours : remainingHours;
            let displayMinutes = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
            let displaySeconds = remaningSeconds < 10 ? '0' + remaningSeconds : remaningSeconds
            const formatCurrentTime = `${displayDays}:${displayhours}:${displayMinutes}:${displaySeconds}`;
            // setCountDown(formatCurrentTime);
            const countDownElement = document.getElementById("count-down");

            if (countDownElement) {
                countDownElement.innerHTML = formatCurrentTime; 
            }
            if (timeGap <= 0) {
                clearInterval(interval); 
              
                countDownElement.innerHTML = "00:00:00:00";
            }
        }
        
        const interval = setInterval(()=>{
            SetCurrentTime(Date.now())
        });
        updateCountDown();

        return () => clearInterval(interval);
    }, [currentTime,endTime]);
    return (
        <>
            <div id="offer">
                <div className="offer-container">
                    <div className="offer-deatil-container">
                        <div className="img-container">
                            <img src={Offer1} alt="offer1-icon" className="offer1-icon" />
                        </div>
                    </div>
                    <div className="offer-deatil-container">
                        <div className="img-container">
                            <img src={Offer2} alt="offer1-icon" className="offer2-icon" />
                        </div>
                    </div>
                    <div className="offer-deatil-container">
                        <div className="offer-details">
                            <p>Special Offer
                                -20%</p>
                            <h1>Mountain Pine Bath Oil</h1>
                            <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <p id="count-down"></p>
                            <button >Get Only $39.00</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer;