import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STOKE_KEY = 'feedback-form-state';
let userData = {};

// lodash.throttle

// запис в localStorage із інпута
const fillFeedbackFormField = () => {
  const userDataFromLS = JSON.parse(localStorage.getItem(STOKE_KEY));

  if (userDataFromLS === null) {
    return;
  }

  console.log(userDataFromLS);
  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = userDataFromLS[key];
    }
  }
};

fillFeedbackFormField();
//із інпута в localStorage
const onFiledfeedbackFormChange = ({ target: feedbackFormField }) => {
  const feedbackFormFieldValue = feedbackFormField.value;
  const feedbackFormFieldName = feedbackFormField.name;

  userData[feedbackFormFieldName] = feedbackFormFieldValue;

  localStorage.setItem(STOKE_KEY, JSON.stringify(userData));
  console.log(userData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  feedbackForm.reset();
  localStorage.removeItem(STOKE_KEY);
};

//слухачі
feedbackForm.addEventListener('change', onFiledfeedbackFormChange);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
