const items = document.querySelectorAll(".description-container");

items.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#2E7D32';
        this.style.color = '#fff';
    }) 
});

items.forEach(item => {
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    }) 
});



