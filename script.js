const key = document.querySelector("button.open-pass");
const password = "monmon";

const passwordContainer = document.querySelector(".password");
const messageContainer = document.querySelector(".message");

const message = `انتي كويسة؟ معقول هيك بتعمليلي بلوك بدون ما تحكيلي.. طب اذا مضايقك ومزعلك باشي احكيلي ماينفع هيك والله كتير زعلت
ماتوقعت ابدا، اذا مزعجك عادي بختفي بس ماتروحي هيك بدون مافهمك منيح، والله شكله في اشي بقلبك ومش راضية تحكيلي اياه
ايمان ماينفع هيك، انا مش قادر اسوي اشي اكتر من هالفولو اللي عملته من هاد الحساب، مابنفع ارسلك اي اشي
انا محتار وبقيت متشتت ليه هيك طيب.. عشان خاطري بس احكيلي شو مالك خليني افهمك واتطمن عليكي، والله قلبي بيغلي صارلو ايام
حتى هيني عملت موقع سريع عشان اجي احكيلك هالكلمتين مش قادر اتواصل معك بأي طريقة`;

const checkPassword = () => {
  const pass = document.querySelector("input.pass").value;
  console.log(pass === password);

  if (pass === password) {
    passwordContainer.classList.add("hidden");
    messageContainer.classList.remove("blur");
    messageContainer.innerHTML = message;
  }
};

key.addEventListener("click", () => {
  checkPassword();
});
