'use strict'

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 


const cars = [
    { 
      manufacturer: 'BMW',
      model: 'X5',
      year: 2020,
      averageSpeed: 120,
      fuelTankVolume: 70,
      fuelConsumption: 9,
      drivers: [],
      image: 'img/bmw.png'
    },
    {
      manufacturer: 'Audi',
      model: 'A3',
      year: 2021,
      averageSpeed: 110,
      fuelTankVolume: 60,
      fuelConsumption: 7.5,
      drivers: [],
      image: 'img/audi.png'

    },
    {
      manufacturer: 'Toyota',
      model: 'Camry',
      year: 2022,
      averageSpeed: 100,
      fuelTankVolume: 50,
      fuelConsumption: 8,
      drivers: [],
      image: 'img/toyota.png'

    },
    {
      manufacturer: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2023,
      averageSpeed: 130,
      fuelTankVolume: 80,
      fuelConsumption: 10,
      drivers: [],
      image: 'img/mercedes.png'

    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        year: 2021,
        averageSpeed: 95,
        fuelTankVolume: 50,
        fuelConsumption: 6.5,
        drivers: [],
        image: 'img/volkswagen.png'
      },
      {
        manufacturer: 'Volvo',
        model: 'XC90',
        year: 2021,
        averageSpeed: 100,
        fuelTankVolume: 70,
        fuelConsumption: 7,
        drivers: [],
        image: 'img/volvo.png'
      },
      {
        manufacturer: 'Mitsubishi',
        model: 'Outlander',
        year: 2022,
        averageSpeed: 90,
        fuelTankVolume: 55,
        fuelConsumption: 8,
        drivers: [],
        image: 'img/mitsubishi.png'
      }
  ];
  

  const carSelect = document.getElementById('car-select');
  const carInfoDiv = document.getElementById('car-info');

  carSelect.addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
      const car = cars.find(c => c.manufacturer === selectedValue);
      if (car) {
        const carInfo = `<b>Марка:</b> ${car.manufacturer}<br><b>Модель:</b> ${car.model}<br><b>Рік випуску:</b> ${car.year}<br> <b>Розхід на 100км:</b> ${car.fuelConsumption + " літрів"} <br><b>Середня швидкість:</b>  ${car.averageSpeed + " km"}<br> <img src="${car.image}" alt="${car.model}">`;
        carInfoDiv.innerHTML = carInfo;
      }
    } else {
      carInfoDiv.innerHTML = '';
    }
  });

  const driversList = ['Шумахер', 'Роман', 'Ілля', 'Ярік', 'Торетто'];

  const inputDriver = document.getElementById('input');
  const button = document.getElementById('button');
  const driverInfo = document.getElementById('driver-info');
  
  button.addEventListener('click', function() {
    const driverName = inputDriver.value;

    if (driversList.includes(driverName)) {
        const driverImage = document.createElement('img');
        driverImage.src = '/img/driver.png';
        driverImage.classList.add('driver-photo');
        driverInfo.innerHTML = driverName;
        driverInfo.appendChild(driverImage);
    } else {
        driverInfo.innerHTML = 'Водія не знайдено';
      }

    inputDriver.value = '';
  });
  
  
  const distanceInput = document.getElementById('distance-input');
const calculateBtn = document.getElementById('calculate-btn');
const resultTrip = document.querySelector('.result-trip');
let carSelectToCalc = document.getElementById('car-select');

calculateBtn.addEventListener('click', () => {
  const distance = parseFloat(distanceInput.value);
  if (isNaN(distance) || distance <= 0) {
    resultTrip.textContent = 'Будь ласка, введіть правильну дистанцію!';
    return;
  }

  const selectedCar = cars.find(car => car.manufacturer === carSelect.value);

  if (!selectedCar) {
    resultTrip.textContent = 'Будь ласка, виберіть автомобіль зі списку!';
    return;
  }

  const time = distance / selectedCar.averageSpeed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  const stops = Math.ceil(distance / 500);
  const fuel = (distance / 100) * selectedCar.fuelConsumption;

  resultTrip.innerHTML = `
    <div>
      <h3>${selectedCar.manufacturer} ${selectedCar.model}</h3>
      <p>Час подорожі: ${hours} год ${minutes} хв</p>
      <p>Кількість зупинок: ${stops}</p>
      <p>Кількість витраченого пального: ${fuel.toFixed(2)} л</p>
    </div>
  `;
});


  


  


  

  
  
  
  





