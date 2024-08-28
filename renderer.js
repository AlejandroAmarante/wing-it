const { exec } = require("child_process");

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-box").value;
  searchApp(query);
});

function searchApp(query) {
  exec(`winget search ${query}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }

    document.getElementById("results").innerText = stdout;
  });
}
