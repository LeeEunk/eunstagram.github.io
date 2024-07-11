window.addEventListener('DOMContentLoaded', () => {
    function createMenuItem(text, href, imgSrc, className, id){
        const menuContainer = document.querySelector(".nav__menu__container");
        
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const image = document.createElement("img");
        const span = document.createElement("span");

            listItem.appendChild(link);
            link.appendChild(image);
            link.appendChild(span);

            menuContainer.appendChild(listItem);

            if(id) {
                listItem.id = id;
            }
        
            link.href = href;
            link.className = className;
            image.src = imgSrc;
            span.textContent = text;
    }

    function createDropMenuItem(text, href, imgSrc, classNameLi, classNameA) { 
        const dropMenuContainer = document.querySelector(".nav__more__dropdownMenu");
        
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const span = document.createElement("span");
        const image = document.createElement("img");

        listItem.appendChild(link);
        link.appendChild(span);
        link.appendChild(image);

        listItem.className = classNameLi; 
        link.className = classNameA;
        link.href = href;
        image.src = imgSrc;
        span.textContent = text;
        dropMenuContainer.appendChild(listItem);

    };



    createMenuItem("홈","home.html", "./images/house.png", "nav__menu__a");
    createMenuItem("검색", "#", "./images/search.png", "nav__menu__a","search_icon");
    createMenuItem("탐색", "explore.html", "./images/explore.png", "nav__menu__a");
    createMenuItem("릴스", "reels.html", "./images/video.png", "nav__menu__a");
    createMenuItem("메시지", "message.html", "./images/message.png", "nav__menu__a");
    createMenuItem("알람", "#", "./images/alarm.png", "nav__menu__a","notification__icon");
    createMenuItem("글쓰기", "#", "./images/write.png", "nav__menu__a","nav__menu__modal");
    createMenuItem("프로필", "profile.html", "https://i.pravatar.cc/150?img=33", "nav__menu__a");
    

    // load more rendering
    createDropMenuItem("환경설정", "#", "./images/setting.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("나의활동", "#", "./images/activity.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("찜한목록", "#", "./images/bookmark.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("화면 색상 전환", "#", "./images/moon.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("에러 보고하기", "#", "./images/error.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("계정전환", "#", "./images/account.png", "nav__more__li", "nav__more__dropdownItem");
    createDropMenuItem("로그아웃", "./index.html", "./images/account.png", "nav__more__li", "nav__more__dropdownItem");

    

   // 더보기 로직
   const moreBtn = document.querySelector(".nav__more__btn");
   const dropMenu = document.querySelector(".nav__more__dropdownMenu");
   moreBtn.addEventListener("click", () => {
     dropMenu.classList.toggle("show");
   });

});


