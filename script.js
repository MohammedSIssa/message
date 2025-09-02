const key = document.querySelector("button.open-pass");
const password = "monmon";

const passwordContainer = document.querySelector(".password");
const messageContainer = document.querySelector(".message");

const message = `انتي كويسة؟ معقول هيك بتعمليلي بلوك بدون ما تحكيلي.. طب اذا مضايقك ومزعلك باشي احكيلي ماينفع هيك والله كتير زعلت
ماتوقعت ابدا، اذا مزعجك عادي بختفي بس ماتروحي هيك بدون مافهمك منيح، والله شكله في اشي بقلبك ومش راضية تحكيلي اياه
ايمان ماينفع هيك، انا مش قادر اسوي اشي اكتر من هالفولو اللي عملته من هاد الحساب، مابنفع ارسلك اي اشي
انا محتار وبقيت متشتت ليه هيك طيب.. عشان خاطري بس احكيلي شو مالك خليني افهمك واتطمن عليكي، والله قلبي بيغلي صارلو ايام
حتى هيني عملت موقع سريع عشان اجي احكيلك هالكلمتين مش قادر اتواصل معك بأي طريقة
يعني حتى هي جوالي وكمان شاحن لابتوبي خربو اليوم من علاء عشان كب عليهم مي وهو مش شايف، يعني فوق م انا قاعد بغلي مش قادر حتى افتح واتطمن عنك وقت مابدي
والله قاعد بحلل وبفكر كتير، انه حتى بلاحظ انه مرات بتيجي عيونا ببعض بس م بعرف شو صار وليه البلوك للان
معقول معناها خلص مابدك اياني؟ ما بدي اقعد احلل كتير احكيلي بس بكل بساطة ليه هيك عملتي وانا هفهم وقتها ومخي يرتاح
مش عارف شو قاعد بكتب الدنيا عتمة وبكتب على اللاب وبطاريتي صارت 1% هلقيت بأي وقت يطفي يارب مايطفي قبل م ارفع الموقع هان
انا اهبل عارف`;

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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input.pass").focus();
})
