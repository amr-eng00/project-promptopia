import { connectToDB } from "@utils/database"; 
import Prompt from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDB();

    // اول بدون populate تست کن
    const prompts = await Prompt.find({})
    // console.log("Fetched prompts:", JSON.stringify(prompts));

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching prompts:", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
