const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {

  button.addEventListener('click', () => {
    const newColor = button.id.split('-')[0];
    document.body.style.backgroundColor = newColor;

  });

});
