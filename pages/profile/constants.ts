const business_angel: string = 'Бизнес-ангел';
const business_incubator: string = 'Бизнес-инкубатор';
const venture_studio: string = 'Венчурная студия';
const venture_fund: string = 'Венчурный фонд';
const corporation: string = 'Корпорация';
const pilot_testing_site: string = 'Площадка пилотного тестирования';
const scout: string = 'Скаут';
const accelerator: string = 'Акселератор';
const startup_studio: string = 'Стартап- студия';
const incubator: string = 'Инкубатор';
const startup: string = 'Стартап';
const social_startup_event: string = 'Стартап социальный/ивент';
const student_startup: string = 'Стартап ученический';
const iconsFolder = '/icons/';

const constants = {

    FILE_UPLOADER: {
        name: 'load_profile_photo',
        placeholder: '',
        id_image: `my_profile_photo`
    },
    personal_data: {

        TITLE: 'Личные данные',
        FIO: {
            placeholder: 'ФИО'
        },
        PHONE: {
            placeholder: 'Телефон'
        },
        EMAIL: {
            placeholder: 'email'
        },
        CITY: {
            placeholder: 'Город'
        },
        SAVE_BTN: 'Сохранить данные'
    },
    profile: {
        TITLE: 'Профиль',
        QUESTION_ICON: `${iconsFolder}question_circle.svg`,
        TYPE_FIELDS: {

            TEXTAREA: 'textarea',
            NUMBER: 'number',
            CHECKBOX: 'checkbox',
            RADIO: 'radio'
        },
        PROFILE_OPTIONS: {
            
            [business_angel]: {
                description: 'Бизнес-ангел — частный венчурный инвестор, дающий финансовую и экспертную поддержку компаниям, на ранних этапах развития.',
                questions: ['Почему вы решили создавать эту компанию?', 'Почему люди хотят именно это, а не любой другой продукт?'],
                typeFields: ['textarea', 'textarea'],
                placeholders: ['Введите сюда ответ', 'Введите сюда ответ']
            },
            [business_incubator]: {
                description: 'Бизнес-инкубатор – объект инфраструктуры, предназначенный для поддержки малых предприятий на ранней стадии их деятельности.',
                questions: ['Почему именно сейчас лучше всего создавать этот стартап?', 'Почему это по силам именно вашей команде?'],
                typeFields: ['textarea', 'textarea'],
                placeholders: ['Введите сюда ответ', 'Введите сюда ответ']
            },
            [venture_studio]: {
                description: 'Венчурная студия — это своего рода платформа с экспертизой, ресурсами и инфраструктурой, которая позволяет генерировать и проверять бизнес-идеи, а потом доводить часть из них до ума и выводить на рынок.',
                questions: ['Как ', 'Вот так']    
            },
            [venture_fund]: {
                description: 'Венчурные фонды осуществляют инвестиции в ценные бумаги или доли предприятий с высокой или относительно высокой степенью риска в ожидании чрезвычайно высокой прибыли.',
                questions: ['Как ', 'Вот так']    
            },
            [corporation]: {
                description: 'Корпорация — форма организации бизнеса, основанная на долевой собственности и раздельной функции собственника и управления.',
                questions: ['Как ', 'Вот так']    
            },
            [pilot_testing_site]: {
                description: 'Программу для технологических компаний, в рамках которой возможно протестировать свой инновационный продукт в реальных условиях у потенциального заказчика. Пилотные тестирования проводятся на городских и коммерческих площадках',
                questions: ['Как ', 'Вот так']    
            },
            [scout]: {
                description: 'Скаутинг можно определить как процесс привлечения технологических компаний в венчурный фонд, корпорацию или бизнес-акселератор.',
                questions: ['Как ', 'Вот так']    
            },
            [accelerator]: {
                description: 'Бизнес-акселератор — социальный институт поддержки стартапов. Понятие описывает как учреждения, так и организованные ими программы интенсивного развития компаний через менторство, обучение, финансовую и экспертную поддержку в обмен на долю в капитале компании.',
                questions: ['Как ', 'Вот так']    
            },
            [startup_studio]: {
                description: 'Стартап-студия — компания, которая одновременно запускает несколько стартапов, активно участвует в создании и запуске проектов для своих клиентов, помогая им и инвестиционным фондам выйти на прибыль.',
                questions: ['Как ', 'Вот так']    
            },
            [incubator]: {
                description: 'Бизнес-инкубатор — это организация, занимающаяся поддержкой проектов молодых предпринимателей на всех этапах развития: от разработки идеи до её коммерциализации.',
                questions: ['Как ', 'Вот так']    
            },
            [startup]: {
                description: 'Стартап — это вновь созданная организация, которая занимается разработкой новых товаров или услуг в условиях чрезвычайной неопределенности.',
                questions: ['Как ', 'Вот так']    
            },
            [social_startup_event]: {
                description: 'Это проект, который в одинаковой мере озабочен вопросами роста, прибыльности и общественного блага. Цель — разработка, финансирование и/или внедрение решений социокультурных или экологических проблем.',
                questions: ['Как ', 'Вот так']    
            },
            [student_startup]: {
                description: '',
                questions: ['Как ', 'Вот так']    
            
            },
        }
    },
    networks: {

        TITLE: 'Социальные медиа',
        TELEGRAM: {
            name: `telegram_${Math.random()}`
        },
        INSTAGRAM: {
            name: `instagram_${Math.random()}`
        },
        FACEBOOK: {
            name: `facebook_${Math.random()}`
        },
        VK: {
            name: `vk_${Math.random()}`
        }
    },
    questionnaire_window: {

    }
}

export default constants