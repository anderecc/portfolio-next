let downloadCr = () => {
    return fetch('/download/crAnderson.pdf').then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'crAnderson.pdf';
            alink.click();
        });
    });
};
export default downloadCr;
