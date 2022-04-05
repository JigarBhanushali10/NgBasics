import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

export class ok {
    firstName: string;
    company: string;
    gender: string;
    age: number;
}
export class file {
    fileName: string;
    size: number;
    type: string;
    content: string;

    constructor(fileName: string, size: number, conent: string, type: string = "image") {
        this.fileName = fileName
        this.type = type
        this.size = size
        this.content = conent
    }
}

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss']
})

export class JavascriptComponent implements OnInit {

    mapedArray: Array<ok>;
    filteredArray: Array<ok>;
    spreadedArray: any;
    stringyfyedArray: any


    constructor() {
        this.filter()
        // this.spread()
        // this.stringyfy()
        this.map()
    }

    array1 = [
        {
            firstName: "Jigar",
            company: "1rivet",
            gender: "Male",
            age: 22
        },
        {
            firstName: "Hrishikaesh",
            company: "Amazon",
            gender: "Male",
            age: 22
        },
        {
            firstName: "Himani",
            company: "1rivet",
            gender: "Female",
            age: 22
        },
        {
            firstName: "Mehul",
            company: "Google",
            gender: "Male",
            age: 22
        }]

    array2 = [
        {
            firstName: "Viral",
            company: "1rivet",
            gender: "Male",
            age: 26
        },
        {
            firstName: "Sneha",
            company: "Google",
            gender: "Female",
            age: 25
        },
        {
            firstName: "Shreya",
            company: "1rivet",
            gender: "Female",
            age: 21
        },
        {
            firstName: "Pooja",
            company: "Microsoft",
            gender: "Female",
            age: 21
        },
        {
            firstName: "Tanmay",
            company: "1rivet",
            gender: "Male",
            age: 24
        },
        {
            firstName: "Om",
            company: "Meta",
            gender: "Male",
            age: 22
        },
    ]


    ngOnInit(): void {
        const newFile = new file("jigar", 66, "aa")
        console.log(newFile);

    }

    public filter() {
        this.filteredArray = this.array1.filter((data) => data.company === '1rivet');
        console.log("filtered array", this.filteredArray);
    }



    // temporary: {
    //     name: string,
    //     obj: {
    //         a: string
    //     }
    // }[] = [
    //         {
    //             name: "jigar",
    //             obj: {
    //                 gender: "male"
    //             }
    //         },
    //         {
    //             name: "Okkk",
    //             obj: {
    //                 a: "Not Okkk"
    //             }
    //         },
    //         {
    //             name: "Ooook",
    //             obj: {
    //                 a: "Not Ooook"
    //             }
    //         }
    //     ];


    // Deep Copy
    // public stringyfy() {
    //     this.stringyfyedArray = this.temporary.map((firm) => {
    //         console.log("original array", JSON.stringify(firm));
    //         let t = JSON.parse(JSON.stringify(firm));
    //         if (t.name === 'Ooook') {
    //             t.obj.a = "Tesla"
    //         }
    //         return t;
    //     }
    //     )
    //     console.log("stringyfyedArray", this.stringyfyedArray)
    //     console.log("stringyfyedArray-temporary", this.temporary)
    // }

    // // Shallow Copy
    // public spread() {
    //     this.spreadedArray = this.temporary.map((firm) => {
    //         let t = { ...firm };
    //         if (t.name === 'Ooook') {
    //             t.obj.a = "Tesla"
    //         }
    //         return t;
    //     }
    //     )
    //     console.log("spreadedArray", this.spreadedArray)
    //     console.log("spreadedArray-temporary", this.temporary)
    // }

    public map() {
        this.mapedArray = this.array2.map((firm) => {
            let t = { ...firm };
            if (t.company === '1rivet') {
                t.company = "Tesla"
            }
            return t;
        }
        )
        console.log(this.mapedArray)
        console.log(this.array2)
    }


    drop(event: CdkDragDrop<ok[]>) {
        moveItemInArray(this.array2, event.previousIndex, event.currentIndex);
    }

    fromdate: string
    todate: string
    fromDate(event: any) {
        console.log("fromdate", event.target.value)
        this.fromdate = event.target.value

    }
    toDate(event: any) {
        console.log("todate", event.target.value)
        this.todate = event.target.value
    }




    readFile(event: any) {
        let file = event.files[0];
        let myFile: file = {} as file;
        myFile.fileName = file.name;
        myFile.size = file.size;
        myFile.type = file.type;

        let fileReader = new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => { myFile.content = e.target?.result as string; console.log(myFile) }
    }





}
