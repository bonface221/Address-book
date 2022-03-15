function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;

}
Contact.prototype.fullName = function () {
	return this.firstName + " " + this.lastName;
};


$(document).ready(function () {
    $("#new-contact").submit(function (event) {
        event.preventDefault();

        var inputtedFirstName = $("#fname").val()
        var inputtedLastName = $("#lname").val()

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        
        $("#fname").val("");
        $("#lname").val("");

        $(".contact").last().click(function () {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
        
    })



})