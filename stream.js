const { on } = require("events");
const fs = require("fs");
const server =  require("http").createServer();

server.on("request", (req,res) => {
    // fs.readFile("text.txt", (err,data) => {
    //     res.end(data);

    // });
   const readable = fs.createReadStream("textfile.txt");
   readable.on("data", chunks => {
     res.write(chunks);  
   });
   readable.on("end", () => {
       res.end();
   });
   readable.on("error", err => {
       console.log(err);
       res,statuscode=500;
       res,end("this movie is not available");
   });
});

server.listen(8000, "127.0.0.1", () => {
    console.log("its working")
});