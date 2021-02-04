let zenTime = false;
let time = new Date().getHours();
let greeting; 
let quote;

let morning = 7; // 7AM
let noon = 12; // noon
let zen = 14; // 2 PM
let evening = 17; // 5PM
let night = 20; // 8PM

// Greetings
let zenClock = document.getElementById('greeting');
if (time == zen) {
    greeting = 'You are amazing!';
    $('body').css("background-image", "url('imgs/self-care.jpg')");
}
else if (time == morning) {
    greeting = 'Good Morning!';
    $('body').css("background-image", "url('imgs/morning.jpg')");
} else if (time == noon) {
    greeting = 'Good Afternoon!';
    $('body').css("background-image", "url('imgs/midday.jpg')");
} else if (time == evening) {
    greeting = 'Good Evening!';
    $('body').css("background-image", "url('imgs/evening.jpg')");
} else if (time >= night) {
    greeting = 'Good Night!';
    $('body').css("background-image", "url('imgs/night.jpg')");
} else {
    greeting = 'Be Peaceful!';
    $('body').css("background-image", "url('imgs/timeofday.jpg')");
}

// Quotes 
let zenQuote = document.getElementById('quote');
if (time == zen) {
    quote = 'If your compassion does not include yourself, it is incomplete. - Jack Kornfield';
}
else if (time == morning) {
    quote = 'Good morning, make positive thoughts and enjoy every moment of this day!';
} else if (time == noon) {
    quote = 'The greatest weapon against stress is our ability t o choose one thought over another. - Willian James';
} else if (time == evening) {
    quote = 'If you look at what you have in life, you\'ll always have more. - Oprah Winfrey';
} else if (time >= night) {
    quote = 'Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau';
} else {
    quote = 'Life changes very quickly, in a very POSITIVE way, if you let it. - Lindsey Yonn';
}

zenClock.innerText = greeting;
zenQuote.innerText = quote;

// The Clock
morning = 7; // 7AM
noon = 12; // noon
zen = 14; // 2PM
evening = 17; // 5PM
night = 20; // 8PM

time = new Date().getHours();
let updateClock = function() {
    showCurrentTime();
};

let showCurrentTime = function() {
    let clock = document.getElementById('clock');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';

     // Set hours
     if (hours >= noon) {
         meridian = 'PM';
     }
     if (hours > noon) {
         hours = hours - 12;
     }

     // Set minutes
     if (minutes < 10) {
         minutes = '0' + minutes;
     }

     // Set seconds
     if (seconds < 10) {
         seconds = '0' + seconds;
     }

     // Putting it together - time display
     let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
     
     // Invoking function
     clock.innerText = clockTime;
};

// Calling the updated clock
updateClock();

// Incrementing seconds
let oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Clock button and selectors
let zenBtn = document.getElementById('zenBtn');
let wakeup = document.getElementById('wakeup');
let selfcare = document.getElementById('selfcare');
let goodnight = document.getElementById('goodnight');

let zenEvent = function() {
    if (zenTime === false) {
        zenTime = true;
        time = zen;
        zenBtn.innerText = '+ Take Care of You! +';
    } else {
        zenTime = false;
        time = new Date().getHours();
        zenBtn.innerText = '+ Zen Out +'
    }
};

let wakeupEvent = function() {
    wakeup = wakeup.value;
};

let selfcareEvent = function() {
    selfcare = selcare.value;
};

let eveningEvent = function() {
    evening = evening.value;
};


zenBtn.addEventListener('click', zenEvent);
wakeup.addEventListener('change', wakeupEvent);
selcare.addEventListener('change', selfcareEvent);
goodnight.addEventListener('change', eveningEvent)

