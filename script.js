document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('.one');
    const toggleVisibilityButton = document.getElementById('toggle-visibility');
    const strengthMeter = document.getElementById('password-strength');

   
    toggleVisibilityButton.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleVisibilityButton.textContent = type === 'password' ? '👁️' : '🙈';
    });




    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 8) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/\d/.test(password)) strength += 1;
        if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

        let message;
        let color;
        switch (strength) {
            case 5:
                message = 'Very Strong';
                color = 'green';
                break;
            case 4:
                message = 'Strong';
                color = 'blue';
                break;
            case 3:
                message = 'Moderate';
                color = 'orange';
                break;
            case 2:
                message = 'Weak';
                color = 'red';
                break;
            default:
                message = 'Very Weak';
                color = 'darkred';
                break;
        }

        strengthMeter.textContent = `Password Strength: ${message}`;
        strengthMeter.style.color = color;
    });
});
