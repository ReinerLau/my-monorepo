import Button from './button.vue'

export const MyButton = {
    install(app){
        app.component('MyButton', Button)
    }
}