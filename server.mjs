import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.listen(port, ()=>{
    console.log(`Server runs at ${port}`);
});

app.get('/download', (req,res) => {
    var responseUrl = req.query.URL;
    //res.json({url:responseUrl});
    res.header('Content-Disposition', `attachment; filename="video.mp4"`);

    ytdl(responseUrl, {
        format: 'mp4'
    }).pipe(res);
});


//IMPORTANT Note: Place the below 3 lines of code after APIs only not above them
const __dirname = path.resolve();
// to load any statci file and app.use is used for any requests(GET/POST)

//Since the below code is useful only in windows not in linux systems we need to convert the "\"( of windows) to "/"(linux) using if else and finding the deivice os details etc this can be resolved using path.join() method
//app.use("/", express.static(__dirname+"web\index.html"));
app.get("/", express.static(path.join(__dirname, 'web')));
//Note: path.join will take care of all the OS conversions details and it will look for index.html insdide web directory
app.use("*", express.static(path.join(__dirname, 'web')));







