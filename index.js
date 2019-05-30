function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('input[type="text"]').val()
}

function addNewElementAsLi() {
  return $('.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick() {
  return $('form').submit(function () {
     addNewElementAsLi()
  })
}

function
