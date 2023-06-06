let spinner = "|/-\\";
let i = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, i);
  i += 200;
}

setTimeout(() => {
  console.log("\r");
}, 1600);
