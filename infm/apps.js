const adultsInput = document.getElementById('adults-input');
    const adultsMinusBtn = document.getElementById('adults-minus');
    const adultsPlusBtn = document.getElementById('adults-plus');

    const childrenInput = document.getElementById('children-input');
    const childrenMinusBtn = document.getElementById('children-minus');
    const childrenPlusBtn = document.getElementById('children-plus');

    // Function to handle minus button click
    function handleMinusClick(inputElement) {
        const currentValue = parseInt(inputElement.value) || 0;
        if (currentValue > 0) {
            inputElement.value = currentValue - 1;
        }
    }

    // Function to handle plus button click
    function handlePlusClick(inputElement) {
        const currentValue = parseInt(inputElement.value) || 0;
        inputElement.value = currentValue + 1;
    }

    // Event listeners for adults input
    adultsMinusBtn.addEventListener('click', () => handleMinusClick(adultsInput));
    adultsPlusBtn.addEventListener('click', () => handlePlusClick(adultsInput));

    // Event listeners for children input
    childrenMinusBtn.addEventListener('click', () => handleMinusClick(childrenInput));
    childrenPlusBtn.addEventListener('click', () => handlePlusClick(childrenInput));
