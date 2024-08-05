var buttons = document.querySelectorAll('.cor');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        var color = button.getAttribute('data-color');
        
        var divs = document.querySelectorAll('.linha');
        
        divs.forEach(function(div) {
            div.style.backgroundColor = color;
            div.style.boxShadow = `0 4px 8px ${color}`;
        });
    });
});

