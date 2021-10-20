const icon_folder = '/icons/';

const constants = 
{
    INPUT_PLACEHOLDER: "Найти стартап, инвестора, сервисы",
    BUTTON_TEXT: "Зарегестрируйся",

    TITLE_WINDOW: 'Зарегистрироваться',
    BUTTON_WINDOW: 'Войти',
    REGISTRATION_INPUTS: {
        
        FIO: {
            hint: 'ФИО',
            placeholder: 'Иванов Иван Иванович',
            error: 'Вы не ввели своё имя',
            correct_value: /^\D* \D* \D{1,}$/g
        },
        PHONE : {
            hint: 'телефон',
            placeholder: '+7(___) ___-__-__',
            error: 'Вы не ввели свой номер',
            correct_value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g
        },
        EMAIL : {
            hint: 'email',
            placeholder: 'address@service.com',
            error: 'Вы не ввели свою почту',
            correct_value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/g
        },
        PASSWORD : {
            hint: 'пароль',
            placeholder: '*******',
            error: 'Вы не ввели пароль',
            correct_value: /.+/g
        },
        DOUBLE_PASSWORD : {
            hint: 'повторный пароль',
            placeholder: '*******',
            error: 'Пароли не совпадают',
            correct_value: ''
        },
        CITY : {
            hint: 'город',
            placeholder: 'Москва',
            error: '',
            correct_value: /.+/g
        },
    }
}

export default constants;