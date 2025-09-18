document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (href && href.includes('.html')) {
                window.location.href = href;
            }
        });
    });

    const audioElement = document.getElementById('song-audio');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        const songs = ['elg6.mp3', 'elg7.mp3'];
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        audioElement.src = randomSong;
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });
});
