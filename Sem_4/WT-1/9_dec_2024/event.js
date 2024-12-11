const event=require('events')

class MyEmitter extends event{};

const ticker=new MyEmitter();

ticker.on("videouploaded",()=>{
    console.log('Video Uploaded');
})

setInterval(()=>{
  ticker.emit("videouploaded");  
},1000)