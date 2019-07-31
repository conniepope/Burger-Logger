
  $(".devour").on("click", function(event) {
    // Get the ID from the button.
    var id = $(this).data("burgerid");

    var change = {
        devoured: true
    }
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: change
    }).then(
      function() {
        // move 'devoured' burger to right column -------------
        // make devoured = true for this.burger
        // this.devoured = true;

        console.log("devoured: ", change);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#newBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger= {
      burger: $("#newBurger [name=burger]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("A new burger to eat!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
