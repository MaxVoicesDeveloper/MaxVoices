  document.querySelector('.butt').addEventListener('click', function(){
    let header = document.querySelector('.header');
    let state = header.style.display;
      header.style.display = 'flex';
      if (state == 'flex') {
        header.style.display = 'none';
      }
  });
