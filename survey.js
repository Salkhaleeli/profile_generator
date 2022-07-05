const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`oh, well that's a very ${answer} i'm sorry`);
  rl.question('What\'s an activity you like doing?', (answer2) => {
    console.log(`what? you like ${answer2} too? same..`);
    rl.question('Which meal is your favourite? ', (answer3) => {
      console.log(`i've heared about ${answer3} is it good?`);
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
        console.log(`ohhh me too, ${answer4} is my fav.`);
        rl.question('Which sport is your absolute favourite?', (answer5) => {
          console.log(`Sorry hate watching ${answer5}, espicially when eating ${answer4}`);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer6) => {
            console.log(`That's deep ${answer}, i guess being ${answer6} is the greatest superpower`);
              rl.close();
            });
          });
        });
      });
    });
  });