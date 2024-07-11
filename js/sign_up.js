window.addEventListener("DOMContentLoaded", ()=>{
    const loginButton = addEventListener("click", (e)=> {
        e.preventDefault();
        const email = document.getElementById("signUp__email");
        const name = document.getElementById("signUp__name");
        const username = document.getElementById("signUp__username");
        const password = document.getElementById("signUp__password");

        if (
            email.value.length === 0 ||
            name.value.length === 0 ||
            username.value.length === 0 ||
            password.value.length === 0
          ) {
            return alert("회원가입 정보를 다 입력해 주세요.");
          }
      
          location.href = "./home.html";
          name.value = "";
          username.value = "";
          email.value = "";
          password.value = "";
    });
});
