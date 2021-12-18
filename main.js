const btn = document.getElementById('btn'),
    btn2 = document.getElementById('btn2'),
    video = document.getElementById('video'),
    video2 = document.getElementById('video2'),
    textbox = document.getElementById('textBox')

//     innerScreenHeight = window.innerHeight;
// document.querySelector(".info").style.top = innerScreenHeight + "px";



btn.addEventListener('click', play)
function play() {
    if (textbox.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'يا عاااام',
            text:'اكتب حاجة يسطا'
        })
    } else {
        video.classList.remove('hide');
        video.autoplay = true;
        video.load();
    }

}
btn2.addEventListener('click', () => {
    video2.classList.remove('hide');
    video2.autoplay = true;
    video2.load();
})

function videoEnd() {
    video.classList.add('hide')
    video2.classList.add('hide')
    textbox.value = ''
}
