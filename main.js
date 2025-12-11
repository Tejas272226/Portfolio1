document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var e = document.getElementById('year');
  if(e) e.textContent = y;
  var e2 = document.getElementById('year2');
  if(e2) e2.textContent = y;

  var pb = document.getElementById('printBtn');
  if(pb){
    pb.addEventListener('click', function(){ window.print(); });
  }
});