const people = [
    {
        id: 1,
        firstName: "Loi",
        lastName: "Tran",
        age: 13,
        favoriteColors: ["red", "white", "blue"],
        favoriteSingers: ["Mariah Carey", "Justin Bieber", "Britney Spears"],
        nationality: "USA",
        gender: "m",
        zodiac: "Cancer",
        jobTitle: "Instructor",
        company: "CoderSchool",
        friendsCount: 5000,
        followers: 4000,
        height: "160mm",
        weight: "70kg"
    },
    {
        id: 2,
        firstName: "Quyen",
        lastName: "Thai",
        age: 23,
        favoriteColors: ["bronze", "white", "green"],
        favoriteSingers: ["Son Tung", "Minh", "Anh", "Taeyoung"],
        nationality: "VN",
        gender: "f",
        zodiac: "Taurus",
        jobTitle: "Student",
        company: "Grab",
        friendsCount: 1500,
        followers: 100,
        height: "160mm",
        weight: "50kg"
    },
    {
        id: 3,
        firstName: "Shawn",
        lastName: "Talvacchia",
        age: 32,
        favoriteColors: ["teal", "white", "torquise"],
        favoriteSingers: ["Romare", "Mount Kimbie", "Nicholas Jaar"],
        nationality: "USA",
        gender: "m",
        zodiac: "Cancer",
        jobTitle: "Student",
        company: "Facebook",
        friendsCount: 500,
        followers: 900,
        height: "180mm",
        weight: "70kg"
    },
    {
        id: 4,
        firstName: "Phuong",
        lastName: "Tran",
        age: 27,
        favoriteColors: ["blue", "pink", "green"],
        favoriteSingers: ["Chris Young", "Bruno Mars", "Taylor Swift"],
        nationality: "VN",
        gender: "f",
        zodiac: "Leo",
        jobTitle: "Student",
        company: "Google",
        friendsCount: 900,
        followers: 100,
        height: "155mm",
        weight: "65kg"
    },
    {
        id: 5,
        firstName: "Mai",
        lastName: "Hoang",
        age: 29,
        favoriteColors: ["red", "white", "black"],
        favoriteSingers: ["2pac", "Sia", "Johan Sebastian Von Bach"],
        nationality: "SE",
        gender: "f",
        zodiac: "Pisces",
        jobTitle: "Student",
        company: "Spotify",
        friendsCount: 1500,
        followers: 400,
        height: "140mm",
        weight: "87kg"
    },
    {
        id: 6,
        firstName: "Khuong",
        lastName: "Huynh",
        age: 18,
        favoriteColors: ["red", "green", "blue"],
        favoriteSingers: ["Adele", "Celine Dion", "Tuan Ngoc"],
        nationality: "vn",
        gender: "m",
        zodiac: "aries",
        jobTitle: "Student",
        company: "Amazon",
        friendsCount: 1505,
        followers: 10,
        height: "161mm",
        weight: "74kg"
    },
    {
        id: 7,
        firstName: "Thien",
        lastName: "Hoang",
        age: 28,
        favoriteColors: ["red", "white", "blue"],
        favoriteSingers: ["Adele", "Nat King Cole", "Westlife"],
        nationality: "VN",
        gender: "m",
        zodiac: "Aries",
        jobTitle: "Student",
        company: "Vingroup",
        friendsCount: 999,
        followers: 540,
        height: "148mm",
        weight: "54kg"
    },
    {
        id: 8,
        firstName: "Hang",
        lastName: "Tran",
        age: 29,
        favoriteColors: ["gray", "navy", "maroon"],
        favoriteSingers: ["Maroon5", "Linkin Park", "Eminem"],
        nationality: "vn",
        gender: "m",
        zodiac: "Sagittarius",
        jobTitle: "Student",
        company: "Go Viet",
        friendsCount: 500,
        followers: 300,
        height: "143mm",
        weight: "89kg"
    },
    {
        id: 9,
        firstName: "Parsa",
        lastName: "Taheri",
        age: 19,
        favoriteColors: ["Green", "Blue", "Yellow"],
        favoriteSingers: ["Shawn Mendes", "Lana Del Rey", "Eminem"],
        nationality: "UK",
        gender: "M",
        zodiac: "capricorn",
        jobTitle: "Student",
        company: "Vodafone",
        friendsCount: 2200,
        followers: 100,
        height: "173mm",
        weight: "62kg"
    },
    {
        id: 10,
        firstName: "Charles",
        lastName: "Lee",
        age: 26,
        favoriteColors: [
            "red",
            "white",
            "amber",
            "peach",
            "vanilla",
            "chocolate",
            "charcoal gray",
            "Big Apple Red",
            "Bubble Bath",
            "Kiss me on the Tulips"
        ],
        favoriteSingers: ["Kanye West"],
        nationality: "USA",
        gender: "m",
        zodiac: "Cancer",
        jobTitle: "Chief Executive Officer",
        company: "CoderSchool",
        friendsCount: 2121,
        followers: 212,
        height: "250mm",
        weight: "90kg"
    },
    {
        id: 10,
        firstName: "Phil",
        lastName: "Nguyen",
        age: 26,
        favoriteColors: ["red", "white", "blue"],
        favoriteSingers: ["Kanye West"],
        nationality: "USA",
        gender: "m",
        zodiac: "Cancer",
        jobTitle: "T.A.",
        company: "CoderSchool",
        friendsCount: 2121,
        followers: 212,
        height: "169mm",
        weight: "90kg"
    }
];

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Examples
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Define a function getAmericans() which takes the people array as an argument
// and returns an array of people who are Americans.
// It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getAmericans = persons => {
    document.getElementById("getAmericans").innerHTML = persons
        .filter(({ nationality }) => nationality === "USA")
        .map(person => person.firstName)
        .join(" ");
};

function onGetAmericans() {
    getAmericans(people);
}

// 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
// and returns an array of people who work at 'CoderSchool'.
// We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getCoderSchoolStaff = persons => {
    document.getElementById("getCoderSchoolStaff").innerHTML = persons
        .filter(person => person.company === "CoderSchool")
        .map(staff => `<li>${staff.firstName}</li>`)
        .join(" ");
};

function onGetCoderSchoolStaff() {
    getCoderSchoolStaff(people);
}

// 3. Define a function getMostPopularPerson() which takes the people array as an argument
// and returns an object. The object will have two keys. A person key will have the person as it's value.
// The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
// is the most popular.
// It should look like this { person: { firstName: 'Loi' }, total: 9000 }

const getMostPopularPerson = persons => {
    let mostPopulerInfo = { person: {}, totalPopularity: 0 };

    persons.map(person => {
        const totalPopularity = person.friendsCount + person.followers;
        if (totalPopularity > mostPopulerInfo.totalPopularity) {
            const newMostPopular = { totalPopularity, person };
            mostPopulerInfo = newMostPopular;
        }
    });
    document.getElementById(
        "getMostPopularPerson"
    ).innerHTML = `${mostPopulerInfo.person.firstName} is the most popular with a score of ${mostPopulerInfo.totalPopularity}`;
};

function onGetMostPopularPerson() {
    getMostPopularPerson(people);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Assignment
// ----------------------------------------------------------------------------------------------------------------------------------------

// 4. Define a function findVietnamese() which will take the people array as an argument and
// return an array. The array will contain persons who have nationality as VN for Vietnamese.
// Make sure the function will account for 'VN' and 'vn'
// It should look like this [{}, {}, {}, ...]

const findVietnamese = persons => {
    document.getElementById("findVietnamese").innerHTML = persons
        .filter(person => person.nationality.toUpperCase() == "VN")
        .map(person => person.firstName)
        .join(" ");
};

function onFindVietnamese() {
    findVietnamese(people);
}

// 5. Define a function countGenders() which will take the people array as an argument and
// return a string.
// It should look like this "There are 7 males and 3 males"

const countGenders = persons => {
    document.getElementById("countGenders").innerHTML = `
    There are ${
        persons.filter(person => person.gender.toLowerCase() == 'm').length
        } males and ${
        persons.filter(person => person.gender == 'f').length} females`;
}

function onCountGenders() {
    countGenders(people);
}

// 6. Define a function findTallest() which will take the people array as an argument and
// return an string.
// The string should look like "Charles was the tallest at 250mm"

const findTallest = persons => {
    document.getElementById('findTallest').innerHTML = `
        ${persons.sort((a, b) => parseInt(b.height) - parseInt(a.height))[0].firstName} was the tallest at ${persons[0].height}.
    `
}

function onFindTallest() {
    findTallest(people);
}

// 7. Define a function findAverageHeight() which will take the people array as an argument and
// return an string.
// The string should look like "The average height of our people is 168mm."

const findAverageHeight = persons => {
    document.getElementById('findAverageHeight').innerHTML = `
        The average height of our people is ${parseInt(persons.reduce((a, c) => a + parseInt(c.height), 0) / persons.length)}mm.
    `
}

function onFindAverageHeight() {
    findAverageHeight(people);
}

// 8. Define a function findZodiacs() which will take the people array as an argument and
// return an string. The string should say the users were from these signs
// The string should look like "We have Cancers, Tauruss, ... among our people"

const findZodiacs = persons => {
    let zodiacs = [];
    people.map(person => {
        if (!zodiacs.includes(person.zodiac.toLowerCase())) {
            zodiacs.push(person.zodiac.toLowerCase())
        }
    });
    document.getElementById('findZodiacs').innerHTML = `We have ${zodiacs.map(z => z[0].toUpperCase() + z.slice(1)).join(', ')}... among our people`
}

function onFindZodiacs() {
    findZodiacs(people);
}

// 9. Define a function findAverageAge() which will take the people array as an argument and
// return an string. The string will have the average age of the people
// The string should look like "The average age of the people is 21"

const findAverageAge = persons => {
    document.getElementById('findAverageAge').innerHTML = `
        The average age of the people is ${parseInt(persons.reduce((a, c) => a + c.age, 0) / persons.length)}.
    `
}

function onFindAverageAge() {
    findAverageAge(people);
}

// 10. Define a function findStudents() which will take the people array as an argument and
// return an array. The array will contain persons who have jobTitle listed as 'Student'.
// It should look like this [{}, {}, {}]

const findStudents = persons => {
    document.getElementById('findStudents').innerHTML = `<li>${persons.filter(person => person.jobTitle.toUpperCase() === 'STUDENT').map(person => person.firstName).join('</li>\n<li>')}</li>`
}

function onFindStudents() {
    findStudents(people);
}

// 11. Define a function findNguyens() which will take the people array as an argument and
// return an array. The array will contain persons whose last names are Nguyen.
// It should look like this [{}, {}]

const findNguyens = persons => {
    document.getElementById('findNguyens').innerHTML = `<li>${persons.filter(person => person.lastName.toUpperCase() === 'NGUYEN').map(person => person.firstName).join('</li>\n<li>')}</li>`
}

function onFindNguyens() {
    findNguyens(people);
}

// 12. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]

const findAgeAbove18s = persons => {
    document.getElementById('findAgeAbove18s').innerHTML = `
    <li>${persons.filter(person => person.age >= 18).map(person => person.firstName).join('</li>\n<li>')}</li>`
}

function onFindAgeAbove18s() {
    findAgeAbove18s(people);
}

// 13. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]

const findFavoriteColors = persons => {
    let colors = persons.map(person => (person.favoriteColors.join(','))).join(',').toLowerCase().split(',');
    console.log(colors)
    let colorsObject = {};
    colors.map(color => {
        if (colorsObject[color] === null) {
            colorsObject[color] = 0;
        }
        colorsObject[color] = colorsObject[color] + 1;

    })
    console.log(colorsObject);
    colors = Object.keys(colorsObject);
    document.getElementById('findFavoriteColors').innerHTML = `
    <li>${colors.join('</li>\n<li>')}</li>`;
}

function onFindFavoriteColors() {
    findFavoriteColors(people);
}

// 14. Define a function findJobTitles() which will take the people array as an argument and
// return an array. The array will contain UNIQUE jobTitles.
// It should look like this ['CEO', 'Instructor', 'Student']

const findJobTitles = persons => {
    let jobTitles = [];
    persons.map(person => {
        if (!jobTitles.includes(person.jobTitle.toLowerCase())) {
            jobTitles.push(person.jobTitle.toLowerCase())
        }
    });
    document.getElementById('findJobTitles').innerHTML = `<li>${jobTitles.map(title => title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')).join('</li>\n<li>')}</li>`
}

function onFindJobTitles() {
    findJobTitles(people);
}

// 15. Define a function findBirthYears() which will take the people array as an argument and
// return an array. The array will contain all years which the people were born in.
// It should look like this ['1997', '1990', '1987', ...]

const findBirthYears = persons => {
    let bYears = [];
    persons.map(person => 2019 - person.age).map(year => !bYears.includes(year) && bYears.push(year));
    document.getElementById('findBirthYears').innerHTML = bYears.sort();
}

function onFindBirthYears() {
    findBirthYears(people);
}

// 16. Define a function sortOldToYoung() which will take the people array as an argument and
// return an array. The array will contain all persons sorted from oldest to youngest
// It should look like this [{}, {}, {}, ...]

const sortOldToYoung = persons => {
    document.getElementById('sortOldToYoung').innerHTML = `
    <li>${persons.sort((a, b) => b.age - a.age).map(person => person.firstName).join('</li>\n<li>')}</li>`
}

function onSortOldToYoung() {
    sortOldToYoung(people);
}

// 17. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
// return three arrays. The first array will have two arrays within it.
// The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
// It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]

const splitIntoMinorsAndAdults = persons => {
    const splitIntoMinorsAndAdultsList = [persons.filter(person => person.age < 18), persons.filter(person => person.age >= 18)];
    document.getElementById('splitIntoMinorsAndAdults').innerHTML = `MINORS: <li>${splitIntoMinorsAndAdultsList[0].map(person => person.firstName).join('</li>\n<li>')}</li>\n ADULTS: <li>${splitIntoMinorsAndAdultsList[1].map(person => person.firstName).join('</li>\n<li>')}</li>`;
}

function onSplitIntoMinorsAndAdults() {
    splitIntoMinorsAndAdults(people);
}
// 18. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
// return an array. The array will contain all persons in the original array where each person has
// a new key(favoriteSuperHeros) with the value of an empty array [].
// It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]


const addFavoriteHerosToPeople = persons => {
    persons.map(person => person.favoriteSuperHeros = []);
    console.log(persons);
}

function onAddFavoriteHerosToPeople() {
    addFavoriteHerosToPeople(people);
}

// 19. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
// return an array. The array will contain all the original persons in the array with an additional
// key(birthPlace) with the value of a new object {}.
// It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]

const addBirthPlacesToPeople = persons => {
    persons.map(person => person.birthPlace = {});
    console.log(persons);
}

function onAddBirthPlacesToPeople() {
    addBirthPlacesToPeople(people);
}

// 20. Define a function findMostFavoritedColor() which will take the people array as an argument and
// return an string. The string will be the color which has the most people that have it in their favoriteColors.
// In the event there are two colors with equal numbers. Return a string that says 'x and y were really popular!'
// It should look like this 'black' or 'black and red were really popular!'

const findMostFavoritedColor = persons => {
        let mostPopularColors = {};
        persons.map(person => {
            let personalFavoriteColors = person.favoriteColors.map(color => {
                let colorInLowerCase = color.toLowerCase();
                mostPopularColors[colorInLowerCase] == null ? mostPopularColors[colorInLowerCase] = 0 : mostPopularColors[colorInLowerCase]++;
            }) 
        })
        let mostPopularNumber = Math.max(...Object.values(mostPopularColors));
        document.getElementById('findMostFavoritedColor').innerHTML = Object.keys(mostPopularColors).find(color => mostPopularColors[color] === mostPopularNumber);
}

function onFindMostFavoritedColor() {
    findMostFavoritedColor(people);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> LOOKING AHEAD
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. This is how we could implement getAmericans() on one line. 'Descruturing' is important for how this function behaves.
// const getAmericans = persons =>
//   persons.filter(({ nationality }) => nationality === "USA");

// 2. Arguments/Parameters dictate how our function will behave. This is an example of how we could
// use an additional parameter and make our function more flexible.
const getNationality = (persons, soughtNationality) =>
        persons.filter(
            ({ nationality: userNationality }) =>
                soughtNationality === userNationality
        );
