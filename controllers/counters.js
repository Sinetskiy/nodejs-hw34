const fs = require('fs');
const path = require('path');

const countersPath = path.join(__dirname, '../data/counters.json');

module.exports.get = (req, res) => {
    let counters = [];
    if (fs.existsSync(countersPath)) {
        counters = JSON.parse(fs.readFileSync(countersPath, 'utf-8'));
    }
    return counters;
};

module.exports.update = ({age, concerts, cities, years}) => {

    let counters = [];
    if (fs.existsSync(countersPath)) {
        counters = JSON.parse(fs.readFileSync(countersPath, 'utf-8'));
    }

    if (age) counters.find(v => v.id === 'age').number = parseInt(age);
    if (concerts) counters.find(v => v.id === 'concerts').number = parseInt(concerts);
    if (cities) counters.find(v => v.id === 'cities').number = parseInt(cities);
    if (years) counters.find(v => v.id === 'years').number = parseInt(years);

    fs.writeFileSync(path.join(process.cwd(), '/data/counters.json'), JSON.stringify(counters));
};
