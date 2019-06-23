const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');

module.exports.get =  (req, res) => {
    let products = [];
    if (fs.existsSync(productsPath)) {
        products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    }
    return products;
};

module.exports.add =  ({photo, name, price}) => {

    const { name: photoName, size, path: tempPath } = photo;
    const uploadDir = path.join(process.cwd(), 'public', 'assets', 'img', 'products');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    if (!name || !price) {
        fs.unlinkSync(tempPath);
        return res.json({ msg: 'All fields are required', status: 'Error' });
    }
    if (!photoName || !size) {
        fs.unlinkSync(tempPath);
        return res.json({ msg: 'File not saved', status: 'Error' });
    }

    fs.renameSync(tempPath, path.join(uploadDir, photoName));

    let products = [];
    if (fs.existsSync(productsPath)) {
        products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    }

    let newProducts = products.slice();
    newProducts.push({
        "src": "./assets/img/products/" + photoName,
        "name": name,
        "price": price
    });

    fs.writeFileSync(path.join(process.cwd(), '/data/products.json'), JSON.stringify(newProducts));
};
