function checkPlagiarism() {
    const originalText = document.getElementById("text1").value;
    const textToCheck = document.getElementById("text2").value;

    if (originalText === textToCheck) {
        document.getElementById("result").innerText = "Plagiarism detected!";
    } else {
        document.getElementById("result").innerText = "No plagiarism detected.";
    }
}
