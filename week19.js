//Задание 1
//Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch(). Результат должен быть выведен в консоль. Функция вызывается по нажатию кнопки "Задание 1".

function makeOne() {
  console.log("* * * ЗАДАНИЕ_1 * * *");
  //Ваш код
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.fact);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Создайте функцию makeTwo, которая выполняет GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive. Результат запроса - поле htmlCode вставьте в элемент с id result2.

function makeTwo() {
  console.log("* * * ЗАДАНИЕ_2 * * *");
  const result2 = document.getElementById("result2");
  const paragraph2 = document.createElement("p");
  result2.appendChild(paragraph2);
  fetch("https://emojihub.yurace.pro/api/random/group/face-positive")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.htmlCode);
      paragraph2.textContent = data.htmlCode;
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
      paragraph2.textContent = "Ошибка. Запрос не выполнен";
    });
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeThree() {
  console.log("* * * ЗАДАНИЕ_3 * * *");
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Создайте функцию makeFour, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль полученную активность в формате 'Activity: описание активности'.

function makeFour() {
  console.log("* * * ЗАДАНИЕ_4 * * *");
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(`Activity: ${data.activity}`);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Создайте функцию makeFive, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль количество участников для активности.

function makeFive() {
  console.log("* * * ЗАДАНИЕ_5 * * *");
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(`Количество участников для активности: ${data.participants}`);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

//добавьте слушатель события
document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Создайте функцию makeSix, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль свойства из полученного объекта, такие как activity, type, price и accessibility.

function makeSix() {
  console.log("* * * ЗАДАНИЕ_6 * * *");
  //Ваш код
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(`Activity: ${data.activity}`);
      console.log(`Type: ${data.type}`);
      console.log(`Price: ${data.price}`);
      console.log(`accessibility: ${data.accessibility}`);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Создайте функцию makeSeven, которая делает запрос на адрес https://api.agify.io/. Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeSeven() {
  console.log("* * * ЗАДАНИЕ_7 * * *");
  fetch("https://api.agify.io/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Создайте функцию makeEight, которая отправляет GET-запрос на адрес https://api.agify.io/ с параметром ?name=alice.

function makeEight() {
  console.log("* * * ЗАДАНИЕ_8 * * *");
  fetch("https://api.agify.io/?name=alice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен");
    });
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Создайте функцию makeNine, которая отправит запрос на адрес `https://api.agify.io/?name=vadim` и выведет полученные данные в элемент с id result9.
//Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeNine() {
  console.log("* * * ЗАДАНИЕ_9 * * *");
  fetch("https://api.agify.io/?name=vadim")
    .then((response) => response.json())
    .then((data) => {
      const result9 = document.getElementById("result9");
      const paragraph9 = document.createElement("p");
      result9.appendChild(paragraph9);
      paragraph9.textContent = JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Создайте функцию makeTen, которая делает запрос на адрес https://dog.ceo/api/breeds/image/random. Полученное изображение выведите после элемента с id "result10".

function makeTen() {
  console.log("* * * ЗАДАНИЕ_10 * * *");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const result10 = document.getElementById("result10");
      const img10 = document.createElement("img");
      result10.appendChild(img10);
      img10.src = data.message;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Создайте функцию makeEleven, которая делает запрос на адрес "https://api.ipify.org?format=json". Полученный результат выведите в элемент с id "result11".

function makeEleven() {
  console.log("* * * ЗАДАНИЕ_11 * * *");
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      const result11 = document.getElementById("result11");
      const paragraph11 = document.createElement("p");
      result11.appendChild(paragraph11);
      paragraph11.textContent = "текущий IP-адрес: " + data.ip;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая будет получать IP-адрес из поля ввода находить его гео-позицию.
//178.71.113.131 , ${country_flag}`
function makeTwelve() {
  console.log("* * * ЗАДАНИЕ_12 * * *");
  const ipAddressInput = document.getElementById("ipAddress");
  const resultElement = document.getElementById("result12");

  const ipAddress = ipAddressInput.value;

  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=3130a7a1a6124fce8fecd6022dfd267e&ip=${ipAddress}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { city, country_name, country_flag } = data;
      const result = `Гео-позиция: ${city}, ${country_name}`;
      resultElement.textContent = result;
      const paragraph12 = document.createElement("p");
      const img12 = document.createElement("img");
      resultElement.appendChild(paragraph12);
      paragraph12.appendChild(img12);
      img12.src = data.country_flag;
      img12.style.boxShadow = "1px 1px 5px 3px gray";
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

//Задание 13
//Создайте функцию makeThree, которая делает запрос на адрес 	fetch('https://official-joke-api.appspot.com/random_joke'). Выведите в консоль ответ с сервера, чтобы посмотреть, какие поля есть в ответе.

function makeThirteen() {
  console.log("* * * ЗАДАНИЕ_13 * * *");
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-13").addEventListener("click", makeThirteen);

//Задание 14
//Создайте функцию makeFourteen, которая делает запрос на адрес https://official-joke-api.appspot.com/random_joke с помощью функции fetch() . Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.

function makeFourteen() {
  console.log("* * * ЗАДАНИЕ_14 * * *");
  const resultElement = document.getElementById("result14");

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const setup = data.setup;
      const punchline = data.punchline;

      const jokeHTML = `
        <p><strong>Setup:</strong> ${setup}</p>
        <p><strong>Punchline:</strong> ${punchline}</p>
      `;

      resultElement.innerHTML = jokeHTML;
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-14").addEventListener("click", makeFourteen);

//Задание 15
//Создайте функцию makeFifteen, которая выполняет POST-запрос по адресу https://randomuser.me/api/, используя функцию fetch(). Выведите ответ от сервера в консоль.

function makeFifteen() {
  console.log("* * * ЗАДАНИЕ_15 * * *");
  const postData = {
    title: "Заголовок",
    body: "Текст поста",
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-15").addEventListener("click", makeFifteen);

//Задание 16
//Создайте функцию makeSixteen, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeSixteen() {
  console.log("* * * ЗАДАНИЕ_16 * * *");
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-16").addEventListener("click", makeSixteen);

//Задание 17
//Создайте функцию makeSeventeen, которая должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Полученный ответ с сервера должен быть выведен в консоль.

const makeSeventeen = () => {
  console.log("* * * ЗАДАНИЕ_17 * * *");
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
};

document.querySelector(".b-17").addEventListener("click", makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch(). ыведите ответ с сервера в консоль.

function makeEighteen() {
  console.log("* * * ЗАДАНИЕ_18 * * *");
  const postData = {
    title: "Название изображения",
    url: "https://example.com/image.jpg",
  };

  fetch("https://jsonplaceholder.typicode.com/photos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-18").addEventListener("click", makeEighteen);

//Задание 19
//Создайте функцию makeNineteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeNineteen() {
  console.log("* * * ЗАДАНИЕ_19 * * *");

  const postData = {
    name: "Кот Учёный",
    username: "kitty",
    email: "kitty@example.com",
    phone: "123-456-7890",
  };
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-19").addEventListener("click", makeNineteen);

//Задание 20
//Создайте функцию makeTwenty, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwenty() {
  console.log("* * * ЗАДАНИЕ_20 * * *");

  const postData = {
    name: "Золотая рыбка",
    email: "goldfish@example.com",
    body: "Гав-гав!",
    postId: 1,
  };
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-20").addEventListener("click", makeTwenty);

//Задание 21
//Создайте функцию makeTwentyOne, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwentyOne() {
  console.log("* * * ЗАДАНИЕ_21 * * *");

  const postData = {
    name: "Золотая рыбка",
    email: "goldfish@example.com",
    body: "Буль-буль!",
    postId: 1,
  };
  fetch("https://jsonplaceholder.typicode.com/comments/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-21").addEventListener("click", makeTwentyOne);

//Задание 22
//Создайте функцию makePromiseAllOne, которая должна делать два GET-запроса на адреса: https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1. Используйте `.then()` для обработки результатов.
//Выведите оба ответа с сервера в консоль.

function makePromiseAllOne() {
  console.log("* * * ЗАДАНИЕ_22 * * *");
  const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json()
  );
  const promise2 = fetch("https://jsonplaceholder.typicode.com/comments/1").then((response) => response.json());

  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results[0]);
      console.log(results[1]);
    })
    .catch((error) => console.error("Ошибка:", error));
}

document.querySelector(".b-22").addEventListener("click", makePromiseAllOne);

//Задание 23
//Создайте функцию makePromiseAllTwo, которая должна делать три GET-запроса на адреса: https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1.
//Используйте `async/await` для обработки результатов. Выведите все ответы с сервера в консоль.

async function makePromiseAllTwo() {
  console.log("* * * ЗАДАНИЕ_23 * * *");
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data1 = await response1.json();
    console.log(data1);

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data2 = await response2.json();
    console.log(data2);

    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const data3 = await response3.json();
    console.log(data3);
  } catch (error) {
    console.error("Ошибка при выполнении запросов:", error);
  }
}

document.querySelector(".b-23").addEventListener("click", makePromiseAllTwo);

//Задание 24
//Какое имя выведется в консоль?

const makeTwentyFour = () => {
  console.log("* * * ЗАДАНИЕ_24 * * *");
  console.log(
    "Ответ: Вася. Потому что у функции своя область видимости. И во второй функции свойство name было объявлено, но не значение не было прочитано."
  );
  let name = "Вася";
  function sayHi() {
    console.log(name);
  }

  setTimeout(function () {
    let name = "Петя";
    sayHi();
  }, 1000);
};

document.querySelector(".b-24").addEventListener("click", makeTwentyFour);

//Задание 25
//В каком порядке числа выведутся в консоль?

function makeTwentyFive() {
  console.log("* * * ЗАДАНИЕ_25 * * *");
  console.log(
    "Ответ: 1,3,2. Таймер установлен на 0 миллисекунд, но это не означает, что код внутри setTimeout выполнится мгновенно. Внутренняя функция будет помещена в очередь событий и выполнится после того, как текущий код завершится."
  );
  console.log(1);

  //Cтавим таймер на 0 миллисекунд
  setTimeout(function () {
    console.log(2);
  }, 0);

  console.log(3);
}

document.querySelector(".b-25").addEventListener("click", makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 5 секунд" через 5 секунд. Вызывается функция по кнопке Задание 26.

function makeTwentySix() {
  console.log("* * * ЗАДАНИЕ_26 * * *");
  setTimeout(function () {
    console.log("Прошло 5 секунд");
  }, 5000);
}

document.querySelector(".b-26").addEventListener("click", makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 2 секунды" через 2 секунды. Вызывается функция по кнопке Задание 27.

function makeTwentySeven() {
  console.log("* * * ЗАДАНИЕ_27 * * *");
  setTimeout(function () {
    console.log("Прошло 2 секунд");
  }, 2000);
}

document.querySelector(".b-27").addEventListener("click", makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая использует `setInterval` для отображения в консоли сообщения "Прошло 3 секунды" каждые 3 секунды.

function makeTwentyEight() {
  console.log("* * * ЗАДАНИЕ_28 * * *");
  setInterval(function () {
    console.log("Прошло 3 секунды");
  }, 3000);
}

document.querySelector(".b-28").addEventListener("click", makeTwentyEight);

//Задание 29
//Создайте функцию makeTwentyNine, которая использует `setInterval` для отображения в консоли сообщения "Прошло 2 секунды" каждые 2 секунды.

function makeTwentyNine() {
  console.log("* * * ЗАДАНИЕ_29 * * *");
  setInterval(function () {
    console.log("Прошло 2 секунды");
  }, 2000);
}

document.querySelector(".b-29").addEventListener("click", makeTwentyNine);

//Задание 30
//Создайте функцию makeThirty, которая использует `setInterval` для отображения в консоли сообщения "Прошло 5 секунд" каждые 5 секунд.

function makeThirty() {
  console.log("* * * ЗАДАНИЕ_30 * * *");
  setInterval(function () {
    console.log("Прошло 5 секунды");
  }, 5000);
}

document.querySelector(".b-30").addEventListener("click", makeThirty);
