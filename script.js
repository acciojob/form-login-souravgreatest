function getFormvalue() {
    let firstName = document.querySelector('[name="fname"]').value.trim();
    let lastName = document.querySelector('[name="lname"]').value.trim();
    const fullName = `${firstName} ${lastName}`;
    alert(fullName);
}