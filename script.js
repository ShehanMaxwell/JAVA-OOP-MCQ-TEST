document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded successfully.');

  const quizForm = document.getElementById('quizForm');
  const finishButton = document.getElementById('finishButton');
  const modal = document.getElementById('scoreModal');
  const closeModal = document.getElementById('closeModal');
  const scoreMessage = document.getElementById('scoreMessage');
  const resetButton = document.getElementById('resetButton');
  const saveButton = document.getElementById('saveButton');

  // Fetch questions from the JSON file
  fetch('./questions.json')
    .then((response) => response.json())
    .then((questions) => {
      questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.setAttribute('data-question', question.id);

        // Add question text
        const questionText = document.createElement('h2');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionText);

        // Add code block if exists
        if (question.code) {
          const codeBlock = document.createElement('pre');
          codeBlock.classList.add('code-block');
          codeBlock.textContent = question.code;
          questionElement.appendChild(codeBlock);
        }

        // Add options
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        question.options.forEach((option) => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = question.id;
          input.value = option.label;
          label.appendChild(input);
          label.appendChild(
            document.createTextNode(` ${option.label}. ${option.text}`)
          );
          optionsDiv.appendChild(label);
        });
        questionElement.appendChild(optionsDiv);

        // Append the question to the form
        quizForm.appendChild(questionElement);
      });

      // Load saved progress from localStorage
      loadProgress();

      // Event listener for save progress
      saveButton.addEventListener('click', saveProgress);

      // Event listener for reset progress
      resetButton.addEventListener('click', resetProgress);

      // Event listener for finish button
      finishButton.addEventListener('click', function () {
        const answers = {
          q1: 'A',
          q2: 'B',
          q3: 'B',
          q4: 'A',
          q5: 'B',
          q6: 'A',
          q7: 'A',
          q8: 'A',
          q9: 'A',
          q10: 'A',
          q11: 'A',
          q12: 'C',
          q13: 'D',
          q14: 'C',
          q15: 'A',
          q16: 'A',
          q17: 'B',
          q18: 'B',
          q19: 'D',
          q20: 'A',
          q21: 'B',
          q22: 'B',
          q23: 'A',
          q24: 'B',
          q25: 'A',
          q26: 'A',
          q27: 'D',
          q28: 'D',
          q29: 'B',
          q30: 'B',
          q31: 'A',
          q32: 'D',
          q33: 'C',
          q34: 'D',
          q35: 'B',
          q36: 'B',
          q37: 'A',
          q38: 'A',
          q39: 'B',
          q40: 'A',
          q41: 'A',
          q42: 'D',
          q43: 'A',
          q44: 'B',
          q45: 'B',
          q46: 'C',
          q47: 'C',
          q48: 'C',
          q49: 'B',
          q50: 'B',
          q51: 'C',
          q52: 'A',
          q53: 'D',
          q54: 'A',
          q55: 'D',
          q56: 'D',
          q57: 'D',
          q58: 'B',
          q59: 'C',
          q60: 'B',
          q61: 'A',
          q62: 'A',
          q63: 'B',
          q64: 'A',
          q65: 'B',
          q66: 'A',
          q67: 'B',
          q68: 'D',
          q69: 'A',
          q70: 'A',
          q71: 'A',
          q72: 'B',
          q73: 'A',
          q74: 'D',
          q75: 'A',
          q76: 'D',
          q77: 'B',
          q78: 'B',
          q79: 'A',
          q80: 'C',
          q81: 'B',
          q82: 'C',
          q83: 'B',
          q84: 'B',
          q85: 'D',
          q86: 'C',
          q87: 'B',
          q88: 'A',
          q89: 'B',
          q90: 'A',
          q91: 'B',
          q92: 'D',
          q93: 'A',
          q94: 'D',
          q95: 'B',
          q96: 'D',
          q97: 'A',
          q98: 'C',
          q99: 'A',
          q100: 'A',
          q101: 'A',
          q102: 'A',
          q103: 'C',
          q104: 'D',
          q105: 'D',
          q106: 'B',
          q107: 'B',
          q108: 'C',
          q109: 'B',
          q110: 'C',
          q111: 'A',
          q112: 'B',
          q113: 'C',
          q114: 'B',
          q115: 'B',
          q116: 'B',
          q117: 'D',
          q118: 'C',
          q119: 'B',
          q120: 'B',
          q121: 'D',
          q122: 'A',
          q123: 'C',
          q124: 'C',
          q125: 'B',
          q126: 'A',
          q127: 'D',
          q128: 'D',
          q129: 'B',
          q130: 'A',
          q131: 'C',
          q132: 'D',
          q133: 'B',
          q134: 'C',
          q135: 'C',
          q136: 'C',
          q137: 'D',
          q138: 'C',
          q139: 'C',
          q140: 'B',
          q141: 'A',
          q142: 'D',
          q143: 'D',
          q144: 'C',
          q145: 'A',
          q146: 'B',
          q147: 'B',
          q148: 'A',
          q149: 'B',
          q150: 'D',
          q151: 'B',
          q152: 'D',
          q153: 'A',
          q154: 'B',
          q155: 'B',
          q156: 'B',
          q157: 'A',
          q158: 'D',
          q159: 'B',
          q160: 'B',
          q161: 'A',
          q162: 'C',
          q163: 'B',
          q164: 'B',
          q165: 'B',
          q166: 'B',
        };

        const formData = new FormData(quizForm);
        let score = 0;

        // Reset previous highlights
        document.querySelectorAll('.question').forEach((question) => {
          question.querySelectorAll('label').forEach((label) => {
            label.style.color = ''; // Reset color
          });
        });

        // Highlight answers and calculate score
        for (const [question, correctAnswer] of Object.entries(answers)) {
          const questionElement = document.querySelector(
            `.question[data-question="${question}"]`
          );
          const selectedOption = formData.get(question);

          questionElement.querySelectorAll('label').forEach((label) => {
            const input = label.querySelector('input');
            if (input.value === correctAnswer) {
              label.style.color = 'green'; // Highlight correct answer
              if (selectedOption === correctAnswer) {
                score += 1; // Increase score if the answer is correct
              }
            } else if (input.checked) {
              label.style.color = 'red'; // Highlight incorrect answer
            }
          });
        }

        // Display the score in the modal
        scoreMessage.textContent = `Your score is: ${score} out of 166`;

        // Show the modal
        modal.style.display = 'block';
      });

      // Close the modal when the user clicks the 'X' button
      closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      // Close the modal if the user clicks anywhere outside the modal
      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    })
    .catch((error) => console.error('Error loading questions:', error));

  // Function to save progress
  function saveProgress() {
    const formData = new FormData(quizForm);
    const savedAnswers = {};

    formData.forEach((value, key) => {
      savedAnswers[key] = value;
    });

    localStorage.setItem('quizAnswers', JSON.stringify(savedAnswers));
    alert('Progress saved!');
  }

  // Function to load saved progress
  function loadProgress() {
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));

    if (savedAnswers) {
      Object.keys(savedAnswers).forEach((questionId) => {
        const selectedValue = savedAnswers[questionId];
        const questionElement = document.querySelector(
          `.question[data-question="${questionId}"]`
        );

        const selectedOption = questionElement.querySelector(
          `input[value="${selectedValue}"]`
        );
        if (selectedOption) {
          selectedOption.checked = true; // Restore selected answer
        }
      });
    }
  }

  // Function to reset progress
  function resetProgress() {
    localStorage.removeItem('quizAnswers');
    document.querySelectorAll('.question').forEach((question) => {
      question.querySelectorAll('input').forEach((input) => {
        input.checked = false; // Uncheck all options
      });
    });
    alert('Progress reset!');
  }
});
