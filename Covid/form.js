function submit() {
  var headache = document.getElementsByName("headache");
  var fever = document.getElementsByName("fever");
  var cough = document.getElementsByName("cough");
  var diarrhoea = document.getElementsByName("diarrhoea");
  var difficultyInBreathing = document.getElementsByName("difficultyInBreathing");
  var bodyAche = document.getElementsByName("bodyAche");
  var gender = document.getElementsByName("gender");
  var age = document.Form.age;
  var name = document.Form.name;
  // bringing from form.html

  if (name.value.length == 0) {
    alert("Name field should not be empty");
  } else if (age.value == "") {
    alert("Age field should not be empty");
    // document.Form.Name.focus();
    // return false;
  }
  // Radio button validation
  else if (
    (gender[0].checked == false && gender[1].checked == false && gender[2] == false) ||
    (headache[0].checked == false && headache[1].checked == false) ||
    (fever[0].checked == false && fever[1].checked == false) ||
    (cough[0].checked == false && cough[1].checked == false) ||
    (diarrhoea[0].checked == false && diarrhoea[1].checked == false) ||
    (difficultyInBreathing[0].checked == false && difficultyInBreathing[1].checked == false) ||
    (bodyAche[0].checked == false && bodyAche[1].checked == false)
  ) {
    alert("Entry field should not be empty");
  }
  // Input Validation
  else if (
    Yes1.checked == true &&
    Yes2.checked == true &&
    Yes3.checked == true &&
    Yes4.checked == true &&
    Yes5.checked == true &&
    Yes6.checked == true
  ) {
    alert("Go to hospital");
  } else if (
    No1.checked == true &&
    No2.checked == true &&
    No3.checked == true &&
    No4.checked == true &&
    No5.checked == true &&
    No6.checked == true
  ) {
    alert("Stay home stay safe");
  } else {
    alert("Stay safe and consult doctor in case of any emergency and isolate yourself");
  }


}
