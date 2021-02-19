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
    console.log("valid");
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
});

document.getElementById("cardNumber").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
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

function movetoNext(current, nextFieldID) {
  console.log(current.value);
  if(current.value.length >= 5)  {
    document.getElementById("card_middle").classList.remove("d-none");
  } else if(current.value.length < 5) {
    document.getElementById("card_middle").classList.add("d-none");
  }

  if (current.value.slice(0, 1) == 4) {
    document.getElementById("masterIcon").classList.add("display-transition");
    document.getElementById("paypalIcon").classList.add("display-transition");
    document.getElementById("discoverIcon").classList.add("display-transition");
    document.getElementById("amexIcon").classList.add("display-transition");
    document.getElementById("visaIcon").classList.add("display-transition-left-visa");
  } else if (current.value.slice(0, 1) == 5) {
    document.getElementById("masterIcon").classList.remove("display-transition");
    document.getElementById("paypalIcon").classList.remove("display-transition");
    document.getElementById("discoverIcon").classList.remove("display-transition");
    document.getElementById("amexIcon").classList.remove("display-transition");
    document.getElementById("visaIcon").classList.remove("display-transition-left-visa");

    document.getElementById("masterIcon").classList.add("display-transition-left-master");
    document.getElementById("paypalIcon").classList.add("display-transition");
    document.getElementById("discoverIcon").classList.add("display-transition");
    document.getElementById("amexIcon").classList.add("display-transition");
    document.getElementById("visaIcon").classList.add("display-transition");
  } else if (current.value.slice(0, 1) == 3) {
    current.maxLength = 18;

    document.getElementById("masterIcon").classList.remove("display-transition-left-master");
    document.getElementById("paypalIcon").classList.remove("display-transition");
    document.getElementById("discoverIcon").classList.remove("display-transition");
    document.getElementById("amexIcon").classList.remove("display-transition");
    document.getElementById("visaIcon").classList.remove("display-transition");

    document.getElementById("masterIcon").classList.add("display-transition");
    document.getElementById("paypalIcon").classList.add("display-transition");
    document.getElementById("discoverIcon").classList.add("display-transition");
    document.getElementById("amexIcon").classList.add("display-transition-left-amex");
    document.getElementById("visaIcon").classList.add("display-transition");

    document.getElementById("securityCode").placeholder = "0000";
    document.getElementById("securityCode").maxLength = 4;
  } else {
    current.maxLength = 19;

    document.getElementById("masterIcon").classList.remove("display-transition");
    document.getElementById("paypalIcon").classList.remove("display-transition");
    document.getElementById("discoverIcon").classList.remove("display-transition");
    document.getElementById("amexIcon").classList.remove("display-transition");
    document.getElementById("visaIcon").classList.remove("display-transition");

    document.getElementById("amexIcon").classList.remove("display-transition-left-amex");
    document.getElementById("visaIcon").classList.remove("display-transition-left-visa");
    document.getElementById("discoverIcon").classList.remove("display-transition-left-discover");
    document.getElementById("paypalIcon").classList.remove("display-transition-left-paypal");
    document.getElementById("masterIcon").classList.remove("display-transition-left-master");

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
