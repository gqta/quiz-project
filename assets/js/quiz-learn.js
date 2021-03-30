/**
 * 
 * @param {*} quizData 
 * @returns a array of quiz by format 
 *          {
                quizId: id,
                question: definition,
                answers : array of term
            }
 */
function genQuizByTerm(quizData) {
    let allTerms = [];
    for (const id in quizData) {
        if (Object.hasOwnProperty.call(quizData, id)) {
            const element = quizData[id];

            if (allTerms.indexOf(element.term) == -1) {
                allTerms.push(element.term);
            }

        }
    }

    let quizList = []; // this will contain quiz data for each element will under format {quizId, question, answers}

    for (const id in quizData) {
        if (Object.hasOwnProperty.call(quizData, id)) {
            const element = quizData[id];

            let answerIndex = allTerms.indexOf(element.term);

            let answers = [element.term];

            let maxAnswer = allTerms.length - 1 >= 3 ? 3 : allTerms.length - 1;

            for (let i = 0; i < maxAnswer;) {
                let termId = Math.round(Math.random() * (allTerms.length - 1));
                let term = allTerms[termId];

                if (answers.indexOf(term) == -1) {
                    answers.push(term);
                    i++;
                }
            }

            quizList.push({
                quizId: id,
                question: element.definition,
                answers
            });

        }
    }

    return quizList;
}

/**
 * 
 * @param {*} quizData 
 * @returns  a array of quiz by format 
 *          {
                quizId: id,
                question: a term,
                answers: array of definition
            }
 */
function genQuizByDefinition(quizData) {
    let allDefinitions = [];
    for (const id in quizData) {
        if (Object.hasOwnProperty.call(quizData, id)) {
            const element = quizData[id];

            if (allDefinitions.indexOf(element.definition) == -1) {
                allDefinitions.push(element.definition);
            }

        }
    }

    let quizList = []; // this will contain quiz data for each element will under format {quizId, question, answers}

    for (const id in quizData) {
        if (Object.hasOwnProperty.call(quizData, id)) {
            const element = quizData[id];

            let answerIndex = allDefinitions.indexOf(element.definition);

            let answers = [element.definition];

            let maxAnswer = allDefinitions.length - 1 >= 3 ? 3 : allDefinitions.length - 1;

            for (let i = 0; i < maxAnswer;) {
                let termId = Math.round(Math.random() * (allDefinitions.length - 1));
                let term = allDefinitions[termId];

                if (answers.indexOf(term) == -1) {
                    answers.push(term);
                    i++;
                }
            }

            quizList.push({
                quizId: id,
                question: element.term,
                answers
            });

        }
    }

    return quizList;
}



$(document).ready(() => {
    "use strict";

    const amount = 4;
    const quizData = {
        "111": {
            term: "Thanh Hóa",
            definition: "Nem chua là đặc sản của khu vực nào?"
        },
        "112": {
            term: "Hà Nội",
            definition: "Đâu là thủ đo của nước việt nam?"
        },
        "113": {
            term: "Hải Dương",
            definition: "Đâu là quê hương của bánh đậu xanh?"
        },
        "114": {
            term: "Hòa Lạc",
            definition: "Bún Bò nào là ngon nhất?"
        }
    };

    

});




