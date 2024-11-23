// Время на ответ (в секундах)
const TIME_LIMIT = 60;

const quizData = [
  {
    question:
      '1/20. Какой параметр определяет минимально возможное расстояние между радиорелейными станциями?',
    answers: [
      'Уровень мощности передатчика',
      'Географические условия и рельеф местности',
      'Тип модуляции',
      'Длина волны',
    ],
    correct: 1,
  },
  {
    question:
      '2/20. Какова основная особенность модуляции QPSK по сравнению с BPSK?',
    answers: [
      'QPSK передает больше данных за символ',
      'QPSK использует меньше энергии',
      'QPSK менее устойчива к шумам',
      'QPSK не требует синхронизации',
    ],
    correct: 0,
  },
  {
    question:
      '3/20. Что характерно для распределения максимумов зоны Френеля радиорелейной линии?',
    answers: [
      'Существует только один центральный максимум',
      'Центральный максимум дополняют два боковых, меньших по амплитуде',
      'Все максимумы равны по амплитуде',
      'Боковые максимумы не влияют на передачу сигнала',
    ],
    correct: 1,
  },
  {
    question:
      '4/20. Что происходит с сигналом при использовании модуляции 64-QAM по сравнению с QPSK?',
    answers: [
      'Увеличивается пропускная способность',
      'Увеличивается устойчивость к шумам',
      'Уменьшается требуемая мощность передатчика',
      'Уменьшается ширина канала',
    ],
    correct: 0,
  },
  {
    question: '5/20. Какие частоты используются в диапазоне E-Band?',
    answers: ['6-8 ГГц', '71-86 ГГц', '23-38 ГГц', '1-5 ГГц'],
    correct: 1,
  },
  {
    question:
      '6/20. Что из перечисленного НЕ относится к преимуществам E-Band?',
    answers: [
      'Высокая скорость передачи данных',
      'Большая дальность без потерь',
      'Относительно небольшие габариты оборудования',
      'Высокая плотность каналов в городской среде',
    ],
    correct: 1,
  },
  {
    question:
      '7/20. Какие факторы необходимо учитывать при юстировке радиорелейного пролета, проходящего над водной поверхностью?',
    answers: [
      'Высокую влажность воздуха',
      'Интерференцию от многократных отражений сигнала от воды',
      'Длину кабеля и потери сигнала в нем',
      'Необходимость использования широкополосных антенн',
    ],
    correct: 1,
  },
  {
    question: '8/20. Что такое X-pick в радиорелейной связи?',
    answers: [
      'Метод подавления отраженного сигнала',
      'Взаимная интерференция сигналов с различной поляризацией',
      'Процесс переключения между передатчиком и приемником',
      'Подстройка фазового угла для коррекции искажений',
    ],
    correct: 1,
  },
  {
    question:
      '9/20. Какой фактор ограничивает использование высокопорядковых модуляций, таких как 256-QAM, в радиорелейных системах?',
    answers: [
      'Высокая стоимость оборудования',
      'Ограничение пропускной способности',
      'Требование высокого отношения сигнал/шум (SNR)',
      'Большая ширина диаграммы направленности антенны',
    ],
    correct: 2,
  },
  {
    question:
      '10/20. Почему в радиорелейных системах необходима точная юстировка антенн?',
    answers: [
      'Для снижения помех',
      'Для обеспечения максимального коэффициента усиления',
      'Для защиты от атмосферных воздействий',
      'Для упрощения монтажа',
    ],
    correct: 1,
  },
  {
    question:
      '11/20. Какая модуляция позволяет передавать больше данных, но более чувствительна к шумам?',
    answers: ['BPSK', 'QAM', 'QPSK', 'FSK'],
    correct: 1,
  },
  {
    question:
      '12/20. Какой частотный диапазон используется в радиорелейной связи для работы в городской среде?',
    answers: ['6–11 ГГц', '18–23 ГГц', '71–86 ГГц', 'Все вышеперечисленные'],
    correct: 3,
  },
  {
    question:
      '13/20. Какой параметр антенны определяет направленность излучения?',
    answers: [
      'Коэффициент усиления',
      'Диаграмма направленности',
      'Рабочая частота',
      'Поляризация',
    ],
    correct: 1,
  },
  {
    question:
      '14/20. Какое устройство отвечает за преобразование модулированного сигнала в радиоволны?',
    answers: ['Антенна', 'Передатчик', 'Кабель', 'Рефлектор'],
    correct: 1,
  },
  {
    question: '15/20. Какую роль играет антенна в радиорелейной системе?',
    answers: [
      'Усиливает мощность передаваемого сигнала',
      'Преобразует радиочастотный сигнал в электрический',
      'Концентрирует энергию в определенном направлении для передачи и приема сигнала',
      'Снижает уровень шума в системе',
    ],
    correct: 2,
  },
  {
    question:
      '16/20. Что происходит при использовании слишком длинной радиорелейной линии без ретрансляторов?',
    answers: [
      'Повышается уровень сигнала',
      'Сигнал полностью отражается',
      'Происходит затухание сигнала ниже порога приемника',
      'Уменьшается помехоустойчивость',
    ],
    correct: 2,
  },
  {
    question:
      '17/20. Какую модуляцию чаще всего используют в радиорелейных системах для оптимального баланса между скоростью и устойчивостью?',
    answers: ['BPSK', '16-QAM', '64-QAM', 'QPSK'],
    correct: 3,
  },
  {
    question: '18/20. Для чего используется E-Band?',
    answers: [
      'Для передачи данных на дальние расстояния',
      'Для передачи данных с высокой скоростью на небольших дистанциях',
      'Для резервных каналов связи',
      'Для военной связи',
    ],
    correct: 1,
  },
  {
    question: '19/20. Что определяет выбор типа модуляции?',
    answers: [
      'Частота передачи данных',
      'Зона покрытия сигнала',
      'Энергопотребление оборудования',
      'Все перечисленное',
    ],
    correct: 3,
  },
  {
    question:
      '20/20. Какое из условий может значительно ухудшить работу радиорелейного канала?',
    answers: [
      'Увеличение ширины диаграммы направленности антенны',
      'Дождь или снегопад',
      'Использование частот ниже 1 ГГц',
      'Увеличение высоты установки антенн',
    ],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = TIME_LIMIT;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('time-left');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result');
const gradeText = document.getElementById('grade');
const quizContainer = document.getElementById('quiz-container');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
  resetTimer();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answersElement.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.textContent = answer;
    li.dataset.index = index;
    li.addEventListener('click', selectAnswer);
    answersElement.appendChild(li);
  });
  nextButton.disabled = true;
  startTimer();
}

function selectAnswer(event) {
  const selected = event.target;
  const allAnswers = answersElement.querySelectorAll('li');
  allAnswers.forEach((answer) => answer.classList.remove('selected'));
  selected.classList.add('selected');
  nextButton.disabled = false;
}

function nextQuestion() {
  clearInterval(timer);
  const selectedAnswer = answersElement.querySelector('.selected');
  if (selectedAnswer) {
    const selectedIndex = Number(selectedAnswer.dataset.index);
    if (selectedIndex === quizData[currentQuestionIndex].correct) {
      score++;
    }
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function startTimer() {
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = TIME_LIMIT;
  timerElement.textContent = timeLeft;
}

function showResult() {
  quizContainer.classList.add('hidden');
  resultBox.classList.remove('hidden');
  resultText.textContent = `Вы правильно ответили на ${score} из ${quizData.length} вопросов.`;
  const grade = Math.round((score / quizData.length) * 100);
  gradeText.textContent = `Ваша оценка: ${grade}%.`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizContainer.classList.remove('hidden');
  resultBox.classList.add('hidden');
  loadQuestion();
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

loadQuestion();
