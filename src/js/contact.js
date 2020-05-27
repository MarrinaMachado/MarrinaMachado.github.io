let email = "marinamachado.contact@gmail.com";
let subject = "I'm reaching you about your UX Portfolio...";
let opening = "Dear Marina Machado,\r\n";
let ending = "\r\nBest regards from ";

document.getElementById('contact-submit').onclick = function(e) {
    var message = document.getElementById('contact-message').value;
    var name = document.getElementById('contact-name').value;

    var body = (message) ? opening + message : message;
    body += (name) ? ending + name : "";

    this.href ="mailto:" + email + "?subject=" + subject + "&body=" + body;

    e.invokeDefault();
};
