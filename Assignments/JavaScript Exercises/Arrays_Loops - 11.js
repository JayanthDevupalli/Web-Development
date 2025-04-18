function groupByCategory(items, categoryKey) {
    return items.reduce((grouped, item) => {
        const category = item[categoryKey];
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(item);

        return grouped;
    }, {});
}
const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Mouse', category: 'Electronics', price: 30 },
    { name: 'Jeans', category: 'Apparel', price: 70 },
];

const grouped = groupByCategory(products, 'category');
console.log(grouped);
