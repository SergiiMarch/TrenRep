// import throttle from 'lodash.throttle';
// const form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

// const LOCAL_STORAGE_KEY = 'feedback-form-state';

// setInputOnForm();

// function onFormSubmit(event) {
//   event.preventDefault();

//   if (form.elements.email.value === '' || form.elements.message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   console.log({
//     email: form.elements.email.value,
//     message: form.elements.message.value,
//   });
//   event.currentTarget.reset();
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
// }

// function onFormInput(event) {
//   const formData = {
//     email: form.elements.email.value,
//     message: form.elements.message.value,
//   };

//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
// }

// function setInputOnForm() {
//   const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

//   if (savedMessage) {
//     form.elements.email.value = savedMessage.email;
//     form.elements.message.value = savedMessage.message;
//   }
// }
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

setInputOnForm();

formEl.addEventListener('input', throttle(onFormInput, 1000));
formEl.addEventListener('submit', onFormSubmit);

function setInputOnForm() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formEl.elements.email.value = email || '';
    formEl.elements.message.value = message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onFormInput() {
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}
console.log('hello world');
