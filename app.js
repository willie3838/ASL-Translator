

navigator.getUserMedia = 
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;


handTrack.startVideo(video)
    .then(status=>{
        if(status){
            navigator.getUserMedia({video: {}}, stream=>{
                video.srcObject = stream;
            },
            err=> console.logg(err)
            );
        }
    })
handTrack.load()
    .then(lmodel => {
        model = lmodel;
    });

