import openai from 'openai-api'
import DefaultPrompt from './Prompts'

console.log(process.env);

const openaiWithKey = new openai(process.env.REACT_APP_OPENAI_API_KEY)

export default async function fetch(history: string, message: string) {
    const newHistory = history + `\nRecruiter: ` + message + `\nBruno Pommier:`
    const prompt = DefaultPrompt + newHistory
    console.log({ prompt });

    const response = await openaiWithKey.complete({
        engine: 'cushman-alpha',
        prompt,
        maxTokens: 150,
        temperature: 0,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "Recuiter:", "Bruno Pommier:"]
    });
    // Return the new message
    console.log('response:', response.data)
    return newHistory + response.data.choices[0].text
}