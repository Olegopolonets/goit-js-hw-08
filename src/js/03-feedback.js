import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STOKE_KEY = 'feedback-form-state';
let userData = {};

// запис в localStorage із інпута
const fillFeedbackFormField = () => {
  const userDataFromLS = JSON.parse(localStorage.getItem(STOKE_KEY));

  if (userDataFromLS === null) {
    return;
  }

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = userDataFromLS[key];
      if (userDataFromLS[key]) {
        userData[key] = userDataFromLS[key];
      }
    }
  }
};
fillFeedbackFormField();
//із інпута в localStorage
const onFiledfeedbackFormChange = ({ target: feedbackFormField }) => {
  const feedbackFormFieldValue = feedbackFormField.value;
  const feedbackFormFieldName = feedbackFormField.name;
  console.log('userData: ', userData);
  userData[feedbackFormFieldName] = feedbackFormFieldValue;

  localStorage.setItem(STOKE_KEY, JSON.stringify(userData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  feedbackForm.reset();
  localStorage.removeItem(STOKE_KEY);

  console.log(userData);
};

//слухачі
feedbackForm.addEventListener(
  'input',
  throttle(onFiledfeedbackFormChange, 500)
);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
