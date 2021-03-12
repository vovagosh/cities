class country {
    name;
    cities = [];
    constructor(name) {
        this.name = name;
    }
    setCities() {
        for (let arg of arguments) {
            this.cities.push(arg);
        }
    }
    addToSelect(select) {
        for (let city of this.cities) {
            select.add(new Option(city))
        }
    }
}

const countries = [];
countries[0] = new country("German");
countries[0].setCities("Berlin", "Frankfurt", "Bremen");
countries[1] = new country("France");
countries[1].setCities("Paris", "Marseille ", "Liyon");
countries[2] = new country("Italy");
countries[2].setCities("Rome", "Milane ", "Venesia");