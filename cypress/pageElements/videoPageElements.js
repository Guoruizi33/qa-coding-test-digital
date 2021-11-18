const videoPageElement ={

    videoList: ".fiso-video-mosaic__main ul",
    videoItem: videoName => {
        return `[aria-label="Video: ${videoName}"]`;
    },
    playControlButton: '.fiso-video-wrapper-overlay button.vjs-play-control'
}

export default videoPageElement;