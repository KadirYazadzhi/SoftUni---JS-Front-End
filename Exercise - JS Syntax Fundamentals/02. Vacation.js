function solve(count, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.90;
            } else if (type === "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (type === "Students") {
                price = 9.80;
            } else if (type === "Business") {
                price = 15.60;
            } else if (type === "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else if (type === "Regular") {
                price = 22.50;
            }
            break;
    }
    let totalPrice = price * count;
    if (type === "Students" && count >= 30) {
        totalPrice *= 0.85;
    } else if (type === "Business" && count >= 100) {
        totalPrice -= 10 * price;
    } else if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}