const scriptURL = 'https://script.google.com/macros/s/AKfycbxZUhP1VMggatv5ppgAMKb4LqCDUpedtOZU0j4zn_zSojQro9ghNBQ5bdc6jDF0Vb-gIQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})