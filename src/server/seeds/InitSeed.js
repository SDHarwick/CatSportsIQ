exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
  // .del(). // Add this back if you want to clear the DB 
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 100,
        first_name: 'First',
        last_name: 'Last',
        email: 'nigel@email.com',
        password: 'dorwssap'
      },
      {
        id: 102,
        first_name: 'First',
        last_name: 'Last',
        email: 'firlast@email.com',
        password: 'password1'
      },
      {
        id: 103,
        first_name: 'First',
        last_name: 'Last',
        email: 'jaywon@email.com',
        password: 'password123'
      }
    ]);
  });
};