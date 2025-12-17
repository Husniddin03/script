// Tashqi faylga (js.js) joylash uchun to'liq kod:
function autoTestAnswers(correctAnswersByNumber) {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        // Savol raqamini olish
        const questionId = question.id;
        const questionNumber = parseInt(questionId.replace('question_', ''));
        
        // To'g'ri javobni tekshirish
        if (correctAnswersByNumber.hasOwnProperty(questionNumber)) {
            const correctIndex = correctAnswersByNumber[questionNumber];
            const radioInputs = question.querySelectorAll('input[type="radio"]');
            
            if (radioInputs[correctIndex]) {
                // Check qilish
                radioInputs[correctIndex].checked = true;
                
                // onchange hodisasini ishga tushirish
                const changeEvent = new Event('change');
                radioInputs[correctIndex].dispatchEvent(changeEvent);
                
                // UI ni yangilash (agar kerak bo'lsa)
                radioInputs[correctIndex].closest('label').classList.add('selected');
            }
        }
    });
    
    console.log(`✅ ${Object.keys(correctAnswersByNumber).length} ta savol avtomatik belgilandi!`);
}

// 2. To'g'ri javoblar ro'yxati (masalan)
const myAnswers = {
    1: 2,   // 1-savol: 3-variant
    2: 1,   // 2-savol: 2-variant  
    3: 3,   // 3-savol: 4-variant
    4: 0,   // 4-savol: 1-variant
    5: 2,   // 5-savol: 3-variant
    6: 1,   // 6-savol: 2-variant
    7: 0,   // 7-savol: 1-variant
    8: 3,   // 8-savol: 4-variant
    9: 2,   // 9-savol: 3-variant
    10: 1 , // 10-savol: 2-variant
    11: 0,  // 11-savol: 1-variant
    12: 2,  // 12-savol: 3-variant
    13: 1,  // 13-savol: 2-variant
    14: 3,  // 14-savol: 4-variant
    15: 0,  // 15-savol: 1-variant
    16: 2,  // 16-savol: 3-variant
    17: 1,  // 17-savol: 2-variant
    18: 3,  // 18-savol: 4-variant
    19: 0,  // 19-savol: 1-variant
    20: 2,  // 20-savol: 3-variant
    21: 1,  // 21-savol: 2-variant
    22: 0,  // 22-savol: 1-variant
    23: 3,  // 23-savol: 4-variant
    24: 2,  //  24-savol: 3-variant
    25: 1,  // 25-savol: 2-variant
    26: 0,  // 26-savol: 1-variant
    27: 3,  // 27-savol: 4-variant
    28: 2,  // 28-savol: 3-variant
    29: 1,  // 29-savol: 2-variant
    30: 0,  // 30-savol: 1-variant
    31: 2,  // 31-savol: 3-variant
    32: 1,  // 32-savol: 2-variant
    33: 3,  // 33-savol: 4-variant
    34: 0,  // 34-savol: 1-variant
    35: 2,  // 35-savol: 3-variant
    36: 1,  // 36-savol: 2-variant
    37: 0,  // 37-savol: 1-variant
    38: 3,  // 38-savol: 4-variant
    39: 2,  // 39-savol: 3-variant
    40: 1,  // 40-savol: 2-variant
    41: 0,  // 41-savol: 1-variant
    42: 2,  // 42-savol: 3-variant
    43: 1,  // 43-savol: 2-variant
    44: 3,  // 44-savol: 4-variant
    45: 0,  // 45-savol: 1-variant
    46: 2,  // 46-savol: 3-variant
    47: 1,  // 47-savol: 2-variant  
    48: 0,  // 48-savol: 1-variant
    49: 3,  // 49-savol: 4-variant
    50: 2   // 50-savol: 3-variant
    // 50 ta savol uchun davom ettiring...

};

// 3. Ishga tushirish funksiyasi
autoTestAnswers(myAnswers);