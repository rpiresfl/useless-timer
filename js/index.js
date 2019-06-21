start();

secondsPassed = minutesPassed = hoursPassed = 0;
timerActive = false;
speed = 1000;
inspirationalQuote = ['Life is about making an impact, not making an income. - Kevin Kruse','Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill','Strive not to be a success, but rather to be of value. - Albert Einstein','Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference. - Robert Frost','I attribute my success to this: I never gave or took any excuse. - Florence Nightingale','You miss 100% of the shots you don’t take. - Wayne Gretzky','I\x27ve missed more than 9000 shots in my career. I\x27ve lost almost 300 games. 26 times I\x27ve been trusted to take the game winning shot and missed. I\x27ve failed over and over and over again in my life. And that is why I succeed. - Michael Jordan','The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart','Every strike brings me closer to the next home run. - Babe Ruth','Definiteness of purpose is the starting point of all achievement. - W. Clement Stone','Life isn\x27t about getting and having, it\x27s about giving and being. - Kevin Kruse','Life is what happens to you while you’re busy making other plans. - John Lennon','We become what we think about. - Earl Nightingale','Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. - Mark Twain','Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll','The most common way people give up their power is by thinking they don’t have any. - Alice Walker','The mind is everything. What you think you become. - Buddha','The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb','An unexamined life is not worth living. - Socrates','Eighty percent of success is showing up. - Woody Allen','Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs','Winning isn’t everything, but wanting to win is. - Vince Lombardi','I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey','Every child is an artist.  The problem is how to remain an artist once he grows up. - Pablo Picasso','You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus','I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou','Either you run the day, or the day runs you. - Jim Rohn','Whether you think you can or you think you can’t, you’re right. - Henry Ford','The two most important days in your life are the day you are born and the day you find out why. - Mark Twain','Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. - Johann Wolfgang von Goethe','The best revenge is massive success. - Frank Sinatra','People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. - Zig Ziglar','Life shrinks or expands in proportion to one\x27s courage. - Anais Nin','If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. - Vincent Van Gogh',];
//Quotes source = https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#1cea0a896c7a
//Stopped at 34.

function start() {
    startTimerButton = document.getElementById('startTimerButton');
    startTimerButton.onclick = startTimer;
    stopTimerButton = document.getElementById('stopTimerButton');
    stopTimerButton.onclick = stopTimer;
    speedRadio = document.getElementById('radioDiv');
    speedRadio.onclick = selectSpeed;
}

function selectSpeed() {
    speedClicked = event.target;
    switch(speedClicked.id) {
        case '1': speed = 10000; break;
        case '2': speed = 1000; break;
        case '3': speed = 100; break;
        case '4': speed = 10; break;
    }
}

function startTimer() {
    if (!timerActive) {
        speedRadio.className = 'disableInteraction';
        interval = setInterval(updateSeconds, speed);
        quoteInterval = setInterval(randomQuote, 10000);
        timerActive = true;
    }
}

function stopTimer() {
    if (timerActive) {
        speedRadio.className = '';
        clearInterval(interval);
        clearInterval(quoteInterval);
        timerActive = false;
    }
}

function updateSeconds() {
    secondsPassed++;
    document.getElementById('seconds').innerText = secondsPassed;
    randomNumber();
    if (secondsPassed%60===0) updateMinutes();
}

function updateMinutes() {
    minutesPassed++;
    document.getElementById('minutes').innerText = minutesPassed;
    if (minutesPassed%60===0) updateHours();
}

function updateHours() {
    hoursPassed++;
    document.getElementById('hours').innerText = hoursPassed;
}

function randomNumber() {
    document.getElementById('randomNumber').innerText = Math.floor((Math.random() * secondsPassed) + 1);
}

function randomQuote() {
    var randomNumber = Math.floor(Math.random() * inspirationalQuote.length);
    document.getElementById('quote').innerText = inspirationalQuote[randomNumber];
}