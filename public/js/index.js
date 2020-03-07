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
    
    //returns true is added to table, false if waitlist
    $.post(window.location.origin + "/api/tables", newReservation).then(function(data) {
      if (data) {
        alert("You've been seated!");
      }
      else {
        alert("Tables are full, but you've been added to the waitlist...");
      }
    });
  });
});
