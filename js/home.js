
$("#link-home").on("click", function() {
	 event.preventDefault();
   $("#list-view").addClass("hidden");
  $("#add-view").addClass("hidden");

 $("#home-view").addClass("visible");
 $("#home-view").removeClass("hidden");

});