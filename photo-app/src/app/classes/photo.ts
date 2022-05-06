export class Photo {
    filename:string
    category:string
    description:string
    photographer:string
    fullPath:string
    constructor(filename:string, photographer:string, category:string, desc:string){
        this.filename = filename
        this.fullPath = `assets/data/gallery/${filename}.jpg`
        this.photographer = photographer
        this.category = category
        this.description = desc
    }
}