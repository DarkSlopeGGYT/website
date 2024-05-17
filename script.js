// JavaScript code to add interactivity
document.addEventListener('DOMContentLoaded', (event) => {
    const projectTitles = document.querySelectorAll('.project h3');

    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            alert('You clicked on a project title!');
        });
    });
});
