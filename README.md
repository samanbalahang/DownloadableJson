# JavaScript File Download Examples

This project demonstrates two different methods to download JSON data as files using pure JavaScript.


## 📦 Installation

```
npm install client-side-json-exporter-sam
```

## 🚀 How to Use

```
npm init
npm install client-side-json-exporter-sam
cd node_modules/client-side-json-exporter-sam

```

open demo folder and use live server to run it in vscode




## Methods Demonstrated

### 1. Blob API Method (Recommended)
**File:** `script.js` (first approach)  
**Button ID:** `firstWay`

#### Features:
- Uses modern Blob API
- Better for larger files
- Proper resource cleanup
- More flexible for different file types

#### How it works:
1. Creates a Blob object with the JSON content
2. Generates an object URL for the Blob
3. Creates a temporary anchor element
4. Triggers the download
5. Cleans up the temporary resources

### 2. Data URL Method
**File:** `script.js` (second approach)  
**Button ID:** `secoundway`

#### Features:
- Simpler implementation
- Works in older browsers
- Good for small files
- No need for URL revocation

#### How it works:
1. Creates a data URL with encoded JSON
2. Sets the href of an anchor element
3. Triggers the download
4. Appends and removes the anchor dynamically

## Code Comparison

| Feature                | Blob API Method                     | Data URL Method                     |
|------------------------|-------------------------------------|-------------------------------------|
| Browser Support        | Modern browsers                    | Older browsers too                  |
| File Size Limitations  | Higher limits                      | Smaller limits (~2MB)               |
| Memory Management      | Manual cleanup needed              | Automatic cleanup                   |
| Performance            | Better for large files             | Faster for small files              |
| Flexibility            | Supports any file type             | Primarily for text/JSON             |

## Full HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Methods Comparison</title>
</head>
<body>
    <button id="firstWay">Blob API Method</button>
    <button id="secoundway">Data URL Method</button>
    <script src="js/script.js"></script>
</body>
</html>
```

# JavaScript Implementation

```js
// Blob API Method (firstWay)
document.getElementById('firstWay').addEventListener('click', function() {
    const jsonData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        hobbies: ["reading", "hiking", "coding"]
    };
    
    const jsonString = JSON.stringify(jsonData, null, 2);
    downloadFile(jsonString, 'data.json', 'application/json');
});

function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}

// Data URL Method (secoundway)
document.getElementById('secoundway').addEventListener("click",function(){
    const storageObj = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
    };
    const filename = "scene";
    
    var dataStr = "data:text/json;charset=utf-8," + 
                 encodeURIComponent(JSON.stringify(storageObj));
    var dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `${filename}.json`);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    document.body.removeChild(dlAnchorElem);
});
```

Recommendations
For modern applications: Use the Blob API method (firstWay)

For maximum compatibility: Use the Data URL method (secoundway)

For large files: Always use the Blob API method

For simple implementations: Data URL method is easier

## 🌐 Browser Support
Both methods work in all modern browsers. The Data URL method has slightly better support in older browsers.

## 📜 License
MIT License - free to use in both personal and commercial projects.

<h1 align="center"> <em>This project was created using <a href="https://www.deepseek.com" target="_blank">DeepSeek</a> technology</em> </h1>

This README.md includes:
1. Clear explanation of both methods
2. Comparison table
3. Complete HTML and JavaScript code
4. Usage recommendations
5. Browser support information
6. Proper Markdown formatting for GitHub

You can copy this entire block and paste it directly into a README.md file in your project.
