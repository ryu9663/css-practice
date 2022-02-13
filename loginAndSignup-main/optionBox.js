//생년월일 달 

const month = document.querySelector('option')
const genderArr = ['남자','여자'];

for(let i =1;i<=12;i++){
    const monthOption = document.createElement('option')
    document.querySelector('#mm').append(monthOption)
    monthOption.setAttribute("value", i);
    monthOption.textContent = i;
}


const gender = document.querySelector('option')

for(let i = 0;i<genderArr.length;i++)
{
    const genderOption = document.createElement('option')
    document.querySelector('#MorW').append(genderOption)
    genderOption.setAttribute('value',genderArr[i])
    genderOption.textContent = genderArr[i]
}



//label class추가
