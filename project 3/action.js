const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// promt to select media stream
async function selectMediaStream() {
    try{
      const mediaStram = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStram;
      videoElement.onloadedmetadata = () => {
        videoElement.onplay();
      }
 }catch(error) {
       
        
    }
}
button.addEventListener('click',async () =>{
    // disable tha butten 
    button.disabled = true;
    // start Picture in Picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
})
// on load
selectMediaStream();