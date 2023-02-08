import express from express.js

const app = express();

const port = process.env.PORT || 2023;

app.use(cors());
app.listen(port, function(){
    // console.log('Server runs at 4000');
});

app.get('/download', (req,res) => {
    var responseUrl = req.query.URL;
    //res.json({url:responseUrl});
    res.header('Content-Disposition', `attachment; filename="video.mp4"`);

    ytdl(responseUrl, {
        format: 'mp4'
    }).pipe(res);
});
