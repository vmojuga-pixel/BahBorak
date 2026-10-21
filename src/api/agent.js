export async function handleAgent(request, env) {
  if (request.method !== "POST") return null;
  
  try {
    const { message } = await request.json();
    if (!message) return Response.json({ error: "Mesej kosong" }, { status: 400 });

    // System prompt untuk arahkan AI jadi ejen BahBorak
    const systemPrompt = `Anda adalah "Agent BahBorak", pembantu AI pintar untuk platform BahBorak (SaaS untuk pengusaha SME di Malaysia). 
Tugas anda adalah membantu pengusaha menguruskan akaun mereka, menerangkan cara set auto-reply, menerangkan polisi privacy/keselamatan, dan menjawab soalan berkaitan bisnes mereka.
Jawab dengan mesra, profesional, dan ringkas dalam Bahasa Melayu (atau English jika ditanya dalam English).`;

    // Panggil Workers AI (Llama 3)
    const aiResponse = await env.AI.run("@cf/meta/llama-3-8b-instruct", {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    return Response.json({ response: aiResponse.response });
  } catch (err) {
    return Response.json({ error: "Agent sedang sibuk. Sila cuba lagi." }, { status: 500 });
  }
}
