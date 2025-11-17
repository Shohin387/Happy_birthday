export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength ) return text
    
    return text.split(" ").slice(0, maxLength - 1).join(" ") + "..."
}