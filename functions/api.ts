const api = {

    HOST: 'http://startup-service.mvpstudio.io',
    GET: {
        getUsers: {
            
            query: '/api/users'
        }
    },
    POST: {

        login: {

            query: '/api/auth/login',
            parameters: {

                EMAIL: 'email',
                PASSWORD: 'password'
            }
        }
    }

}

export default api;