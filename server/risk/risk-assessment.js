const {OpenAI} = require("openai");
const { catastrophicPrompts } = require("./risk-prompts");

const run = async (systemPrompt, userPrompt) => { 
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "system", content: systemPrompt}, {role: "user", content: userPrompt}],
        model: "gpt-4-turbo",
        max_tokens: 512,
        response_format: { "type": "json_object" }
    });

    const {content} = chatCompletion.choices[0].message; 
    return content.trim(); 
}

const getCatastrophicAssessments = async function(jailbreak) {
    const result = await run(...catastrophicPrompts(jailbreak));
    return result;
}

const risk = async function(jailbreak) {
    return await Promise.all([
        getCatastrophicAssessments(jailbreak)
    ])
}

module.exports = {risk}