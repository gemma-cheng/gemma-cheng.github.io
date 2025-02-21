<script>
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselItems = document.querySelector('.carousel-items');
    const itemsToShow = 3;  // Show 3 items at a time
    let currentIndex = 0;

    // Function to update carousel position
    function updateCarouselPosition() {
        const offset = -(currentIndex * (100 / itemsToShow));
        carouselItems.style.transform = `translateX(${offset}%)`;
    }

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
        } else {
            currentIndex = carouselItems.children.length - itemsToShow; // Wrap around
        }
        updateCarouselPosition();
    });

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentIndex < carouselItems.children.length - itemsToShow) {
            currentIndex += 1;
        } else {
            currentIndex = 0;  // Wrap around to the start
        }
        updateCarouselPosition();
    });
</script>

