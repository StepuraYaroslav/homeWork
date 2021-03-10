import users from './users.js';
console.log(users);

// 6.1
const getUserNames = users => {
    return users.map(user => user.name);
};
  
console.log(getUserNames(users));


// 6.2
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));


// 6.3
const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender);
};

console.log(getUsersWithGender(users, 'male'));


// 6.4
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

//6.5
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// 6.6
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// 6.7
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// 6.8
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 6.9
const getNamesSortedByFriendsCount = users => {
  let sortUsers = [...users]
  .sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length)
  .map(user => user.name);

  return sortUsers;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 6.10
const getSortedUniqueSkills = users => {
  return users.reduce((acc, user) => {
    const skillsValue = Object.values(user.skills);
    console.log(skillsValue);

    skillsValue.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    
    return acc;
  }, [])
  .sort();
};

console.log(getSortedUniqueSkills(users));