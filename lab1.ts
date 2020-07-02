// Hw 1:
interface IVehical {
    firstName: string;
    surname: string;
    year: number
}

class Vehical implements IVehical {
    firstName: string;
    surname: string;
    year: number;
    constructor(fname: string, lname: string, year: number) {
        this.firstName = fname;
        this.surname = lname;
        this.year = year;
    }
}

interface ICar {
    carId: string;
    saySomething: () => string;
}

class Car extends Vehical implements ICar {
    carId: string;
    constructor(sid: string, fname: string, lname: string, year: number) {
        super(fname, lname, year);
        this.carId = sid;
    }

    saySomething(): string {
        return `${this.firstName} ${this.surname} is running. I'm born in: ${this.carId} fast car in the world`;
    }
}

interface IWareHouse {
    students: Car[];
}

class WareHouse implements IWareHouse {
    students = [
        new Car("C200", "Mẹc bình dân", "TOYOTA", 2010),
        new Car("C300", "C", "Ford", 2015),
        new Car("S400", "Mẹc VIP", "Honda", 2018),
    ];
}