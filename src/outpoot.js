export default class Outpoot {
    constructor(data) {
        this.data = data;
        this.date = new Date()
    }

    toString(){
        return JSON.stringify({
            data:this.data,
            date:this.date.toJSON()
        })
    }

}