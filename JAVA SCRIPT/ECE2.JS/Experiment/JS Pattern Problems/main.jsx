let n = 5;


for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
console.log("       ");


for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
console.log("       ");


for (let i = 1; i <= n; i++) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row = row + " ";
  }

  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }

  console.log(row);
}
console.log("       ");


for (let i = 1; i <= n; i++) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row = row + " ";
  }

  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }

  console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row = row + " ";
  }

  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }

  console.log(row);
}
console.log("       ");


for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }

  console.log(row);
}
console.log("       ");


let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + num + " ";
    num = num + 1;
  }

  console.log(row);
}
console.log("       ");


for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = i; j >= 1; j--) {
    row = row + j + " ";
  }

  for (let j = 2; j <= i; j++) {
    row = row + j + " ";
  }

  console.log(row);
}
console.log("       ");


for (let i = 0; i < n; i++) {
  let row = "";
  let ch = String.fromCharCode(65 + i);

  for (let j = 0; j <= i; j++) {
    row = row + ch + " ";
  }

  console.log(row);
}
console.log("       ");