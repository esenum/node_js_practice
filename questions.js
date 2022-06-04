const collectAnswers = require("./collectAnswers");

const questions = [
    "What is your name ? ",
    "Where do you want to live ? ",
    "What is your purpose with node js? "
];

const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());
 
