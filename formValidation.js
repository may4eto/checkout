function checkInput() {
        var x = document.forms["checkout"]["email"].value;
        if (x == null || x == "") {
            alert("Name must be filled out");
            return false;
        }
    }
  }