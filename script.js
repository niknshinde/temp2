// Set the launch date to October 3, 2024 (Year-Month-Day)
const launchDate = new Date('2024-10-03T00:00:00').getTime();

// Update countdown every 1 second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in corresponding HTML elements
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('message').innerHTML = "We're live!";
        document.querySelector('.countdown').style.display = 'none';
    }
}, 1000);
