const iconsFolder = '/icons/'

const inputsType = {

    file_uploader: {

        TEXT: 'text',
        IMAGE: {
            
            name: 'image',
            images: {

                PROFILE: 'profile'
            }
        }
    },
    buttons: {

        CIRCLE: 'circle',
        SQUARE: 'square',
    },
    inputs: {

        PASSWORD: 'password',
        SELECT: 'select',
        neomorh: {

            CIRCLE_BTN: 'circle_btn',
            SOCIAL_NETWORKS: {

                name: 'networks',
                typeNetworks: {
    
                    TELEGRAM: {
                        light: `${iconsFolder}telegram_light.svg`,
                        dark: `${iconsFolder}telegram_dark.svg`,
                        placeholder: 'http://t.me/'
                    },
                    INSTAGRAM: {
                        light: `${iconsFolder}instagram_light.svg`,
                        dark: `${iconsFolder}instagram_dark.svg`,
                        placeholder: 'http://instagram.com/'
                    },
                    FACEBOOK: {
                        light: `${iconsFolder}facebook_light.svg`,
                        dark: `${iconsFolder}facebook_dark.svg`,
                        placeholder: 'http://facebook.com/'
                    },
                    VK: {
                        light: `${iconsFolder}vk_light.svg`,
                        dark: `${iconsFolder}vk_dark.svg`,
                        placeholder: 'http://vk.com/'
                    }
                    
                }
            }
        }
    }

}

export default inputsType;