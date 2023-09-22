//How I did it

/*const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

let countValue = 0;

increaseBtn.addEventListener('click', function () {
	countValue += 1;
	value.textContent = countValue;
});

resetBtn.addEventListener('click', function () {
	countValue = 0;
	value.textContent = countValue;
});

decreaseBtn.addEventListener('click', function () {
	countValue -= 1;
	value.textContent = countValue;
});

btns.forEach(function (btn) {
    btn.addEventListener("click", function() {
        if (countValue > 0) {
            value.style.color = 'green';
        } else if (countValue < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
})
})*/

//Alternate/best way

let count = 0
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn) {
    btn.addEventListener("click", function(cl){
        const styles = cl.currentTarget.classList
        if(styles.contains("decrease")){
            count -= 1
        } else if(styles.contains("increase")){
            count += 1
        } else {
            count = 0
        }

        if(count > 0) {
            value.style.color = "green"
        }
        else if (count < 0) {
            value.style.color = "red"
        }
        else {
            value.style.color = "#222"
        }
        value.textContent = count
    })
})