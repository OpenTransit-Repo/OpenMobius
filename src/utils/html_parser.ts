export function html_to_text(html) {
    return html.replace(/<[^>]*>/g, '');
}