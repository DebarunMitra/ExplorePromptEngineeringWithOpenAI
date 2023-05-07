const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ debug: true, path: path.resolve(__dirname, './config/.env') })

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

async function processPrompting(){
    const openai = new OpenAIApi(configuration);
    try{
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            temperature: 0,
            max_tokens: 7,
        });
        
        console.log(response.data);
    }catch (error){
        console.log("error- ", error.message);
    }
}

processPrompting()