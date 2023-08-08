var instance = new vidbg(".video", {
    mp4: "video/world.mp4", // Url or relative path to Mp4 video
    webm: "video/world.webpm", // Url or relative path to webm video
    poster: "", // Url or relative path to fallback
    overlay: false, // Boolean to display the overlay ot not
}); 
var rellax = new Rellax('.rocket');
if (document.body.clientWidth < 576) {
    rellax.destroy();
}
AOS.init();