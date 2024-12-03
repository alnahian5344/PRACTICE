document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();
const phoneNumber=document.getElementById('phn-number').value;
const password=document.getElementById('password').value;
if(password==='1234'){
window.location.href='/home.html';
}else{
    alert('Permission Denied');
}
})