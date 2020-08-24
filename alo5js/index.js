function anketa() {
  const mark = getInfo("Марку машины", isCorectMark);
  const model = getInfo("Модель машины", isCorectMark);
  const age = getInfo("Год машины", isCorectAge);
  const fuelBoolean = confirm("Если бензин нажмите 'ОК'");

  let fuel = gree(fuelBoolean);

  const ageAuto = aggr(age);
  print(mark, model, age, ageAuto, fuel);
}

function getInfo(message, validation) {
  // в скобках просто пораметр который надо передать, по очереди
  let data = prompt(message);
  if (validation(data) === true) {
    return data;
  } else {
    alert("Строка введена неверно!!");
    return getInfo(message, validation);
  }
}

function isCorectAge(age) {
  if (!age || !Number(age) || age < 0) {
    return false;
  }
  return true;
}
function isCorectMark(data) {
  if (data === "" || Number(data)) {
    return false;
  }
  return true;
}

function gree(fuelBoolean) {
  if (fuelBoolean === true) {
    return "бензин";
  } else {
    return "disel";
  }
}

function aggr(age) {
  if (age >= 2015) {
    return "Новая";
  } else {
    return "Старая";
  }
}

function print(mark, model, age, ageAuto, fuel) {
  alert(`Марка машины: ${mark}
Модель: ${model}
Ваша машина: ${age} года
Топливо: ${fuel}
Ваша машина: ${ageAuto}`);
}

anketa();
