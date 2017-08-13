// Implement jQuery in your Music History code. Every innerHTML, getElementById, getElementByClassName, event listener and XHR request. Convert 'em all.


$("#link-add").on("click", function() {
	 event.preventDefault();
   $("#home-view").addClass("hidden");
   $("#list-view").addClass("hidden");

  $("#add-view").addClass("visible");
  $("#add-view").removeClass("hidden");

});