const icon_folder = '/icons/';

const constants = 
{
    INPUT_PLACEHOLDER: "Найти стартап, инвестора, сервисы",
    BUTTON_TEXT: "Зарегистрируйся",
    LINKS: {

        profile: '/profile'
    },
    TITLES_WINDOW: {

        registration: 'Регистрация',
        enter: 'Вход'
    },
    BUTTON_WINDOW: {
        top: {

            enter: {
                text: 'Войти',
                name: 'enter',
                index_page: 1
            },
            registration: {

                text: 'Зарегистрироваться',
                name: 'registration',
                index_page: 0
            }
        },
        bottom: {
            registration: {

                text: 'Зарегистрироваться',
            },
            enter: {

                text: 'Войти',
                url: '/profile'
            }
        }
    },
    WINDOW_CHECKBOX: {
        text: 'Даю свое согласие на обработку ГБУ «Агентство инноваций Москвы» моих персональных данных на условиях',
        link: 'Соглашения об обработке персональных данных.',
        href: 'https://startupguide.innoagency.ru/files/innoagency_soglashenie_pd.pdf',
        id: 'I_agree_window_checkbox',
        name: 'I_agree_window_checkbox'
    },
    REGISTRATION_INPUTS: {
        
        FIO: {
            hint: 'ФИО',
            placeholder: 'Иванов Иван Иванович',
            error: 'Фамилия Имя Отчетсво',
            name: 'fio',
            correct_value: /^\D* \D* \D{1,}$/g
        },
        PHONE: {
            hint: 'телефон',
            placeholder: '+7(___) ___-__-__',
            error: 'Неккоректный номер телефона',
            name: 'phone',

            correct_value: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g
        },
        EMAIL: {
            hint: 'email',
            placeholder: 'address@service.com',
            error: 'Введена некорректная почта',
            name_register: 'email',
            name_enter: 'email_for_enter',
            correct_value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/g
        },
        PASSWORD: {
            hint: 'пароль',
            placeholder: '*******',
            error: 'Не менее 8 символов',
            name_register: 'password',
            name_enter: 'password_for_enter',
            correct_value: /(.+){8,}/g
        },
        DOUBLE_PASSWORD: {
            hint: 'повторный пароль',
            placeholder: '*******',
            error: 'Пароли не совпадают',
            name: 'double_password',
            correct_value: ''
        },
        CITY: {
            hint: 'город',
            placeholder: 'Москва',
            error: '',
            name: 'city',
            correct_value: /.+/g
        },
        FILES_UPLOADER: {

            name: 'businessman_photo',
            placeholder: '',
            id_image: `profile_photo_window`
        },
        TELEGRAM: {
            name: 'telegram'
        }
    },
    DISABLE_TEXT_WINDOW: 'Не все поля заполнены!',
    SERVER_MESSAGES: {

        SUCCESS_REGISTRATION: 'User successfully registered',
    },
    ERRORS_MESSAGE: {

        FAILED_REGISTRATION: 'Такой пользователь уже существует'
    }
}

export default constants;