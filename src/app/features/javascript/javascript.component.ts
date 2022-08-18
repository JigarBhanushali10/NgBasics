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
    type?: string;
    content?: string;

    constructor(fileName: string, size: number, conent?: string, type?: string) {
        this.fileName = fileName
        this.size = size
        this.type = type
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



        //an example object:
        let myObject = {
            "male": {
                "fr": "value",
                "en": "value2",
                "es": "value3"
            },
            "felame": {
                "fr": "value",
                "en": "value2"
            }
        };
        //get the part we are looking for:
        let obj = Object.entries(myObject)
        console.log(typeof (obj))
        //iterate over the object and alert each item:
        for (let item in obj) {
            console.log(obj[item]);
            for (let i in obj[item]) {
                console.log(obj[item][i])
            }
        }


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
        this.js()

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


    js() {

        let arr1 = [1, 2, 3, 4, 5, 6, 7]
        let arr2 = [7, 8, 90, 100]
        let arr3 = ['Jigar', 'Hrishi', 'Mehul', 'Jay']
        // Array.prototype.every
        console.log('Array.prototype.every')
        console.log(arr1.every(x => x <= 0))


        // Array.prototype.filter
        console.log('Array.prototype.filter')
        console.log(arr2.filter(x => x >= 5))

        // Array.prototype.find
        console.log('Array.prototype.find')
        console.log(arr1.find(x => x < 5))

        // Array.prototype.findIndex
        console.log('Array.prototype.findIndex')
        console.log(arr1.findIndex(x => x < 5))

        // Array.prototype.forEach
        console.log('Array.prototype.forEach')
        arr2.forEach(x => console.log(x))
        // Array.from
        console.log('Array.from')
        console.log(Array.from(arr3, x => x + 1))
        console.log(Array.from('Jigar'))
        console.log(Array.from(arr1, x => x + 7))
        // Array.prototype.includes
        console.log(arr3.includes('Jigar'))
        console.log(arr3.includes('Jig'))

        // Array.prototype.indexOf
        console.log('Array.prototype.indexOf')
        console.log(arr3.indexOf('Raj'))

        // Array.prototype.lastIndexOf
        console.log('Array.prototype.lastIndexOf')
        console.log(arr3.lastIndexOf('Jigar'))
        // Array.prototype.join
        console.log('Array.prototype.join')
        let arrJoin = ['hello', 'world']
        console.log(arrJoin.join(' '))
        console.log(arr3.join())

        // Array.prototype.keys
        console.log('Array.prototype.keys')
        let arr = ['a', , 'c'];
        let keys = Object.keys(arr3)
        let arr3Keys = arr3.keys()
        console.log(keys)
        console.log(arr3Keys)

        // Array.prototype.map
        console.log('Array.prototype.map')
        console.log(arr2.map(x => x + 2))

        // Array.prototype.reduce
        console.log('Array.prototype.reduce')
        console.log(arr2.reduce((x, y) => {
            console.log('currentValue of x:', x)
            console.log('currentValue of y:', y)
            return x + y
        }))

        // Array.prototype.reverse
        console.log('Array.prototype.reverse')
        console.log(arr2.reverse())
        console.log(arr2)

        // Array.prototype.shift
        console.log('Array.prototype.shift')
        console.log(arr2.shift())
        console.log(arr2);

        // Array.prototype.slice
        console.log('Array.prototype.slice')
        console.log(arr2.slice(0, 1))
        console.log(arr2)

        // Array.prototype.some
        console.log('Array.prototype.some')
        console.log(arr2.some(x => x > 0))

        // Array.prototype.sort
        console.log('Array.prototype.sort')
        console.log(arr2.sort())
        console.log(arr2)

        // Array.prototype.splice
        console.log('Array.prototype.splice')
        console.log(arr3.splice(3, 1))
        console.log(arr3)

        // Array.prototype.unshift
        console.log('Array.prototype.unshft')
        console.log(arr2.unshift(3, 4))
        console.log(arr2);

        const obj = {
            name: 'Jigar',
            rank: '2'
        };

        Object.entries(obj).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
        });
    }
    value = ''

    options = [
        {
            value: "1",
            default: true
        },
        {
            value: "2",
            default: false
        },
        {
            value: "3",
            default: false
        },
    ]
    showInput = false

    getValue(event: any) {
        console.log(event.target.value)
        if (event.target.value === "add-options") {
            this.showInput = true
        } else if (event.target.value !== "add-options") {
            this.showInput = false
        }
    }
    add() {
        if (this.value) {
            this.options.push({
                value: this.value,
                default: false
            })
            this.showInput = false
        }

    }
}
