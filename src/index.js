/**
 * Downloads content as a file using Blob API
 * @param {String} content - File content
 * @param {String} fileName - Download filename
 * @param {String} contentType - File MIME type
 */
export function downloadFile(content, fileName, contentType = 'text/plain') {
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

/**
 * Downloads JSON data as a file
 * @param {Object} data - JavaScript object to download
 * @param {String} fileName - Download filename
 * @param {Boolean} prettyPrint - Format JSON with indentation
 */
export function downloadJson(data, fileName = 'data.json', prettyPrint = true) {
  const spaces = prettyPrint ? 2 : 0;
  downloadFile(
    JSON.stringify(data, null, spaces),
    fileName,
    'application/json'
  );
}

/**
 * Downloads content using Data URL method
 * @param {Object} data - Data to download
 * @param {String} fileName - Download filename
 * @param {String} contentType - File MIME type
 */
export function downloadViaDataURL(data, fileName, contentType = 'text/json') {
  const dataStr = `data:${contentType};charset=utf-8,` + 
                 encodeURIComponent(typeof data === 'string' ? data : JSON.stringify(data));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute('href', dataStr);
  dlAnchorElem.setAttribute('download', fileName);
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.click();
  document.body.removeChild(dlAnchorElem);
}

export default {
  downloadFile,
  downloadJson,
  downloadViaDataURL
};