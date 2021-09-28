export const randomNumberMixin = {
    created() {
        this.generateRandomNumber()
    },
    methods: {
        generateRandomNumber() {
            const number = Math.random()
            console.log('hello from mixin! ---> ', number)
            return number
        }
    }
}