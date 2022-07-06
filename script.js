const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("#download");
const previewBtn = document.querySelector("#preview");
const imgTag = document.querySelector("#image")

previewBtn.addEventListener("click", e => {
    e.preventDefault();
    imgTag.style.display = "block";
    imgTag.src = fileInput.value;
    previewBtn.style.display = "none";
    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = "AT Dilshan - " + url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        previewBtn.style.display = 'block';
        downloadBtn.style.display = 'none';
        imgTag.style.display = "none";
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.removeAttribute();
    })
}