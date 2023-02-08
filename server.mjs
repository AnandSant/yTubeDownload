import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

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