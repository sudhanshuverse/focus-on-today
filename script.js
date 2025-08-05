const allCheckboxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');




allCheckboxList.forEach((checkbox) => {
    checkbox.addEventListener('click' , (e) => {
        const allGoalAdded = [...inputFields].every(function(input) {
            return input.value;
        });


        if(allGoalAdded) {
            checkbox.parentElement.classList.toggle('completed');
            progressValue.style.width = '33.3%'
        }
        else{
            progressBar.classList.add('show-error')
        }
    })
})



inputFields.forEach((input) => {
    input.addEventListener(('focus') , () => {
        progressBar.classList.remove('show-error');
    })
})
