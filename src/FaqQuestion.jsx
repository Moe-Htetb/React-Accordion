import React, { useState } from "react";
import Faq from "./Faq";

function FaqQuestion() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "How do you use the map() method to render a list in React?",
      answer:
        "In React, you use the map() method to iterate over an array and return elements. Each element should have a unique key to help React track changes efficiently.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "What is the purpose of the key prop when rendering lists in React?",
      answer:
        "The key prop helps React identify which items have changed, been added, or removed. It’s essential for efficient list re-rendering.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How do you add an item to an array in React state?",
      answer:
        "You use the spread operator to copy the existing array, add the new item, and then update the state. Example: setArray([...array, newItem]).",
      isOpen: false,
    },
    {
      id: 4,
      question: "How can you remove an item from an array in React state?",
      answer:
        "Use the filter() method to create a new array without the item you want to remove. Then, update the state with the new array.",
      isOpen: false,
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : { ...question, isOpen: false }
      )
    );
  };

  return (
    <div className="p-10 w-full">
      <h1 className="text-3xl mb-3 font-bold">Frequently Asked Questions</h1>
      <div className="flex flex-col ">
        {questions.map((question) => (
          <Faq
            key={question.id}
            toggleQuestion={toggleQuestion}
            result={question}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqQuestion;
