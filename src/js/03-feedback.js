// Шаги: найти форму; создать слушаьеля для ввода; найти вводнче данные; установка данных в хранилище; фун-ия для получения данных; прогон функции; создаем слушателя для отправки; прогоняем

import throttle from 'lodash.throttle';
const FORM_STATE = "feedback-form-state"

const feedForm = document.querySelector('.feedback-form');
feedForm.addEventListener('input', throttle(localData, 500));
feedForm.addEventListener('submit', submitData);

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(FORM_STATE, JSON.stringify(formData));
};

function getLocalData() {
  let localData = JSON.parse(localStorage.getItem(FORM_STATE));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
};
getLocalData();


function submitData(event) {
  event.preventDefault();
  this.reset();
  console.log(localStorage.getItem(FORM_STATE));
  localStorage.removeItem(FORM_STATE);
}