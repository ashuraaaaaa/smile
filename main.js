document.getElementById('changeButton').addEventListener('click', function() {
    var image = document.getElementById('image');
    if (image.src.includes('smiley.png')) {
        image.src = 'smiley.jpg';
        document.body.style.backgroundColor = '#ffcccc'; // Change background color to light red
    } else {
        image.src = 'sad.jpg';
        document.body.style.backgroundColor = '#f0f0f0'; // Change background color back to original
    }
});