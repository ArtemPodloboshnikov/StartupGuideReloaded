import { atom, selector } from "recoil";

export const clientData = atom({

    key: 'client_data',
    default: {
        access_token: '',
        token_type: '',
        expires_in: 0,
        user: {
            id: 0,
            name: '',
            email: '',
            email_verified_at: null,
            api_token: null,
            created_at: '',
            updated_at: '',
            fio: null,
            city: null,
            occupation: null,
            combinedwork: null,
            startup_main_source_of_income: null,
            had_negative_experience: null,
            phone: null
        }
    }
})

