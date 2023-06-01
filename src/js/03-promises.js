import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
}

function onSubmitClick(evt) {
  evt.preventDefault();

  let { delay, step, amount } = evt.target.elements;
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    Notify.failure(
      `Please enter correct number. The number must be greater than 0`
    );
    return;
  }

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
