import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();

        // 1. Log the lead to sponsors_list.md (Marked [W] for Web/Manual)
        const filePath = path.join(process.cwd(), '..', 'sponsors_list.md');
        const newLeadLine = `- [W] ${company} | Contact: ${name} <${email}> | Note: ${message}\n`;

        // Check if file exists, if not create with header
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '# Sponsors List\n\n');
        }
        fs.appendFileSync(filePath, newLeadLine);

        // 2. AI Lead Filtering
        const geminiKey = process.env.GEMINI_API_KEY;
        let isQualified = false;
        let aiReasoning = "";

        if (geminiKey) {
            const prompt = {
                contents: [{
                    parts: [{
                        text: `Analyze this web lead for a LinkedIn Audience Amplification agency (30k followers).
            Lead Details:
            Company: ${company}
            Message: ${message}
            
            Determine if this is a serious sponsorship/partnership inquiry (QUALIFIED) or spam/general noise (UNQUALIFIED).
            Output ONLY a JSON object: {"status": "QUALIFIED" | "UNQUALIFIED", "reason": "brief reason"}`
                    }]
                }]
            };

            try {
                const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(prompt)
                });
                const aiData = await aiResponse.json();
                const aiText = aiData.candidates[0].content.parts[0].text;
                const result = JSON.parse(aiText.replace(/```json|```/g, '').trim());

                isQualified = result.status === "QUALIFIED";
                aiReasoning = result.reason;
            } catch (err) {
                console.error("AI Filtering error, defaulting to manual check:", err);
                isQualified = true;
            }
        } else {
            isQualified = true;
        }

        // 3. Telegram Alert (ONLY if qualified)
        const tgToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (isQualified && tgToken && chatId) {
            const tgMsg = `💎 *NEW QUALIFIED LEAD!*
👤 *Name:* ${name}
🏢 *Company:* ${company}
📧 *Email:* ${email}
💬 *Message:* ${message}
🤖 *AI Reason:* ${aiReasoning}`;

            await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: tgMsg,
                    parse_mode: 'Markdown'
                })
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
