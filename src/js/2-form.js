const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);

const LOCALE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

doLoad();

function onInput(evt) {
  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem(LOCALE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  if (!email.value || !message.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(LOCALE_KEY);
  evt.currentTarget.reset();
}

function doLoad() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCALE_KEY));
  const { email, message } = formEl;
  if (savedFormData) {
    email.value = savedFormData.email;
    message.value = savedFormData.message;
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
  }
}
