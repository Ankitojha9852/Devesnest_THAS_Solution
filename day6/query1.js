function propsOfObj(obj) {
  for (key in obj) {
    process.stdout.write(key + ",");
  }
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
propsOfObj(student);