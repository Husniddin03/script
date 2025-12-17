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
    // ... hamma 50 ta savol uchun
};

// 3. Ishga tushirish funksiyasi
autoTestAnswers(myAnswers);