function addGoogleMapsButton() {
    let searchQuery = document.querySelector('input[name="q"]').value;
    if (searchQuery) {
        let elements = document.getElementsByTagName('*');
        if (elements) {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].textContent === "Tous") {
                    let parent = elements[i].parentNode;

                    let outerDiv = document.createElement('div');
                    outerDiv.className = 'outer-div';

                    let innerDiv = document.createElement('div');
                    innerDiv.className = 'inner-div';
                    innerDiv.innerText = 'Maps';

                    let a = document.createElement('a');
                    a.href = `https://www.google.com/maps?q=${encodeURIComponent(searchQuery)}`;

                    a.appendChild(innerDiv);
                    outerDiv.appendChild(a);

                    if (elements[i].nextSibling) {
                        parent.insertBefore(outerDiv, elements[i].nextSibling);
                    } else {
                        parent.appendChild(outerDiv);
                    }
                    break;
                }
            }
        }
    }
}

window.onload = addGoogleMapsButton;
