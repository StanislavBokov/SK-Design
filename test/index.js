let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    { name: "Courses in France", prices: [150, null] },
    { name: "Courses in France", prices: [null, 150] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 200];
let requiredRange3 = [200, null];

function getCourse(arrRange) {
    const filteredCourse = courses.filter((course) => {
        if(arrRange[0] === null) {
            if(course.prices[1] === null) {
                return arrRange[1] > course.prices[0]
            }

            return arrRange[1] > course.prices[1] 
        }
        else if(arrRange[1] === null) {
            if(course.prices[0] === null) {
                return arrRange[0] < course.prices[1]
            }

            return arrRange[0] < course.prices[0]
        }
        if(arrRange[0] && arrRange[1]) {
            if(!course.prices[1]) {
               return course.prices[0] < arrRange[1]
            } else if(!course.prices[0]) {
                return course.prices[1] < arrRange[1]
            }
            
            return arrRange[0] < course.prices[0] && arrRange[1] < course.prices[1] 
        }
    })

    console.log(filteredCourse);
};

getCourse(requiredRange3)


