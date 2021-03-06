// we declare a custom data type to help with Typescript typings
export class Photo { // or export interface Photo (without contructor)
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