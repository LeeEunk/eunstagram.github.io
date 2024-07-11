window.addEventListener("DOMContentLoaded", () => {
  
  const heart = document.querySelectorAll(".secondContainer__like");
    heart.forEach((icon) => {
        icon.addEventListener("click", () => {
        // console.log(icon.children);
        const notLoved = icon.children[0];
        const loved = icon.children[1];
        console.log("click ;;;; heart!");
        icon.classList.toggle("love"); // 그냥 구분자 없어도 됨
        notLoved.classList.toggle("display");
        loved.classList.toggle("hide_img");
      })
    });

  const followBtn = document.querySelector(".notificationSection__button");
  followBtn.addEventListener("click", () => {
    // 버튼을 누르면 following으로 변경
    followBtn.classList.toggle("following");
    if (followBtn.classList.contains("following")) {
      followBtn.textContent = "Following";
      followBtn.style.backgroundColor = "grey";
      followBtn.style.color = "black";
    } else {
      followBtn.textContent = "Follow";
      followBtn.style.backgroundColor = "rgb(0, 149, 246)";
      followBtn.style.color = "white";
    }
  });

  // 눌렀다 말았다가하면 알람 화면이 떳다 사라졌다하기
  const notificationIcon = document.getElementById("notification__icon");
  const notificationSection = document.querySelector(".notificationSection");

  notificationIcon.addEventListener("click", () => {
    notificationSection.classList.toggle("show");
  });
});
