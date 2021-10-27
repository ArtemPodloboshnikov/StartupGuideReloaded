const prefix = '/api/auth/';

const api = {

    HOST: 'http://startup-service.mvpstudio.io',
    GET: {
        get_users: {
            
            query: '/api/users'
        }
    },
    POST: {

        login: {

            query: `${prefix}login`,
            parameters: {

                EMAIL: 'email',
                PASSWORD: 'password'
            }
        },
        register: {

            query: `${prefix}register`,
            parameters: {

                EMAIL: 'email',
                PASSWORD: 'password',
                NAME: 'name',
                C_PASSWORD: 'c_password'
            }
        }
    }

}

export default api;