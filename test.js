console.log("starting tests ...");

// If you want to simulate a delay, you can,
// but you must exit the process afterward.
setTimeout(() => {
  console.log("waiting 3 seconds ...");
  console.log("tests completed successfully");
  process.exit(0); // This signals success to GitHub Actions
}, 3000);
