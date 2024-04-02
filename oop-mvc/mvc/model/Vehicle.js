const fs = require('fs')

class Vehicle {
    constructor(id, name, brand, price, type){
        this.id = id
        this.name = name
        this.brand = brand
        this.price = price
        this.type = type
    }

    static getVehicles(){
        let parsedData = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        let vehicles = parsedData.map(vehicle => {
            const {id, name, brand, price, type} = vehicle
            return new Vehicle(id, name, brand, price, type)
        })
        return vehicles
    }

    static add(params){
        let vehicles = this.getVehicles()
        let id = vehicles[vehicles.length - 1].id + 1
        const [name, brand, price, type] = params

        vehicles.push(
            new Vehicle(id, name, brand, Number(price), type)
        )
        this.save(vehicles)
        // console.log(vehicles)
    }

    static save(vehicles){
        let vehicleString = JSON.stringify(vehicles,null,3)
        fs.writeFileSync('./data.json', vehicleString)
    }
}

module.exports = Vehicle