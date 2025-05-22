document.getElementById('downloadJsonBtn').addEventListener('click', function() {
    // Your JSON data (can be an object or array)
    const jsonData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        hobbies: ["reading", "hiking", "coding"]
    };
    
    // Convert to JSON string with pretty-printing (2-space indent)
    const jsonString = JSON.stringify(jsonData, null, 2);
    
    // Create and download the file
    downloadFile(jsonString, 'data.json', 'application/json');
});

// Reusable download function
function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}