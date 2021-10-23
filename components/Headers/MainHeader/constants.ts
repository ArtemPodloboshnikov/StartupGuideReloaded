const icon_folder = '/icons/';

const constants = 
{
    INPUT_PLACEHOLDER: "Найти стартап, инвестора, сервисы",
    BUTTON_TEXT: "Зарегистрируйся",

    TITLE_WINDOW: 'Регистрация',
    BUTTON_WINDOW: {
        top_text: 'Войти',
        bottom_text: 'Зарегистрироваться'
    },
    WINDOW_CHECKBOX: {
        text: 'Даю свое согласие на обработку ГБУ «Агентство инноваций Москвы» моих персональных данных на условиях',
        link: 'Соглашения об обработке персональных данных.',
        href: 'https://startupguide.innoagency.ru/files/innoagency_soglashenie_pd.pdf'
    },
    REGISTRATION_INPUTS: {
        
        FIO: {
            hint: 'ФИО',
            placeholder: 'Иванов Иван Иванович',
            error: 'Фамилия Имя Отчетсво',
            correct_value: /^\D* \D* \D{1,}$/g
        },
        PHONE: {
            hint: 'телефон',
            placeholder: '+7(___) ___-__-__',
            error: 'Неккоректный номер телефона',
            correct_value: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g
        },
        EMAIL: {
            hint: 'email',
            placeholder: 'address@service.com',
            error: 'Введена некорректная почта',
            correct_value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/g
        },
        PASSWORD: {
            hint: 'пароль',
            placeholder: '*******',
            error: 'Не менее 8 символов',
            correct_value: /(.+){8,}/g
        },
        DOUBLE_PASSWORD: {
            hint: 'повторный пароль',
            placeholder: '*******',
            error: 'Пароли не совпадают',
            correct_value: ''
        },
        CITY: {
            hint: 'город',
            placeholder: 'Москва',
            error: '',
            correct_value: /.+/g
        },
        FILES_UPLOADER: {

            name: 'businessmanPhoto',
            placeholder: 'Ваше фото'
        }
    },
    DISABLE_TEXT_WINDOW: 'Не все поля заполнены!'
}

export default constants;