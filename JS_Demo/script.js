// "use strict";

{
  // 数值转换成字符串
  let a_1 = "" + 1;
  console.log(a_1, "\n", typeof a_1);
  // 字符串转换成数值
  let a_2 = +"1";
  console.log(a_2, typeof a_2);
  console.log("==============================");
}

{
  let b = "0";
  let c = +"0"; // 0
  let d = undefined;
  let e = null;

  if (b) {
    console.log("true");
  } else {
    console.log("false");
  }

  if (c) {
    console.log("true");
  } else {
    console.log("false");
  }

  if (d) {
    console.log("true");
  } else {
    console.log("false");
  }

  if (e) {
    console.log("true");
  } else {
    console.log("false");
  }
}

{
  let obj = {
    name: "Raymond",
    age: 18,
  };
  console.table(obj);

  obj.income = 0;
  console.table(obj);

  obj["name"] = "Tianyang";
  console.table(obj);
}

{
  let obj = {
    name: "Raymond",
    age: 18,
  };

  let a = 1;
  let b = a;

  console.log(a, b);
  b = 2;
  console.log(a, b);

  let obj_2 = obj;
  console.log(obj, obj_2);
  obj_2.age = 30;
  console.log(obj, obj_2);

  let obj_3 = { ...obj };
  console.log(obj, obj_3);
  obj_3.age = 100;
  console.log(obj, obj_3);

  let user = {
    name: "Raymond",
    age: 18,
    profile: {
      cv: "https://xxx",
      id: 121212,
    },
  };

  let user2 = { ...user };
  user2.name = "Peter";
  console.log(user, user2);
  user2.profile.id = 787878;
  console.log(user, user2);
}

{
  let array = [1, 2, 3, "4", true, { name: "Raymond" }];
  console.table(array);

  let array_2 = array;
  array_2[4] = false;
  console.table(array);

  array[100] = 78;
  console.log(array[100]);
  console.log(array.length);

  // array[100].name = "Tianyang";
  // console.log(array[100]);
  // console.log(array[100].name);
  //   array[101].name = "Tianyang";
}

{
  let x = 10;
  let y = 0;
  let z = 3;
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x / z);
  console.log(x % z);
  console.log(x ** z);
  console.log(Math.sqrt(10000));
  console.log("==============================");
  // 先使用后运算
  console.log(x++);
  console.log(x);
  console.log(x--);
  console.log(x);
  // 先运算后使用
  console.log(++x);
  console.log(x);
  console.log(--x);
  console.log(x);
  console.log((x += 5));
  console.log(x ?? 5);
  console.log("==============================");
}

{
  console.log(0 == false);
  console.log(0 === false);
  console.log("==============================");
  console.log(0 != false);
  console.log(0 !== false);
  console.log("==============================");
  console.log(1 == true);
  console.log(2 == true);
  console.log("==============================");
}

{
  console.log("0" || false);
  console.log(0 || false);
  console.log(null || false);
  console.log(undefined || false);
  console.log(NaN || false);
  console.log("==============================");
  console.log(1 || false);
  console.log(false || 2);
  console.log(3 || 10);
  console.log("==============================");
  console.log(!0);
  console.log(1 == true);
  console.log(!1);
  // 2 == true --> false
  // !2        --> false
  console.log(2 == true);
  console.log(!2);
}

{
  const roles = ["student", "teacher", "boss"];
  let role = roles[0];

  switch (role) {
    case roles[0]:
      console.log("hello! student");
      break;
    case roles[1]:
      console.log("hello! teacher");
      break;
    case roles[2]:
      console.log("hello! boss");
      break;
    default:
      console.log("hello! ...");
      break;
  }
}

{
  let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num = 0;
  while (num < 9) {
    arrayNumber[num] += 1;
    num++;
  }
  console.log(arrayNumber);

  let newArrayNumber = [];
  for (let i = 0; i < 10; i++) {
    newArrayNumber[i] = i + 5;
  }
  console.log(newArrayNumber);
  console.log("==============================");
  // forEach是一个迭代器
  newArrayNumber.forEach((num, index) =>
    console.log("1:", num, "index:", index)
  );

  // for循环效率高，大量数据处理快
  for (let i = 0; i < newArrayNumber.length; i++) {
    console.log("2:", newArrayNumber[i], "i:", i);
  }

  let cum = 0;
  newArrayNumber.forEach((num) => (cum += num));
  console.log(cum);

  cum = 0;
  for (let i = 0; i < newArrayNumber.length; i++) {
    cum += newArrayNumber[i];
  }
  console.log(cum);
}

{
  let str = "";
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}*${j}=${i * j} `;
      if (i === j) {
        str += "\n";
      }
    }
  }
  console.log(str);
}

{
  function func1(array) {
    let cum = 0;
    array.forEach((num) => (cum += num));
    console.log(cum);
  }

  func1([1, 2, 3, 4, 5, 10, -100]);

  function func2(a, b, ...rest) {
    let cum = a + b;
    rest.forEach((num) => (cum += num));
    console.log(cum);
  }
  func2(1, 2);
  func2(...[1, 2, 3, 4, 5, 10, -100]);

  function func3(a, b) {
    console.log("here 1");
    return a + b;
    console.log("here 2");
  }
  let cum = func3(1, 2);
  console.log(cum);

  let obj = {
    name: "Raymond",
    age: 18,
  };

  // (函数传值)入口仅有一个
  // (函数取值)出口有两个：1.复杂结构的传参，获得内容修改，更改了原始数据; 2.return，产生新内容，不更改原始数据
  func4(obj);
  function func4(obj) {
    console.log("name:", obj.name);
    console.log("age:", obj.age);

    (obj.name = "Tianyang"), (obj.age = 30);
  }
  console.log(obj);

  const arrow_func1 = () => {
    console.log("arrow_func1");
  };
  arrow_func1();

  function func5({ name, age }) {
    // { name, age } = obj
    (name = "Vincent"), (age = 20);
    return { name, age };
  }
  const newObj = func5(obj);
  console.log(newObj);
  console.log(obj);

  const array = [1, 2, 3, 4, 5];
  const arrow_func2 = (num) => {
    console.log(num);
  };
  array.forEach(arrow_func2);
  console.log("==============================");
}

{
  // document.getElementById()
  // document.getElementsByClassName()
  const content = document.querySelector(".content");
  console.log(content);
  content.innerHTML = "hahaha";

  const contents = document.querySelectorAll(".content");
  console.log(contents);
  contents.forEach((node, index) => (node.innerHTML = `content ${index}`));

  const div = document.createElement("div");
  div.innerHTML = "<h1>Click Me</h1>";
  // contents[contents.length - 1].append(span);
  // contents[contents.length - 1].appendChild(span);
  const domBody = document.querySelector("body");
  domBody.appendChild(div);

  div.classList.add("active");
  div.classList.remove("active");
  div.classList.toggle("active");

  div.setAttribute("style", "cursor:pointer");

  div.addEventListener("click", () => {
    div.classList.toggle("active");
  });
  console.log("==============================");
}

{
  const radius = 1;

  function createCircle(radius) {
    return {
      radius,
      draw1() {
        console.log("draw1", radius, this.radius);
      },
      draw2: function () {
        console.log("draw2", radius, this.radius);
      },
      draw3: () => {
        console.log("draw3", radius, this.radius);
      },
    };
  }

  const circle1 = createCircle(4);
  console.log(circle1);
  circle1.radius = 3;
  circle1.draw1();
  circle1.draw2();
  circle1.draw3();

  const obj = {
    a: 2,
    changeA: function () {
      // a = 3;
      this.a = 3;
    },
  };
  obj.changeA();
  console.log(obj.a);

  function Circle2(radius) {
    this.radius = radius;
    this.draw1 = function () {
      console.log("draw1", radius, this.radius);
    };
    this.draw2 = () => {
      console.log("draw2", radius, this.radius);
    };
  }
  const circle2 = new Circle2(5);
  console.log(circle2);
  circle2.draw1();
  circle2.draw2();

  class CircleClass {
    constructor(radius) {
      this.radius = radius;
    }
    draw1() {
      console.log("draw1", radius, this.radius);
    }
    draw2 = function () {
      console.log("draw2", radius, this.radius);
    };
    draw3 = () => {
      console.log("draw3", radius, this.radius);
    };
  }
  const circle3 = new CircleClass(6);
  console.log(circle3);
  circle3.draw1();
  circle3.draw2();
  circle3.draw3();
}
