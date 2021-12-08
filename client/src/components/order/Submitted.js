class Submitted{
    constructor(){
        this.submitted=false
    }

    submit(cb){
        this.submitted=true
        cb()
    }

    doneSubmit(cb){
        this.submitted=false
        cb()
    }

    IsSubmitted(){
        return this.submitted;
    }
}

export default new Submitted()