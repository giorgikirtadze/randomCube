let container = document.querySelector('.container');
let score = document.querySelector('.scoreNum')
let recentagle = document.querySelector('.recentagle');
let timer = document.querySelector('.timer')
let startGame = document.querySelector('.startGame')


let realTimer = 20;
let realScore = 0;
let interval = 1000;


startGame.addEventListener('click', function(){

    setInterval(startTimre, interval)

    function startTimre(){
        realTimer--;
        timer.textContent = realTimer
        if(realTimer <= 0){
            Lose()
        }
    }

    function Lose(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `თქვენ სამწუხაროთ ამოგეწურათ დრო და წააგეთ თქვენ გამოიყვანეთ ${realScore}`,
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    recentagle.addEventListener('click', function(){

        realScore++;
        score.textContent = realScore;

        let randomPosX = Math.floor(Math.random() * 450)
        let randomPosY = Math.floor(Math.random() * 450)
        let randomScale = Math.floor(Math.random() * 100)

        if(randomScale < 20){
            randomScale = 20;
        }

        if(realScore == 17){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'you are winning',
                showConfirmButton: false,
                timer: 1500
              })
              return
        }

        recentagle.style.marginTop = randomPosX + 'px';
        recentagle.style.marginLeft = randomPosY + 'px';
        recentagle.style.width = randomScale + 'px';
        recentagle.style.height = randomScale + 'px';  
        recentagle.style.backgroundColor = 'blue';

    }) 
})


function startTimre(){
    realTimer--;
    timer.textContent = realTimer
    if(realTimer <= 0){
        realTimer.textContent = 20
        Lose()
    }
}

function Lose(){
    alert(`თქვენ სამწუხაროთ ამოგეწურათ დრო და წააგეთ თქვენ გამოიყვანეთ ${realScore} სწორი პასუხი`)
}