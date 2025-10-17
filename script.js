function downloadFile(fileName, displayName) {

    const notification = document.getElementById('downloadNotification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = `Началась загрузка файла "${displayName}"`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

document.querySelector('.btn').addEventListener('click', function () {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
});

function animateSkills() {
    const skills = document.querySelectorAll('.skill-value');

    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%';

        setTimeout(() => {
            skill.style.width = width;
        }, 300);
    });
}

window.addEventListener('load', animateSkills);