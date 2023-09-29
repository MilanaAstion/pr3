document.addEventListener('DOMContentLoaded', function () {
    const getRowButton = document.getElementById('getRowButton');
    const formatPhoneButton = document.getElementById('formatPhoneButton');

    getRowButton.addEventListener('click', function () {
        const firstRow = 'мама мыла раму';
        const secondRow = 'собака друг человека';
        const promptChar = prompt('Введіть букву для підрахунку кількості:');

        if (!promptChar) {
            alert('Ви не ввели букву.');
            return;
        }

        const firstCount = countLetters(firstRow, promptChar);
        const secondCount = countLetters(secondRow, promptChar);

        if (firstCount > secondCount) {
            alert(firstRow);
        } else if (secondCount > firstCount) {
            alert(secondRow);
        } else {
            alert('Кількість букв однакова.');
        }
    });

    formatPhoneButton.addEventListener('click', function () {
        const phone = prompt('Введіть номер телефону:');
        alert(formattedPhone(phone));
    });

    function countLetters(row, char) {
        let count = 0;

        for (let i = 0; i < row.length; i++) {
            if (row.charAt(i) === char) {
                count++;
            }
        }

        return count;
    }

    function formattedPhone(phone) {
        const regex = /^(\+?7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/;
        const match = phone.match(regex);

        if (match) {
            const formatted = `+7 (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
            return formatted;
        } else {
            return 'Невірний формат телефону.';
        }
    }
});