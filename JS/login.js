document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();
const phoneNumber=document.getElementById('phn-number').value;
const password=document.getElementById('password').value;
if(phoneNumber==='01557000909' && password==='1234'){
window.location.href='/home.html';
}else{
    alert('Permission Denied');
}
})