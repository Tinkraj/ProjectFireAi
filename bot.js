const TelegramBot = require('node-telegram-bot-api');

// Insert your bot token here
const token = '';
const bot = new TelegramBot(token, { polling: true });

// When the user sends the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Image URL
    const imageUrl = 'home.png';

    // Message text
    const text = `🚀 Explore Something Unique with AI & Gaming!

Unleash your gaming skills and earn free crypto while having fun! 🎮💰 With cutting-edge AI models at your fingertips, you can play, compete, and grow your funds effortlessly.

🔥 Real-time crypto rewards for your priceless time!
💡 Unlock exclusive AI & gaming features tailored for the future.
🔗 Your ultimate AI & gaming hub is here—stay ahead with the latest innovations!

👾 Smart AI + Fun Games = Endless Entertainment!
🚀 Start now & experience the future of AI-powered gaming! `;

    // Buttons
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🎮 Play', url: 'https://projectfireai.netlify.app/' }],
                [{ text: '🌐 Join TG Community', url: 'https://t.me/ProjectFireAI' }],
            
            ]
        }
    };

    // Send image and text
    bot.sendPhoto(chatId, imageUrl, { caption: text, parse_mode: "Markdown", ...options });
});

// Button callback handler
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'play') {
        bot.sendMessage(chatId, 'More features coming soon to start playing!');
    }
});
