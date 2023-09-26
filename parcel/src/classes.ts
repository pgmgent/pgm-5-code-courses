export const Airplane = class Airplane { 
    public pilot: string;
    private code: string;
    constructor(pilot: string){
        this.pilot = pilot
        this.code = this.generateCode()
    }

    generateCode () {
        return "dasdasfdgfdsa"
    }
}

export const Bird = class Bird {
    constructor() {

    }

    walk () {
        console.log("Bird is walking")
    }
}
