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

const constants = {

    FILE_UPLOADER: {
        name: 'loadPhoto',
        placeholder: ''
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
        }
    },
    profile: {
        TITLE: 'Профиль',
        PROFILE_OPTIONS: {
            
            [business_angel]: 'Бизнес-ангел — частный венчурный инвестор, дающий финансовую и экспертную поддержку компаниям, на ранних этапах развития.',
            [business_incubator]: 'Бизнес-инкубатор – объект инфраструктуры, предназначенный для поддержки малых предприятий на ранней стадии их деятельности.',
            [venture_studio]: '',
            [venture_fund]: '',
            [corporation]: '',
            [pilot_testing_site]: '',
            [scout]: '',
            [accelerator]: '',
            [startup_studio]: '',
            [incubator]: '',
            [startup]: '',
            [social_startup_event]: '',
            [student_startup]: ''
        }
    },
    networks: {

        TITLE: 'Социальные медиа'
    }
}

export default constants