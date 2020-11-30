//process.stdout.write('\x07');
const arg = process.argv.slice(2);
for (let item of arg) {
  if(item > 0 && !Number.isNaN(item))
  setTimeout(() => {
    process.stdout.write('\x07');
  }, item * 1000);
}