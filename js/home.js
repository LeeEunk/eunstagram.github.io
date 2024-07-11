window.addEventListener("DOMContentLoaded", () => {
 

    // 홈 포스트 리스트
    const post_data = [
      [
        "https://i.pravatar.cc/500?img=1",
        "엘사",
        10,
        "https://i.pravatar.cc/500?img=1",
        150,
        "오늘은 감사한 마음으로 시작해봅시다. 작은 기쁨들이 큰 행복을 만들어내는 걸 잊지 말아요....",
        1,
      ],
      [
        "https://i.pravatar.cc/500?img=2",
        "로빈",
        11,
        "https://i.pravatar.cc/500?img=2",
        150,
        "아침에 창문을 열고 새로운 하루를 맞이했어요. 커피 한잔과 함께 새로운 도전에 대한 기대감이 가득합니다.... ",
        2,
      ],
      [
        "https://i.pravatar.cc/500?img=3",
        "아미나",
        1,
        "https://i.pravatar.cc/500?img=3",
        350,
        "자기계발의 중요성을 깨달았어요. 지금 내가 하는 일들이 나를 더 나아지게 만들고 있어요. 함께 나아가요! ... ",
        3,
      ],
      [
        "https://i.pravatar.cc/500?img=4",
        "아앨",
        200,
        "https://i.pravatar.cc/500?img=4",
        150,
        "최근 읽은 책에서 마음에 와 닿는 인용구를 발견했어요. '어제보다 나은 오늘을 만들기 위해 노력하자.... ",
        4,
      ],
      [
        "https://i.pravatar.cc/500?img=5",
        "아마인",
        40,
        "https://i.pravatar.cc/500?img=5",
        150,
        "도시의 소리, 사람들의 웃음소리, 모든 것이 나를 살아있게 만들어줘. 일상의 아름다움을 느낄 수 있어 행복해... ",
        5,
      ],
    ];

    const posts = document.querySelector(".secondContainer__posts");
    for (let i =0; i < post_data.length; i++){
      const post_div = document.createElement("div");
      post_div.classList.add("secondContainer__post");
      post_div.innerHTML = `
      <div class="secondContainer__info">
                <div class="secondContainer__person">
                  <img src="${post_data[i][0]}" alt="">
                  <a href="">${post_data[i][1]}</a>
                  <span class="secondContainer__circle">.</span>
                  <span class="secondContainer__location">${post_data[i][2]}m</span>
                </div>
                <div class="secondContainer__more">
                  <img src="./images/showmore.png" alt="">
                </div>
              </div>
              <div class="secondContainer__image">
                <img src="${post_data[i][3]}" alt="">
              </div>
              <div class="secondContainer__desc">
                <div class="secondContainer__icons">
                  <div class="secondContainer__icon_left">
                    <div class="secondContainer__like">
                      <img class="secondContainer__loved" src="./images/alarm.png" alt="">
                      <img class="secondContainer__not_loved" src="./images/heart.png" alt="">
                    </div>
                    <div class="secondContainer__chat">
                      <button>
                        <img class="secondContainer__chat__img" src="./images/chat.png" alt="">
                      </button>
                    </div>
                    <div class="secondContainer__send">
                      <button>
                        <img class="secondContainer__send__img" src="./images/message.png" alt="">
                      </button>
                    </div>
                  </div>
                  <div class="secondContainer__save">
                    <img class="secondContainer__bookmark" src="./images/bookmark.png" alt="">
                    <img class="secondContainer__bookmark_black" src="./images/bookmark_black.png" alt="">
                  </div>
                </div>
                <div class="secondContainer__liked">
                  <a class="secondContainer__bold" href="">${post_data[i][4]}좋아요</a>
                </div>
                <div class="secondContainer__post_desc">
                  <p class="secondContainer__content">
                    <a class="secondContainer__name" href="">${post_data[i][1]}</a>
                    ${post_data[i][5]}
                  </p>
                  <p class="secondContainer__loadMoreCon">
                    <a href="" class="secondContainer__loadMore">댓글 ${post_data[i][6]}개 더보기</a>
                  </p>
                  <input type="text" placeholder="댓글 입력하기...">
                </div>
              </div>
    `;
    posts.appendChild(post_div);
    }

    const bookmark = document.querySelectorAll(".secondContainer__save");
    bookmark.forEach((icon) => {
      icon.addEventListener("click", () => {
        const notSaved = icon.children[0];
        const saved = icon.children[1];
        console.log("click ;;;; bookmark!");
        notSaved.classList.toggle("display");
        saved.classList.toggle("hide_img");
      });
    });
  });
  
