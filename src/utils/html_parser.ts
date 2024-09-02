export function html_to_text(html) {
    return html
        .replace(/<style([\s\S]*?)<\/style>/gi, '')
        .replaceAll('<br>', '\n')
        .replace(/<[^>]*>/g, '\n')
        .split('\n')
        .filter((x) => x.trim() !== '')
        .join('\n')
        .trim();
}