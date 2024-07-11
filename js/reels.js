window.addEventListener("DOMContentLoaded", () => {
    const reels_data = [
      [
        "./videos/pexel1.mp4",
        "https://i.pravatar.cc/150?img=33",
        "지네비",
        "한강 앞 물소리가 잔잔하게 울려퍼집니다...",
        "음악",
        "한강",
        "10K",
        "225",
      ],
      [
        "./videos/pexel3.mp4",
        "https://i.pravatar.cc/150?img=38",
        "oumnia",
        "시간 여행을 떠나는 길입니다...",
        "음악",
        "덴마크",
        "12K",
        "135",
      ],
      [
        "./videos/pexel4.mp4",
        "https://i.pravatar.cc/150?img=39",
        "Safae",
        "긴 터널 끝에는 어떤 광경이 펼쳐져 있을까요?...",
        "음악",
        "스위스",
        "19k",
        "443",
      ],
    ];
  
    const reelsContainer = document.querySelector(".reelsContainer");
    reels_data.forEach((item) => {
      const reel_div = document.createElement("div");
      reel_div.classList.add("reel");
      reel_div.innerHTML = `
      <video class="video" src="${item[0]}" loop></video>
          <div class="reel__content">
            <div class="reel__sound">
              <img class ="reel__sound__icon" src="./images/volumeUp.png" alt="">
            </div>
            <div class="reel__play">
              <img src="./images/playButton.png" alt="">
            </div>
            <div class="reel__info">
              <div class="reel__profile">
                <img class="reel__profile__img"src="${item[1]}" alt="">
                <span>${item[2]}</span>
                <span class="reel__profile__dot">.</span>
                <button>Follow</button>
              </div>
              <div class="reel__desc">
                ${item[3]}
                <span>더보기</span>
              </div>
              <div class="reel__info__bottom">
                <div class="reel__music">
                  <img src="./images/music.png" alt="">
                  <span>${item[4]}</span>
                </div>
                <div class="reel__river">
                  <img src="./images/map.png" alt="">
                  <span>${item[5]}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="reel__icons">
            <div class="reel__icons__heart">
              <div>
                <img src="./images/alarm.png" alt="">
              </div>
              <p>${item[6]}</p>
            </div>
            <div class="reel__icons__chat">
              <div>
                <img src="./images/chat.png" alt="">
              </div>
              <p>${item[7]}</p>
            </div>
            <div class="reel__icons__message">
              <img src="./images/message.png" alt="">
            </div>
            <div class="reel__icons__bookmark">
              <img src="./images/bookmark.png" alt="">
            </div>
            <div class="reel__icons__dot">
              <img src="./images/showmore.png" alt="">
            </div>
            <div class="reel__icons__profile">
              <img src="${item[1]}" alt="">
            </div>
          </div>
      `;
  
      reelsContainer.appendChild(reel_div);
    });
  
    // video 재생
    const reel = document.querySelectorAll(".reel");
    reel.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("video 재생");
        console.log(item);
        console.log(item.children[0]);
        const video = item.children[0];
        const buttonPlay = item.children[1].children[1];
        buttonPlay.classList.toggle("opacPlay");
        if (buttonPlay.classList.contains("opacPlay")) {
          console.log("video", video);
          video.play();
        } else {
          video.pause();
        }
      });
    });
  
    
    // sound 껏다 켰다 
    // 버블링은 자식 요소가 부모에게 전파되는 거
    // 캡쳐링은 부모의 이벤트가 자식으로 전파되는 것을 의미
    const reelSoundIcon = document.querySelectorAll(".reel__sound__icon");
    reelSoundIcon.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        console.log("sound on/off 버튼 클릭")
        e.stopPropagation(); //이벤트 전파 막기 , 동영상 재생과 뮤트 기능을 동시 출력하면 안되므로
        icon.classList.toggle("volumeMute");
        const video = icon.parentNode.parentNode.parentNode.children[0];
        console.log(icon.parentNode.parentNode.children[0]);
        if (icon.classList.contains("volumeMute")) {
          // 소리가 무음
          video.muted = true;
          icon.src = "./images/volumeMute.png";
        } else {
          // 소리가 유음
          video.muted = false;
          icon.src = "./images/volumeUp.png";
        }
      });
    });
  });
  
