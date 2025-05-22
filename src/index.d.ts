/**
 * Downloads content as a file using Blob API
 * @param content - File content
 * @param fileName - Download filename
 * @param contentType - File MIME type
 */
export function downloadFile(content: string, fileName: string, contentType?: string): void;

/**
 * Downloads JSON data as a file
 * @param data - JavaScript object to download
 * @param fileName - Download filename
 * @param prettyPrint - Format JSON with indentation
 */
export function downloadJson(data: object, fileName?: string, prettyPrint?: boolean): void;

/**
 * Downloads content using Data URL method
 * @param data - Data to download
 * @param fileName - Download filename
 * @param contentType - File MIME type
 */
export function downloadViaDataURL(data: object | string, fileName: string, contentType?: string): void;