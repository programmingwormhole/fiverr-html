document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.y2EinTV');
    const dropdownMenu = document.querySelector('.pax49Xc');
    const spanIcon = document.querySelector('.nFghBOe.iqNcR9P');

    button.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('SNyt9Xi')) {
            dropdownMenu.classList.remove('SNyt9Xi');
            spanIcon.classList.add('v0y3yti');
        } else {
            dropdownMenu.classList.add('SNyt9Xi');
            spanIcon.classList.remove('v0y3yti');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.js-side-nav-trigger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    navTrigger.addEventListener('click', function() {
        sidebar.style.left = '0';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function() {
        sidebar.style.left = '-311px';
        overlay.style.display = 'none';
    });
});


document.getElementById('browseCategories').addEventListener('click', function() {
    var articleElement = this.closest('article');
    var collapsibleContent = document.getElementById('collapsibleContent');

    if (articleElement.classList.contains('active')) {
        articleElement.classList.remove('oJ7PgXd', 'q3uA0mk', 'active');
        collapsibleContent.style.height = '0';
    } else {
        articleElement.classList.add('oJ7PgXd', 'q3uA0mk', 'active');
        collapsibleContent.style.height = '';
    }
});


function showSubcategories(category) {
    document.getElementById('mainCategories').style.display = 'none';
    document.getElementById('subcategories' + capitalizeFirstLetter(category)).style.display = 'block';
}

function hideSubcategories(category) {
    document.getElementById('subcategories' + capitalizeFirstLetter(category)).style.display = 'none';
    document.getElementById('mainCategories').style.display = 'block';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// document.addEventListener('DOMContentLoaded', () => {
//     const joinButton = document.querySelector('.fiverr-header-join');
//     const modal = document.getElementById('joinModal');
//     const closeButton = document.querySelector('.close-button');

//     joinButton.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent the default link behavior
//         modal.style.display = 'flex';
//     });

//     closeButton.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });
