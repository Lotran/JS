  var e = document.getElementsByClassName('external-link');
  for(var i=0;i<e.length;i++){
    e[i].addEventListener('click',function(event){
      event.preventDefault();
      new ActiveXObject('WScript.Shell').Run(this.href);
      return false;
    },false)
  }
