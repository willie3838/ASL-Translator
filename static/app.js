
var button = document.getElementById("button");
var canvas = document.querySelector("#canvas");
var video = document.getElementById("video");

canvas.width = 640;
canvas.height = 480;


var directory = "/Users/williamchan/Documents/side_projects/ASL/Data/asl_data/asl_alphabet_train/asl_alphabet_train"
var target_size = (50, 50)
var target_dims = (50, 50, 1)
var n_classes = 29
var val_frac = 0.1
var batch_size = 64
var data;

function loadVideo(){
    var constraints = { audio: false,
                        video: true};
    navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
    }).catch(function(err){
        console.log("Error");
    })
};






// function createModel(){
//     const model = tf.sequential();

//     model.add(tf.layers.conv2d({
//         inputShape: target_dims,
//         kernelSize: 4,
//         strides: 1,
//         activation: 'relu'
//     }));
//     model.add(tf.layers.maxPooling2d({poolSize: [2,2], strides: [2,2]}));
//     model.add(tf.layers.Dropout(0.5))

//     model.add(tf.layers.conv2d({
//         inputShape: target_dims,
//         kernelSize: 4,
//         strides: 1,
//         activation: 'relu'
//     }));
//     model.add(tf.layers.maxPooling2d({poolSize: [2,2], strides: [2,2]}));
//     model.add(tf.layers.Dropout(0.5))

//     model.add(tf.layers.conv2d({
//         inputShape: target_dims,
//         kernelSize: 4,
//         strides: 1,
//         activation: 'relu'
//     }));
//     model.add(tf.layers.maxPooling2d({poolSize: [2,2], strides: [2,2]}));
//     model.add(tf.layers.flatten());
//     model.add(tf.layers.dropout(0.5));

//     model.add(tf.layers.dense({units: 512, activation: 'relu'}));
//     model.add(tf.layers.dense({units: n_classes, activation='softmax'}));

//     model.compile({
//         optimizer: tf.train.adam(),
//         loss: 'categoricalCrossentrop',
//         metrics: ['accuracy'],
//     });

//     return model;
// }


// JavaScript


// const model = await tf.loadLayersModel('https://Users/williamchan/Documents/side_projects/ASL/Model/model.json');

// navigator.getUserMedia = 
// navigator.getUserMedia ||
// navigator.webkitGetUserMedia ||
// navigator.mozGetUserMedia ||
// navigator.msGetUserMedia;

// const video = document.querySelector('#video');
// const canvas = document.querySelector('#canvas');
// const context = canvas.getContext('2d');
// const modelParams = {
//     flipHorizontal: true,   // flip e.g for video 
//     imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
//     maxNumBoxes: 20,        // maximum number of boxes to detect
//     iouThreshold: 0.5,      // ioU threshold for non-max suppression
//     scoreThreshold: 0.79,    // confidence threshold for predictions.
// }
// let model;


// startVideo(video)
//     .then(status=>{
//         if(status){
//             navigator.getUserMedia({video: {}}, stream=>{
//                 video.srcObject = stream;
//                 //setInterval(runDetection,1);
//             },
//             err=> console.logg(err)
//             );
//         }
//     })

// function runDetection(){
//     model.detect(video)
//         .then(predictions => {
//             console.log(predictions);
//             model.renderPredictions(predictions, canvas, context, video)
           
//         });
// }

// handTrack.load(modelParams)
//     .then(lmodel => {
//         model = lmodel;
//     });
