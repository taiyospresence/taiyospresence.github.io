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
function movetoNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
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
