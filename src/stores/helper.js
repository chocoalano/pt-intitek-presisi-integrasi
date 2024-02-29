export default async function toJSON(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    const chunks = [];

    async function read() {
        const { done, value } = await reader.read();

        if (done) {
            return JSON.parse(chunks.join(''));
        }

        const chunk = decoder.decode(value, { stream: true });
        chunks.push(chunk);
        return read();
    }

    return read();
}