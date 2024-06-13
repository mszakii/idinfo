let result = document.getElementById("result");
let idNum = document.getElementById("idNum");
let submit = document.getElementById("btn");

function getId(number) {
  // Day
  if (number[0] == 3) {
    day.innerHTML = `${number[5]}${number[6]}/${number[3]}${number[4]}/20${number[1]}${number[2]}`;
  } else {
    day.innerHTML = `${number[5]}${number[6]}/${number[3]}${number[4]}/19${number[1]}${number[2]}`;
  }

  // Gender
  if (number[12] % 2 == 1) {
    gender.innerHTML = "Male";
  } else {
    gender.innerHTML = "Female";
  }

  // Governorate
  governorates = {
    "01": "Cairo",
    "02": "Alexandria",
    "03": "Port Said",
    "04": "Suez",
    11: "Damietta",
    12: "Dakahlia",
    13: "Ash Sharqia",
    14: "Kaliobeya",
    15: "Kafr El - Sheikh",
    16: "Gharbia",
    17: "Monoufia",
    18: "El Beheira",
    19: "Ismailia",
    21: "Giza",
    22: "Beni Suef",
    23: "Fayoum",
    24: "El Menia",
    25: "Assiut",
    26: "Sohag",
    27: "Qena",
    28: "Aswan",
    29: "Luxor",
    31: "Red Sea",
    32: "New Valley",
    33: "Matrouh",
    34: "North Sinai",
    35: "South Sinai",
    88: "Foreign",
  };

  gov.innerHTML = governorates[number.slice(7, 9)];
}

submit.addEventListener("click", function () {
  let number = idNum.value;

  if (
    number.length == 14 &&
    number[0] < 4 &&
    number[0] != 1 &&
    number.slice(7, 9) < 89
  ) {
    getId(number);
    // Show result box
    result.style.display = "block";
  } else {
    errBox.style.display = "block";
    setTimeout(() => {
      errBox.style.display = "none";
    }, 1000);
  }
});
