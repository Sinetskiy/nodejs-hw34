const fs = require('fs');
const path = require('path');

const skillsPath = path.join(__dirname, '../data/skills.json');

exports.get = () => new Promise(async (resolve, reject) => {
    try {
        let skills = [];
        if (fs.existsSync(skillsPath)) {
            skills = JSON.parse(fs.readFileSync(skillsPath, 'utf-8'));
        }
        resolve(skills);
    } catch (err) {
        reject(err);
    }
});

exports.update = ({age, concerts, cities, years}) => new Promise(async (resolve, reject) => {
    try {
        let skills = [];
        if (fs.existsSync(skillsPath)) {
            skills = JSON.parse(fs.readFileSync(skillsPath, 'utf-8'));
        }

        if (age) skills.find(v => v.id === 'age').number = parseInt(age);
        if (concerts) skills.find(v => v.id === 'concerts').number = parseInt(concerts);
        if (cities) skills.find(v => v.id === 'cities').number = parseInt(cities);
        if (years) skills.find(v => v.id === 'years').number = parseInt(years);

        fs.writeFileSync(path.join(process.cwd(), '/data/skills.json'), JSON.stringify(skills));
        resolve(true);
    } catch (err) {
        reject(err);
    }
});
