const scriptURL1 = "https://script.google.com/macros/s/AKfycbzCv_qV-40qg8CU89PDZX4N7lzFBa5OFjmCVCJt-Q9nh3Vz95OojPw336lyDBsxu1ai/exec"
const form1 = document.forms['contact-form1']
form1.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})

