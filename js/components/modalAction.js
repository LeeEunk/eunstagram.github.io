window.addEventListener("DOMContentLoaded", () => {
    const chatBtn = document.querySelectorAll(".secondContainer__chat__img");
    const addmodalContainer = document.querySelector(".addModalContainer");
    const addModalClose = document.getElementById("addModalClose");
    const dim = document.querySelector(".dim");
    chatBtn.forEach((icon) => {
        icon.addEventListener("click", ()=> {
            console.log("comment click");
            addmodalContainer.classList.toggle("modalOpen");
            dim.classList.toggle("show");
        });
    });

    // optional체이닝은 addModalClose가 있으면 다음 핸들러 함수를 실행하는 것
    addModalClose?.addEventListener("click", ()=> {
        console.log("close click");
        addmodalContainer.classList.remove("modalOpen");
        dim.classList.remove("show");
    });

    const commentMore = document.querySelector(".addModalContainer__show_c");
    const modalResponse = document.querySelector(".addModalContainer__response");
    const modalResponseLeft = document.querySelector(".addModalContainer__response__left");
    const modalResponseRight = document.querySelector(".addModalContainer__response__right");
    commentMore?.addEventListener("click", () => {
        console.log("commentMore: ", commentMore.textContent);
        if(commentMore.textContent === "댓글 더보기") {
            commentMore.textContent = "댓글 숨기기";
            modalResponseLeft.style.display = "block";
            modalResponseRight.style.display = "block";
        } else if (commentMore.textContent === "댓글 숨기기"){
            commentMore.textContent = "댓글 더보기";
            modalResponseLeft.style.display = "none";
            modalResponseRight.style.display = "none";
        }
    });

     // 공유 모달 띄우기
        const shareIcon = document.querySelectorAll(".secondContainer__send__img");
        const sendModal = document.querySelector(".sendModalContainer");
        const sendClose = document.getElementById("sendModalClose");
        shareIcon.forEach((icon) => {
            icon.addEventListener("click", () => {
            sendModal.classList.toggle("show");
            dim.classList.toggle("show");
            });
        });

        sendClose?.addEventListener("click", () => {
            sendModal.classList.remove("show");
            dim.classList.remove("show");
        });

        // 모달에서 dim 클릭 시 닫혀야 함
        dim.addEventListener("click", ()=> {
            console.log("click dim");
            addmodalContainer?.classList.remove("modalOpen");
            sendModal?.classList.remove("show");
            dim.classList.remove("show");
            createModalContainer.classList.remove("show");
        });

        // 글쓰기 모달
        const createModalMobile = document.getElementById("createModalMobile");
        const createModalButton = document.getElementById("nav__menu__modal");
        const createModalContainer = document.querySelector(".createModalContainer");
        const createModalCloseButton = document.getElementById("createModalClose");

        createModalMobile.addEventListener("click", ()=> {
            console.log("mobile용 글쓰기 버튼 클릭");
            dim.classList.toggle("show");
            createModalContainer.classList.toggle("show");
        });

        createModalButton.addEventListener("click", ()=> {
            console.log("글쓰기 클릭");
            dim.classList.toggle("show");
            createModalContainer.classList.toggle("show");
        });

        createModalCloseButton.addEventListener("click", ()=> {
            dim.classList.remove("show");
            createModalContainer.classList.remove("show");
        });

        const createModalH1 = document.querySelector(".createModalContainer__modalHeader__h1");

        const createModalSecondStage = document.querySelector(
            ".createModalContainer__imgContainer"
        );

        const createModalHeaderBtn = document.querySelector(".createModalContainer__modalHeader__btn");
        const form = document.querySelector(".createModalContainer__btnUpload__form");
        const imgInput = document.querySelector(".createModalContainer__btnUpload__input");
        const createModalDesc = document.querySelector(
            ".createModalContainer__description"
          );

        let imgUrl;
        form.addEventListener("change", (e)=> {
            e.preventDefault();
            createModalSecondStage.style.display = "block";
            console.log("이미지 업로드", imgInput.files);
            const imgFile = imgInput.files[0];
            const imgURL = URL.createObjectURL(imgFile);
            const uploadImg = document.querySelector(".createModalContainer__imgContainer__img");
            uploadImg.src = imgURL;
            imgUrl = imgURL;
            console.log("imgURL", imgURL);
            createModalH1.textContent = "자르기";
            createModalHeaderBtn.textContent = "다음";
            
        });

        createModalHeaderBtn.addEventListener("click", ()=> {
            if(createModalHeaderBtn.textContent == "다음") {
            createModalH1.textContent = "게시물 생성하기";
            createModalHeaderBtn.textContent = "공유";
            createModalSecondStage.style.display = "none";
            
            createModalDesc.style.display = "grid";
            const lastImg = document.querySelector(".createModalContainer__description__img");
            lastImg.src = imgUrl;
            } else if (createModalHeaderBtn.textContent == "공유") {
                console.log("공유하기 클릭!")
                createModalHeaderBtn.textContent = "";
                createModalDesc.style.display = "none";
                const lastShare = document.querySelector(".createModalContainer__share");
                lastShare.textContent = "공유되었습니다.";
                lastShare.style.display = "flex";
            }
        })

});
