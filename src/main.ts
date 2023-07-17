let userEmail = "";
const mainText = document.getElementById("main_container");
const message = document.getElementById("message");
const form = document.getElementById("form");
const input = document.getElementById("input") as HTMLInputElement;
const messageUserMail = document.getElementById("message_usermail")!;
const messageButton = document.getElementById("message_button");
const validateError = document.getElementById("error");
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

function switchRenderedComponent () {
	mainText?.classList.toggle("hidden");
	message?.classList.toggle("hidden");
}

form?.addEventListener( "submit", (e) => {
	e.preventDefault();
	
	if (emailRegex.test(input?.value)) {
		validateError?.classList.add("hidden");
		userEmail = input?.value;
		messageUserMail.textContent = userEmail;
		input.value = "";
		switchRenderedComponent();
	} else {
		validateError?.classList.remove("hidden");
	}
});

messageButton?.addEventListener("click", () => {
	switchRenderedComponent();
});