class Location {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    getDistance(loc) {
        let a = this.x - loc.x;
        let b = this.y - loc.y;
        
        return Math.sqrt(a * a + b * b)
    }
}

module.exports = Location;