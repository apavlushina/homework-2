module.exports.groupAdultsByAgeRange = function(array) {

    const arrayOver18 = array.filter((person) => person.age >=18)

    const categories = {}

    return arrayOver18.reduce((categories, currentPerson) => {

            if ( currentPerson.age < 21) {
                if (!categories["20 and younger"]) {
                    categories["20 and younger"] = [currentPerson]
                } else {
                    categories["20 and younger"].push(currentPerson)
                } 
                return categories
            }
            if (currentPerson.age < 31) {
                if (!categories["21-30"]) {
                    categories["21-30"] = [currentPerson]
                } else {
                    categories["21-30"].push(currentPerson)
                } 
                return categories
            }
            if (currentPerson.age < 41) {
                if (!categories["31-40"]) {
                    categories["31-40"] = [currentPerson]
                } else {
                    categories["31-40"].push(currentPerson)
                } 
                return categories
            }
            if (currentPerson.age < 51) {
                if (!categories["41-50"]) {
                    categories["41-50"] = [currentPerson]
                } else {
                    categories["41-50"].push(currentPerson)
                } 
                return categories
            }
            if (currentPerson.age > 50) {
                if (!categories["51 and older"]) {
                    categories["51 and older"] = [currentPerson]
                } else {
                    categories["51 and older"].push(currentPerson)
                } 
                return categories
            }
            return categories

    }, categories)
}



