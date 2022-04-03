export default [
  {
    id: "1",
    type: "FILL_IN_THE_BLANK",
    parts: [
      {
        id: "element1",
        text: "el",
        isBlank: true,
      },
      {
        id: "element2",
        text: "niño",
        isBlank: false,
      },
      {
        id: "element3",
        text: "la",
        isBlank: true,
      },
      {
        id: "element4",
        text: "niña",
        isBlank: false,
      },
    ],
    options: ["la", "el", "mujer", "hombre", "ella"],
  },
  {
    id: "2",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: true,
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
  {
    id: "3",
    type: "OPEN_ENDED",
    text: "Yo soy un hombre",
    answer: "I am a man",
  },
  {
    id: "4",
    type: "FILL_IN_THE_BLANK",
    parts: [
      {
        id: "element1",
        text: "Tú eres una",
        isBlank: false,
      },
      {
        id: "element2",
        text: "niña",
        isBlank: true,
      },
    ],
    options: ["la", "el", "niña", "niño", "ella"],
    correct: "niña",
  },
  {
    id: "5",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
    ],
  },
  {
    id: "6",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "La mujer",
    answer: "the woman",
  },
  {
    id: "7",
    question: 'Which of these is "the cup"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: "8",
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: "9",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
    options: [
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
];
