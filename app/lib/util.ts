/**
* Formats a file size in bytes to a human-readable string (KB, MB, GB)
* @param bytes - The size in bytes
* @returns A formatted string with the appropriate unit
*/

export function formatSize(bytes: number): string {
    if(bytes === 0) return '0 Bytes';

    const size = 1024;
    const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const unit: number = Math.floor(Math.log(bytes) / Math.log(size));

    return parseFloat((bytes / Math.pow(size, unit)).toFixed(2)) + ' ' + sizes[unit];

}