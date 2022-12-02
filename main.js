fetch("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car").then(onCarsLoaded);

function displayCars(cars) {
  const containerElement = document.createElement('main');

  const carsElement = cars.map((car) => {
    const carElement = document.createElement('p');

    carElement.innerText = car.name; 

    return carElement;
  })

  carsElement.forEach((i) => containerElement.appendChild(i))

  document.body.appendChild(containerElement);
}

async function onCarsLoaded(response) {
  const body = await response.json();
  const cars = body.cars;

  return displayCars(cars)
}
