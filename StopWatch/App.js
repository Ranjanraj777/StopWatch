
const clock = document.querySelector(".clock");
let sec = 0,
    min = 0,
    hr = 0,
    intervalid;
const startStopwatch = () => {


    intervalid = setInterval(() => {

        if (sec < 59) {
            sec++;

        }
        else if (min >= 59) {
            hr++;
            min = 0;

        }
        else {
            sec = 0;
            min++;
        }

        const second = String(sec).padStart(2, "0");
        const minute = String(min).padStart(2, "0");
        const hour = String(hr).padStart(2, "0");

        // console.log(`${hr},${min},${sec}`);

        clock.innerText = (`${hour},${minute},${second}`);

    }, 1000);


    // return sec++;

};
// startStopwatch();




const stopStopwatch = () => {

    clearInterval(intervalid);

};