const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const items = Object.keys(user);

for (const item of items) {
    console.log(`${item}: ${user[item]}`);
}
