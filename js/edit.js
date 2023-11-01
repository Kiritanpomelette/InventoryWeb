document.addEventListener('DOMContentLoaded', function (){
   const form = document.getElementById('form-use-number');
   const input = document.getElementById('use-number');
   const upDataButton = document.getElementById('update-btn');

   form.addEventListener('submit', function (event){
       event.preventDefault();
       const useNumber = input.value;
       console.log(useNumber);
       alert('更新しました')
   });
   upDataButton.addEventListener('click', function (){
       window.location.href = 'index.html';
   });
});