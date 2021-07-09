const INITIAL_STATE = {
  questions: [
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext Markup Langauge",
        "Programming Langauge",
        "Markup Language",
      ],
      correctAns: "Hypertext Markup Langauge",
    },
    {
      question: "Bootstrap is a Framework of __________",
      options: ["CSS", "HTML", "JS"],
      correctAns: "CSS",
    },
    {
      question: "JSX Stands for_________",
      options: ["JavaScript XML", "JavaScript", "JavaScriptX"],
      correctAns: "JavaScript XML",
    },
 

 
  ],
};
const reducer = (state = INITIAL_STATE) => {
  return state;
};

export default reducer;
