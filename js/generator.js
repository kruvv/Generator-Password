var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$'];

document.getElementById('lengthString').oninput = function() {
    // Ползунок - Длинна массива
    document.getElementById('password-length').innerHTML = this.value;
}

// Запуск при старте
generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass() {
    var result = [];
    if(document.getElementById('Numbers').checked) {
        // Включены ли цифры
        result = result.concat(numbers);
    }
    if(document.getElementById('LowerCaseLetters').checked) {
        // Включены ли Строчные символы
        result = result.concat(lowerCase);
    }
    if(document.getElementById('UpperCaseLetters').checked) {
        // Включены ли Прописные символы
        result = result.concat(upperCase);
    }
    if(document.getElementById('SpecialCharacters').checked) {
        // Включены ли спецсимволы
        result = result.concat(specialCharacters);
    }

    // Перемешиваем результирующий массив
    result.sort(compareRandom); 
    
    document.getElementById('out').innerHTML = '';

    for(var k = 0; k < 6; k++) {
    
    var pass = '';

    // Длинна пароля
    var passwordLength = document.getElementById('lengthString').value;
    
    // Формирование пароля случайным образом
    for(var i = 0; i < passwordLength; i++) {
        pass += result[randomInteger(0, result.length - 1)];
    }
    
    // Вывод пароля на страницу
    document.getElementById('out').innerHTML += '<h2>' + pass + '</h2>';
    }
}
    // Перемещивание результирующего массива
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    // Выбор случайного символа из массива
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }