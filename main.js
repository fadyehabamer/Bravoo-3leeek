const btn = document.getElementById('btn'),
    video = document.getElementById('video'),
    textbox = document.getElementById('textBox'),
          innerScreenHeight = window.innerHeight;
document.querySelector(".info").style.top = innerScreenHeight + "px";



btn.addEventListener('click', play)
function play() {
    if (textbox.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'يا عاااام',
            text: 'هشجعك ازاي و انت مكتبتش حاجه',
        })
    } else {
        video.classList.remove('hide');
        video.autoplay = true;
        video.load();
    }

}

function videoEnd() {
    video.classList.add('hide')
    textbox.value = ''
}
