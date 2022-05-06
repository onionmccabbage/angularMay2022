// exploring ts classes and interfaces
export interface IPhoto { // typescript interface ensures we will implement all the required parts
    filename:string
    category:string
    description:string
    photographer:string
    fullPath:string
}

class Snap implements IPhoto {
    filename:string
    category:string
    description:string
    photographer:string
    fullPath:string
    constructor(filename:string, photographer:string, category:string, desc:string){
        this.filename = filename
        this.fullPath = `assets/gallery/${filename}.jpg`
        this.photographer = photographer
        this.category = category
        this.description = desc
    }
}