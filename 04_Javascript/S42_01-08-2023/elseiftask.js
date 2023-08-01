function fnAction(value) {
  if (value < 0) {
    console.log(
      "Please enter Positive number or Enter Number greater then 0 or equcals to 0"
    );
  } else if (value % 2 == 0) {
    console.log(value, "is even number");
  } else {
    console.log(value, "is Odd number");
  }
}

fnAction(102);
