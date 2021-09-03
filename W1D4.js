//1*********************

"use strict";
const assert = require("assert");
function findLongestWord(str) {
  let str2 = 0;

  for (let i = 0; i < str.length; i++) {
    if (str2 < str[i].length) {
      str2 = str[i].length;
    }
  }
  return str2;
}

describe("findLongestWord", function () {
  it("tests longest", function () {
    assert.strictEqual(
      findLongestWord(["this", "is", "a", "test", "longest"]),
      7
    );
  });
  it("tests longest with spaces", function () {
    assert.strictEqual(
      findLongestWord(["this", "is", "a word with spaces", "test", "longest"]),
      18
    );
  });
  it("tests longest with equal length words", function () {
    assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
  });
  it("tests longest with some words equal length", function () {
    assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
  });
});

//2,************************

("use strict");
const assert = require("assert");
function reverse(str) {
  let strq = [];
  let l = str.length;

  for (let i = 0; i < str.length; i++) {
    strq[i] = str[l - 1 - i];
  }
  return strq;
}

console.log(reverse(["A", "B", "C"]));

function reverse(num) {
  let c = 0;
  let num1 = [];
  for (let i = num.length - 1; i >= 0; i--) {
    num1[c] = num[i]; //4

    c++;
  }
  return num1;
}

console.log(reverse(["a", "b", "c", "d"]));

describe("reverseArray", function () {
  it("tests reverseArray odd number elements", function () {
    assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
  });
  it("tests reverseArray even number elements", function () {
    assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
  });
  it("tests reverseArrayInPlace even number elements", function () {
    assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), [
      "D",
      "C",
      "B",
      "A",
    ]);
  });
  it("tests reverseArrayInPlace odd number elements", function () {
    assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});

//4,*******************************

("use strict");
const assert = require("assert");
function sum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
}

("use strict");
const assert = require("assert");

function multiply(x) {
  let mal = 1;
  for (let i = 0; i < x.length; i++) {
    mal = mal * x[i];
  }
  return mal;
}

describe("sum and multiply", function () {
  it("tests sum of 1 2 3", function () {
    assert.strictEqual(sum([1, 2, 3]), 6);
  });
  it("tests multiply 3 2 10", function () {
    assert.strictEqual(multiply([3, 2, 10]), 60);
  });
  it("tests multiply -3 -2 -10", function () {
    assert.strictEqual(multiply([-3, -2, -10]), -60);
  });
  it("tests sum -3 -2 -10", function () {
    assert.strictEqual(sum([-3, -2, -10]), -15);
  });
});

//5,******************************
describe("score exam", function () {
  const studentAnswers = [
    [1, 1, 2, 4],
    [2, 1, 2, 2],
    [3, 1, 3, 4],
  ];
  const correctAnswers = [3, 1, 2, 4];
  it("exam with 3 students", function () {
    assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3, 2, 3]);
  });
  it("exam with 3 students: one student has all incorrect answers", function () {
    assert.deepEqual(
      scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [1, 2, 3, 1],
        ],
        correctAnswers
      ),
      [3, 2, 0]
    );
  });
  it("exam with 3 students: one student has all correct answers", function () {
    assert.deepEqual(
      scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [3, 1, 2, 4],
        ],
        correctAnswers
      ),
      [3, 2, 4]
    );
  });
});

const { count } = require("console");

let m = [
  [1, 1, 2, 4],
  [2, 1, 2, 2],
  [3, 1, 3, 4],
];
let n = [3, 1, 2, 4];
("use strict");
const assert = require("assert");

function scoreExams(a, b) {
  let c = [];
  let coun = 0;
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    let v = 0;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] == b[s]) {
        coun++;
        s++;
      } else {
        s++;
        count;
      }
    }
    c[i] = coun;

    s = 0;
    coun = 0;
  }
  return c;
}
console.log(scoreExams(m, n));

describe("score exam", function () {
  const studentAnswers = [
    [1, 1, 2, 4],
    [2, 1, 2, 2],
    [3, 1, 3, 4],
  ];
  const correctAnswers = [3, 1, 2, 4];
  it("exam with 3 students", function () {
    assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3, 2, 3]);
  });
  it("exam with 3 students: one student has all incorrect answers", function () {
    assert.deepEqual(
      scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [1, 2, 3, 1],
        ],
        correctAnswers
      ),
      [3, 2, 0]
    );
  });
  it("exam with 3 students: one student has all correct answers", function () {
    assert.deepEqual(
      scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [3, 1, 2, 4],
        ],
        correctAnswers
      ),
      [3, 2, 4]
    );
  });
});
