// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
// Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const shoppingList = [
    { name: "яблука", quantity: 3, bought: false, price: 10, total: 0 },
    { name: "молоко", quantity: 1, bought: true, price: 25, total: 0 },
    { name: "хліб", quantity: 2, bought: false, price: 15, total: 0 },
    { name: "сир", quantity: 1, bought: true, price: 30, total: 0 }
  ];

  function printShoppingList() {
    console.log("Список покупок:");
    shoppingList.forEach(item => {
      console.log(`${item.name} (${item.quantity} шт.) - ${item.price} грн. за шт. (${item.bought ? 'куплено' : 'не куплено'})`);
    });
  }

  function buyProduct(productName) {
    const item = shoppingList.find(item => item.name === productName);
    if (item) {
      item.bought = true;
      item.total = item.quantity * item.price;
      console.log(`${item.name} куплено.`);
    } else {
      console.log(`Товар з назвою "${productName}" не знайдено.`);
    }
  }

  printShoppingList();

  buyProduct("яблука");

  printShoppingList();
