const loginBtn = document.querySelector('#loginBtn');

function notAllowedLogin(){
    alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
}



loginBtn.addEventListener('click',notAllowedLogin)