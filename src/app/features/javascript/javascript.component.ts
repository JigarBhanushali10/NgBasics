import { Component, OnInit } from '@angular/core';

export class ok {
    firstName: string;
    company: string;
    gender: string;
    age: number;
}

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss']
})

export class JavascriptComponent implements OnInit {

    temp: any;
    tem: Array<ok>;


    constructor() {
        this.filter()
        // this.spread () 
        // this.stringyfy () 
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
            company: "1rivet",
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
            company: "1rivet",
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
            company: "1rivet",
            gender: "Male",
            age: 22
        },
    ]

    ngOnInit(): void {

    }

    public filter() {
        this.tem = this.array1.filter((data) => data.company === '1rivet');
        console.log(this.tem);
    }
    // public filter(){
    // this.temp = this.array1.filter((data) => data.company === '1rivet');
    // console.log(this.array1.filter((data) => data.company === '1rivet'));

    // }


    temporary: {
        name: string,
        obj: {
            a: string
        }
    }[] = [
            {
                name: "Ok",
                obj: {
                    a: "Not Ok"
                }
            },
            {
                name: "Okkk",
                obj: {
                    a: "Not Okkk"
                }
            },
            {
                name: "Ooook",
                obj: {
                    a: "Not Ooook"
                }
            }
        ];


    // Deeeeeeeep TCopy
    public stringyfy() {
        this.temp = this.temporary.map((firm) => {
            console.log(JSON.stringify(firm));
            let t = JSON.parse(JSON.stringify(firm));
            if (t.name === 'Ooook') {
                t.obj.a = "Tesla"
            }
            return t;
        }
        )
        console.log(this.temp)
        console.log(this.temporary)
    }

    // Shallow Copy
    public spread() {
        this.temp = this.temporary.map((firm) => {
            let t = { ...firm };
            if (t.name === 'Ooook') {
                t.obj.a = "Tesla"
            }
            return t;
        }
        )
        console.log(this.temp)
        console.log(this.temporary)
    }

    public map() {
        this.temp = this.array2.map((firm) => {
            let t = { ...firm };
            if (t.company === '1rivet') {
                t.company = "Tesla"
            }
            return t;
        }
        )
        console.log(this.temp)
        console.log(this.array2)
    }



}
