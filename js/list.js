
$("#link-list").on("click", function(event) {
  event.preventDefault();
  $("#home-view").addClass("hidden");
  $("#add-view").addClass("hidden");

  $("#list-view").addClass("visible");
  $("#list-view").removeClass("hidden");
});