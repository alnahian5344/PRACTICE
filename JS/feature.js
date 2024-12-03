
// document.getElementById('feature-out-mny').addEventListener('click',function(){
//     document.getElementById('out-form').classList.remove('hidden');
//     document.getElementById('add-form').classList.add('hidden');
// })

// document.getElementById('feature-add-mny').addEventListener('click',function(){
//    document.getElementById('out-form').classList.add('hidden');
//    document.getElementById('add-form').classList.remove('hidden');
// })

function showForm(id) {
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('out-form').classList.add('hidden');
    document.getElementById('trans-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('feature-out-mny').addEventListener('click', function () {
    showForm('out-form');
})
document.getElementById('feature-add-mny').addEventListener('click', function () {
    showForm('add-form');
})
document.getElementById('feature-trans-mny').addEventListener('click', function () {
    showForm('trans-form');
})




