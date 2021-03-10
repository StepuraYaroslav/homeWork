const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    const length = login.length;
    if (length < 4 || length > 16) {
        return true;
    }
    return false;
};

const isLoginUnique = function(allLogins, login) {
    for (let eachLogin of allLogins) {
        if (login === eachLogin) {
            return true;
        }
    }
    return false;
};

const addLogin = function(allLogins, login) {
    isLoginValid(login);

    if (isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }

    if (isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
        return;
    }

    allLogins.push(login);
    console.log('Логин успешно добавлен!');
    console.log(logins);
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
