let input = Array.from(document.querySelectorAll('input'))
const signUpBtn = document.querySelector('#SignUp');
function signup(){
    for(let i =0;i<input.length;i++){
        if(input[i].value.length===0){
            alert('입력하지 않은 정보가 있습니다.')
            break;
        }
        else{
            alert('회원가입을 진행합니다.')
            break;
        }
        
    }
}



signUpBtn.addEventListener('click',signup)