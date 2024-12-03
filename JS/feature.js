
document.getElementById('feature-out-mny').addEventListener('click',function(){
    document.getElementById('out-form').classList.remove('hidden');
    document.getElementById('add-form').classList.add('hidden');
})

document.getElementById('feature-add-mny').addEventListener('click',function(){
   document.getElementById('out-form').classList.add('hidden');
   document.getElementById('add-form').classList.remove('hidden');
})