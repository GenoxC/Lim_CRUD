var UniqueIDV, FirstnamenameV, MiddlenameV, SurnameV, AddressV, EmailV;

function readFom() {
  UniqueIDV = document.getElementById("UniqueID").value;
  FirstnameV = document.getElementById("Firstname").value;
  MiddlenameV = document.getElementById("Middlename").value;
  SurnameV = document.getElementById("Surname").value;
  AddressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  console.log(UniqueIDV, FirstnameV, MiddlenameV, SurnameV, AddressV, EmailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .set({
      UniqueID: UniqueIDV,
      Firstname: FirstnameV,
      Middlename: MiddlenameV,
      Surname: SurnameV,
      Address: AddressV,
      Email: EmailV,
    });
  Swal.fire("Data Inserted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .on("value", function (snap) {
      document.getElementById("UniqueID").value = snap.val().UniqueID;
      document.getElementById("Firstname").value = snap.val().Firstname;
      document.getElementById("Middlename").value = snap.val().Middlename;
      document.getElementById("Surname").value = snap.val().Surname;
      document.getElementById("Address").value = snap.val().Address;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .update({
      //   UniqueID: UniqueIDV,
      Firstname: FirstnameV,
      Middlename: MiddlenameV,
      Surname: SurnameV,
      Address: AddressV,
      Email: EmailV,
    });
  Swal.fire("Data Updated!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .remove();
  Swal.fire("Data Deleted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
