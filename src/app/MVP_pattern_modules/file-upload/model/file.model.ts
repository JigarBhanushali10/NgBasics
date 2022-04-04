export class FileDetails {
    fileName: string;
    size: number;
    type: string;
    content: string;

    constructor(fileName: string,
        size: number,
        type: string,
        content: string)
         {
        this.fileName= fileName;
        this.size= size;
        this.type= type;
        this.content= content
    }
}