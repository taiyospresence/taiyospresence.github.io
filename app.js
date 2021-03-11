window.onload = function() {
  document.getElementById("fname").focus();
}
$(".click-image").on("click", function () {
  $(".card-outer").toggleClass("d-none");
});
$("#myBtn").click(function () {
  var inp = $(".card-main-number");
  var err = $(".error-msg");
  const inpVal = inp.val();
  const margeInp = $(".marge-input");
  console.log(inpVal.length);
  if (inpVal.length > 12 && inpVal.length <= 19) {
    // document.getElementById("myBtn").style.background = "grey";
    var check_agree = $("#checkbox_agree");
    // if(check_agree.is(":checked") == true) {
    //   document.getElementById("myBtn").disabled = "true";
    // }
  } else {
    margeInp.addClass("error");
    err.toggleClass("d-none");
  }
});

$(".card-wrapper").click(function (e) {
  const selectedCardNumber = $(".card-number-para").text().split(" ").join("");
  selectedCardNumber;
  $("#cardNumber").val(
    selectedCardNumber
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
  );
  $(".card-outer").toggleClass("d-none");
});

$(document).ready(function () {
  $(".popover-btn").hover(function () {
    $(".tooltip-custom").toggleClass("d-none");
  });
  const monthNames = ["1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12"
  ];
  let qntYears = 4;
  let selectYear = $("#year");
  let selectMonth = $("#month");
  let selectDay = $("#day");
  let currentYear = new Date().getFullYear();

  for (var y = 0; y < qntYears; y++) {
    let date = new Date(currentYear);
    let yearElem = document.createElement("option");
    yearElem.value = currentYear
    yearElem.textContent = currentYear;
    selectYear.append(yearElem);
    currentYear--;
  }

  for (var m = 0; m < 12; m++) {
    let month = monthNames[m];
    let monthElem = document.createElement("option");
    monthElem.value = m;
    monthElem.textContent = month;
    selectMonth.append(monthElem);
  }

  var d = new Date();
  var month = d.getMonth();
  var year = d.getFullYear();
  var day = d.getDate();

  selectYear.val(year);
  selectYear.on("change", AdjustDays);
  selectMonth.val(month);
  selectMonth.on("change", AdjustDays);

  AdjustDays();
  selectDay.val(day)

  function AdjustDays() {
    var year = selectYear.val();
    var month = parseInt(selectMonth.val()) + 1;
    selectDay.empty();

    //get the last day, so the number of days in that month
    var days = new Date(year, month, 0).getDate();

    //lets create the days of that month
    for (var d = 1; d <= days; d++) {
      var dayElem = document.createElement("option");
      dayElem.value = d;
      dayElem.textContent = d;
      selectDay.append(dayElem);
    }
  }
});

document.getElementById("unitnumber").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("month").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("day").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("year").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("securitynumber").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

$(".one").hide();
$("input:radio").change(function () {
  if ($(this).val() == "option1") {
    $(".one").hide();
  } else {
    $(".one").show();
  }
});

document.getElementById("expireMMDate").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("expireYYDate").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

document.getElementById("securityCode").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .trim();
});

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('address')),
      {types: ['geocode']});
}

function movetoNext(current, nextFieldID) {
  console.log(current.value);
  if(current.value.length >= 5)  {
    document.getElementById("card_middle").classList.remove("d-none");
  } else if(current.value.length < 5) {
    document.getElementById("card_middle").classList.add("d-none");
  }

  if (current.value.slice(0, 1) == 4) {
    document.getElementById("visaIcon").classList.remove("d-none")
    document.getElementById("visaIcon").classList.add('cardIcon');
  } else if (current.value.slice(0, 1) == 5) {
    document.getElementById("masterIcon").classList.remove("d-none");
    document.getElementById("masterIcon").classList.add('cardIcon');
  } else if (current.value.slice(0, 1) == 3) {
    current.maxLength = 18;
    document.getElementById("amexIcon").classList.remove("d-none");
    document.getElementById("amexIcon").classList.add('cardIcon');

    document.getElementById("securityCode").placeholder = "0000";
    document.getElementById("securityCode").maxLength = 4;
  } else {
    current.maxLength = 19;
    document.getElementById("visaIcon").classList.add("d-none");
    document.getElementById("visaIcon").classList.remove('cardIcon');

    document.getElementById("masterIcon").classList.add("d-none");
    document.getElementById("masterIcon").classList.remove('cardIcon');
    
    document.getElementById("amexIcon").classList.add("d-none");
    document.getElementById("amexIcon").classList.remove('cardIcon');

    document.getElementById("securityCode").placeholder = "000";
    document.getElementById("securityCode").maxLength = 3;
  }
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

function movetoYYNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
  if (current.value > 12) {
    document.getElementById("expireMMDate").style.borderBottom =
      "1px solid red";
  } else if (current.value <= 12) {
    document.getElementById("expireMMDate").style.borderBottom = "unset";
  }
}

function movetoSecNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
  console.log(current.value.length);
  if (current.value < 21) {
    document.getElementById("expireYYDate").style.borderBottom =
      "1px solid red";
  } else if (current.value >= 21) {
    document.getElementById("expireYYDate").style.borderBottom = "unset";
  }
  if(current.value.length == 0) {
    document.getElementById("expireYYDate").style.borderBottom = "unset";
  }
}

$(function () {
  $(".marge-input").on("click", () => {
    $(".marge-input").css({
      borderColor: "#86b7fe",
      outline: 0,
      boxShadow: "0 0 0 0.25rem rgb(13 110 253 / 25%)",
    });
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".no-border") === false) {
      $(".marge-input").removeAttr("style");
    }
  });
});

$(function () {
  $("body").click(function () {
    if (!$(this.target).is("#marge-input")) {
    }
  });
});