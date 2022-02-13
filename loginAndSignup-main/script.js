// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const elInputUsername = document.querySelector('#username')
const elInputPW = document.querySelector('#password')
const elInputRePW = document.querySelector('#password-retype')
const elFailureMessage = document.querySelector('.failure-message')
const elSuccessMessage = document.querySelector('.success-message')

const elSuccessRePW = document.querySelector('#successPW')
const elFailureRePW = document.querySelector('.mismatch-message')

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(value.length>=4)
  return true
  else return false
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === password2)
  return true
  else return false
}
//비번 재확인
//비번 재확인치고 비번칠때
elInputPW.onkeyup = function(){
  
  if(isMatch(elInputPW.value,elInputRePW.value))
  {
    
    elSuccessRePW.classList.remove('hide')
    elFailureRePW.classList.add('hide')
  }
  else{
    
    elSuccessRePW.classList.add('hide')
    elFailureRePW.classList.remove('hide')
  }

}
//비번확인부터 치고 비번재확인칠때
elInputRePW.onkeyup = function(){
  
  if(isMatch(elInputPW.value,elInputRePW.value))
  {
    elSuccessRePW.classList.remove('hide')
    elFailureRePW.classList.add('hide')
  }
  else{
    elSuccessRePW.classList.add('hide')
    elFailureRePW.classList.remove('hide')
  }

}


// 아이디 글자수에 따른 변화
elInputUsername.onkeyup = function(){
  if(isMoreThan4Length(elInputUsername.value))
  {
    elSuccessMessage.classList.remove('hide')
    elFailureMessage.classList.add('hide')
  }
  else
  {
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')
  }
  
} 

