window.addEventListener('DOMContentLoaded', () => {

    // 1. 로그인 버튼 셀렉터 가져온다.
    // 2. 이벤트 핸들러 함수를 통해서 클릭을 했을 때
    // 3. 인풋박스의 내용이 들어가 있는지 확인한다.
    // 4. 없다면 알림창을 띄운다.

    const loginButton = document.querySelector(".loginBtn");
    loginButton.addEventListener('click', (e) => {
        e.preventDefault(); //페이지가 옮겨지지 않게 막아주는 역할
        const id = document.getElementById("login__email");
        const password = document.getElementById("login__password");
        if(id.value.length === 0 || password.value.length === 0){
            return alert("아이디 또는 비밀번호를 입력해주세요")
        }

        window.location.href = "./home.html";
        // 뒤로가기 하면 초기화
        id.value="";
        password.value="";
    })
})
