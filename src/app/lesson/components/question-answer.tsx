interface Answer {
  id: string;
  description: string;
}

interface QuestionAnswersProps {
  answers: Answer[];
  selectedAnswerId: string | null;
  onAnswerSelect: (answerId: string) => void;
}

export function QuestionAnswers({ answers, selectedAnswerId, onAnswerSelect }: QuestionAnswersProps) {
  return (
    <div className="space-y-3">
      {answers.map((answer) => {
        const isSelected = selectedAnswerId === answer.id;

        return (
          <button
            key={answer.id}
            className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-200
              ${isSelected
                ? 'border-cyan-500 bg-gray-100 dark:bg-gray-700'
                : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50'
              }
              hover:border-cyan-500 dark:hover:border-cyan-500
              hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={() => onAnswerSelect(answer.id)}
          >
            {answer.description}
          </button>
        );
      })}
    </div>
  );
}
