const thumbnails = document.querySelectorAll('.thumbnail'); // 썸네일 이미지 요소 선택
const iframes = document.querySelectorAll('.video-frame'); // iframe 요소 선택

thumbnails.forEach((thumbnail, index) => {
    const videoId = thumbnail.getAttribute('data-video-id'); // 썸네일에서 비디오 ID 가져오기

    // 마우스 오버 시 동영상 재생
    thumbnail.addEventListener('mouseenter', () => {
        iframes[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); // 비디오 재생
    });

    // 마우스 아웃 시 동영상 정지
    thumbnail.addEventListener('mouseleave', () => {
        iframes[index].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); // 비디오 정지
    });
});