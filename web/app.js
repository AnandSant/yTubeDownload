var downloadBtn = document.querySelector('.download-btn');
var Url = document.querySelector('.inputURL');

downloadBtn.addEventListener('click', ()=> {

    // call to server here
    console.log(Url.value);
    getVideo(Url.value);

});

function getVideo(URL){
    // fetch(`http://localhost:4000/download?URL=${URL}`,{
    //     method:'GET'
    // }).then(res => res.json())
    // .then(json => console.log(json));
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}


// var convertBtn = document.querySelector('.download-btn');
// var URLinput = document.querySelector('.inputURL');
// convertBtn.addEventListener('click', () => {
//     console.log(`URL: ${URLinput.value}`);
//     sendURL(URLinput.value);
// });
// function sendURL(URL) {
//     fetch(`http://localhost:4000/download?URL=${URL}`, {
//         method:'GET'
//     }).then(res => res.json())
//     .then(json => console.log(json));
// }