// class Table {
//   constructor(name, phone, email, uniqueID) {
//     this.name = name;
//     this.phone = phone;
//     this.email = email;
//     this.uniqueID = uniqueID;
//   }

//   printInfo() {
//     for (var key in this) {
//       console.log(`${key}: ${this[key]}`);
//     }
//   }
// }

$(document).ready(function(){
  //submit on res page is clicked
  $("#submit").on("click", function(){
    
    // grab form input
    let newReservation = {
      name: $('#personName').val().trim(),
      phone: $('#phoneNumber').val().trim(),
      email: $('#email').val().trim(),
      uniqueID: $('#uniqueID').val().trim()
    };
    
    console.log(newReservation);
    
    $.post("/api/tables", newReservation)
    .then(function(data) {
      console.log("reservations.html", data);
      alert("Adding reservation...");
    });
  });
});
  
  