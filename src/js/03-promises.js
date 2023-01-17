
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(".form"),
}
const {form} = refs;


form.addEventListener('submit', getArrayPromises)

 let promises = [];

function getArrayPromises (e){
  e.preventDefault();

  let delay = +form.delay.value;
  const step = +form.step.value;
  const amount = +form.amount.value;
  
  for(let position=1; position <= amount; position +=1 ) {
    promises.push(createPromise(position, delay));
    delay += step;
    
  }
  
  getPromis (promises);
  promises.length = 0;
  form.reset();   
}


function getPromis (array){
  promises.forEach(promise => {
    promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  });
  
};



function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
      setTimeout (() => {
     if (shouldResolve){
      resolve({position, delay});
    } else
      reject({position, delay})
     
   }, delay);
   
  });

     
}
  







