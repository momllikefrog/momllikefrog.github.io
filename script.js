// 動態添加圖片到跑馬燈
const marqueeTrack = document.querySelector('.marquee-track');

// 如果需要動態加載更多圖片，可使用此代碼
const images = ['photo6.jpg', 'photo7.jpg', 'photo8.jpg']; // 新的圖片文件
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Photo ${src}`;
    marqueeTrack.appendChild(img);
});
