// //1. הכריז על משתנה בשם userName והקצה לו ערך מחרוזת, המייצג את שם המשתמש.
// const userName = "TalAttias"
// // אחסן את שם המשתמש גם ב-localStorage וגם ב-sessionStorage באמצעות שיטת setItem.
// localStorage.setItem('userName' , userName);
// sessionStorage.setItem('userName' , userName);
// // אחזר את שם המשתמש משתי מערכות האחסון באמצעות שיטת getItem.
// // רשום את הערכים שאוחזרו לקונסולה באמצעות console.log.
// console.log(localStorage.getItem('userName'));
// console.log(sessionStorage.getItem('userName'));

// //2. צור פונקציה בשם logMessage שלוקחת ארגומנט בשם count ורושמת הודעה למסוף.
// function longMessage(count){
//     alert('אהלן')
// }
// // // השתמש ב-setTimeout כדי לעכב את ביצוע הפונקציה logMessage.
// setTimeout(longMessage , 3000);
// // // השתמש ב-setInterval כדי לקרוא לפונקציית logMessage כל 3 שניות.
// let count = 1 ;
// let intervalID = setInterval((myVar) => {alert('אהלן')
// // // השתמש ב-clearInterval כדי לעצור את ה-interval לאחר 3 איטרציות.
// count < 3 ? count += 1 : clearInterval(intervalID);}
//     , 3000, '1' );

// //3. צור פונקציה בשם calculateSquare שלוקחת ארגומנט מספר ומחזירה הבטחה חדשה.
// function calculateSquare(num) {
    //     let myPromise = new Promise(function(resolve , reject){
// // בתוך ההבטחה, בדוק אם המספר הוא מספר חוקי באמצעות typeof.
        //         if(typeof num === 'number'){
// // אם הקלט הוא מספר חוקי, פתרו את ההבטחה עם resolve ובתוך הסוגריים ריבוע המספר.
            //             resolve(num * num);
            //         } else
// // אם הקלט אינו מספר חוקי, דחה את ההבטחה עם הודעת שגיאה.
            //             reject('Not a Number')
//     })
//     return myPromise;
// }

// console.log(calculateSquare(2));