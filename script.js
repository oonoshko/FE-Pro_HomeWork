function Car(bodyType) {
  this.bodyType = bodyType;
}

Car.prototype.startJourney = function () {
  if (!this.status) {
    console.log(`The car ${this.model} begins its journey.`);
    this.status = true;
    this.vehicleServiceAbility -= (Math.random() * (2.5 - 0.1) + 0.1).toFixed(
      2
    );
  } else {
    console.log(
      `The car ${this.model} is currently on a trip. Wait for the car to return or use another one.`
    );
  }
};
Car.prototype.stopJourney = function () {
  if (this.status) {
    console.log(`The car ${this.model} finishes its journey.`);
    this.status = false;
  } else {
    console.log(
      `The car ${this.model} is standing, you can start a new journey.`
    );
  }
};

function Hatchback(
  fuelConsumption,
  engineType,
  engineCapacity,
  model,
  yearOfManufacture,
  carWeight,
  status,
  vehicleServiceAbility
) {
  Car.apply(this, Hatchback);
  this.fuelConsumption = fuelConsumption;
  this.engineType = engineType;
  this.engineCapacity = engineCapacity;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.carWeight = carWeight;
  this.status = false;
  this.vehicleServiceAbility = 100;
}

function Wagon(
  fuelConsumption,
  engineType,
  engineCapacity,
  model,
  yearOfManufacture,
  carWeight,
  status,
  vehicleServiceAbility
) {
  Car.apply(this, Wagon);
  this.fuelConsumption = fuelConsumption;
  this.engineType = engineType;
  this.engineCapacity = engineCapacity;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.carWeight = carWeight;
  this.status = false;
  this.vehicleServiceAbility = 100;
}
function Sedan(
  fuelConsumption,
  engineType,
  engineCapacity,
  model,
  yearOfManufacture,
  carWeight,
  status,
  vehicleServiceAbility
) {
  Car.apply(this, Sedan);
  this.fuelConsumption = fuelConsumption;
  this.engineType = engineType;
  this.engineCapacity = engineCapacity;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.carWeight = carWeight;
  this.status = true;
  this.vehicleServiceAbility = 100;
}

Hatchback.prototype = Object.create(Car.prototype);
Wagon.prototype = Object.create(Car.prototype);
Sedan.prototype = Object.create(Car.prototype);

const hatchback = new Hatchback(6, "Petrol", 100, "Ford Fiesta", 2015, 1051);
const wagon = new Wagon(6.2, "Diesel", 120, "Ford kuga", 2019, 1605);
const sedan = new Sedan(10, "Petrol", 120, "KIA Ceratto", 2008, 1450);

hatchback.startJourney();
sedan.startJourney();
wagon.startJourney();
// console.log(hatchback.startJourney());
// console.log(hatchback.startJourney());
// console.log(hatchback.stopJourney());
// console.log(hatchback.stopJourney());
// console.log(hatchback.startJourney());
// console.log(hatchback.stopJourney());
// console.log(hatchback.startJourney());
// console.log(hatchback.stopJourney());

// console.log(sedan.startJourney());
// console.log(sedan.stopJourney());
// console.log(sedan.stopJourney());
// console.log(sedan.startJourney());
// console.log(sedan.stopJourney());
// console.log(sedan.startJourney());
// console.log(sedan.stopJourney());
// console.log(sedan.startJourney());
// console.log(sedan.stopJourney());
// console.log(sedan.startJourney());
// console.log(sedan.stopJourney());

// console.log(wagon.startJourney());
// console.log(wagon.startJourney());
// console.log(wagon.stopJourney());
// console.log(wagon.stopJourney());
// console.log(wagon.startJourney());
// console.log(wagon.stopJourney());
// console.log(wagon.startJourney());
// console.log(wagon.stopJourney());

const dealer = function (car) {
  const price = {};
  const damageLevel = (100 - car.vehicleServiceAbility).toFixed(2);

  if (car.vehicleServiceAbility === 100) {
    console.log(`Your vehicle ${car.model} has a good technical condition.`);
  } else if (car.vehicleServiceAbility <= 0) {
    console.log(
      "Your vehicle is beyond repair. It has a negative level of damage."
    );
  } else if (car.yearOfManufacture < 1990) {
    console.log(
      `Unfortunately, we don't repair cars made before ${car.yearOfManufacture}.`
    );
  } else if (car.carWeight <= 800) {
    console.log(
      `Unfortunately, we repair cars weighing from 800 kg. Your car has only ${car.carWeight} kg.`
    );
  } else if (hatchback instanceof Hatchback) {
    price.typeHatchback = 110;

    if (car.yearOfManufacture >= 1990 && car.yearOfManufacture <= 1999) {
      price.koefYearOfManufacture = 2;
    } else if (car.yearOfManufacture >= 2000 && car.yearOfManufacture <= 2009) {
      price.koefYearOfManufacture = 1.7;
    } else if (car.yearOfManufacture >= 2010 && car.yearOfManufacture <= 2018) {
      price.koefYearOfManufacture = 1.4;
    } else if (car.yearOfManufacture >= 2019 && car.yearOfManufacture <= 2022) {
      price.koefYearOfManufacture = 1.2;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByYear =
      price.koefYearOfManufacture * price.typeHatchback;

    if (car.engineType === "Petrol") {
      price.koefEngineType = 1.8;
    } else if (car.engineType === "Diesel") {
      price.koefEngineType = 2.2;
    } else {
      console.log(`We don't repair cars with ${car.engineType} engine type.`);
    }

    const amountOfRepairByEngine = price.koefEngineType * price.typeHatchback;

    if (car.carWeight >= 800 && car.carWeight <= 1100) {
      price.koefCarWeight = 1.5;
    } else if (car.carWeight >= 1101 && car.carWeight <= 1400) {
      price.koefCarWeight = 1.7;
    } else if (car.carWeight >= 1401) {
      price.koefCarWeight = 2.0;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByWeight = price.koefCarWeight * price.typeHatchback;

    const totalAmount = (
      amountOfRepairByYear +
      amountOfRepairByEngine +
      amountOfRepairByWeight +
      damageLevel * price.typeHatchback
    ).toFixed(2);

    console.log(
      `You had ${damageLevel} damage level. Total amount for repairing your ${car.model} is ${totalAmount} UAH.`
    );
    car.vehicleServiceAbility = 100;
  } else if (sedan instanceof Sedan) {
    price.typeSedan = 125;

    if (car.yearOfManufacture >= 1990 && car.yearOfManufacture <= 1999) {
      price.koefYearOfManufacture = 2.6;
    } else if (car.yearOfManufacture >= 2000 && car.yearOfManufacture <= 2009) {
      price.koefYearOfManufacture = 2.0;
    } else if (car.yearOfManufacture >= 2010 && car.yearOfManufacture <= 2018) {
      price.koefYearOfManufacture = 1.8;
    } else if (car.yearOfManufacture >= 2019 && car.yearOfManufacture <= 2022) {
      price.koefYearOfManufacture = 1.5;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByYear = price.koefYearOfManufacture * price.typeSedan;

    if (car.engineType === "Petrol") {
      price.koefEngineType = 2.0;
    } else if (car.engineType === "Diesel") {
      price.koefEngineType = 2.5;
    } else {
      console.log(`We don't repair cars with ${car.engineType} engine type.`);
    }

    const amountOfRepairByEngine = price.koefEngineType * price.typeSedan;

    if (car.carWeight >= 800 && car.carWeight <= 1100) {
      price.koefCarWeight = 1.6;
    } else if (car.carWeight >= 1101 && car.carWeight <= 1400) {
      price.koefCarWeight = 1.8;
    } else if (car.carWeight >= 1401) {
      price.koefCarWeight = 2.1;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByWeight = price.koefCarWeight * price.typeSedan;

    const totalAmount = (
      amountOfRepairByYear +
      amountOfRepairByEngine +
      amountOfRepairByWeight +
      damageLevel * price.typeSedan
    ).toFixed(2);

    console.log(
      `You had ${damageLevel} damage level. Total amount for repairing your ${car.model} is ${totalAmount} UAH.`
    );
    car.vehicleServiceAbility = 100;
  } else if (wagon instanceof Wagon) {
    price.typeWagon = 130;

    if (car.yearOfManufacture >= 1990 && car.yearOfManufacture <= 1999) {
      price.koefYearOfManufacture = 3.0;
    } else if (car.yearOfManufacture >= 2000 && car.yearOfManufacture <= 2009) {
      price.koefYearOfManufacture = 2.5;
    } else if (car.yearOfManufacture >= 2010 && car.yearOfManufacture <= 2018) {
      price.koefYearOfManufacture = 2.2;
    } else if (car.yearOfManufacture >= 2019 && car.yearOfManufacture <= 2022) {
      price.koefYearOfManufacture = 2.0;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByYear = price.koefYearOfManufacture * price.typeWagon;

    if (car.engineType === "Petrol") {
      price.koefEngineType = 2.4;
    } else if (car.engineType === "Diesel") {
      price.koefEngineType = 2.9;
    } else {
      console.log(`We don't repair cars with ${car.engineType} engine type.`);
    }

    const amountOfRepairByEngine = price.koefEngineType * price.typeWagon;

    if (car.carWeight >= 800 && car.carWeight <= 1100) {
      price.koefCarWeight = 1.7;
    } else if (car.carWeight >= 1101 && car.carWeight <= 1400) {
      price.koefCarWeight = 1.9;
    } else if (car.carWeight >= 1401) {
      price.koefCarWeight = 2.2;
    } else {
      console.log("You enter wrong information.");
    }

    const amountOfRepairByWeight = price.koefCarWeight * price.typeWagon;

    const totalAmount = (
      amountOfRepairByYear +
      amountOfRepairByEngine +
      amountOfRepairByWeight +
      damageLevel * price.typeWagon
    ).toFixed(2);

    console.log(
      `You had ${damageLevel} damage level. Total amount for repairing your ${car.model} is ${totalAmount} UAH.`
    );
    car.vehicleServiceAbility = 100;
  }
};

dealer(hatchback);
dealer(sedan);
dealer(wagon);
