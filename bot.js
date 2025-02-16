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
    const text = `🚀 Explore the something unique!\n🧠 Earn free Crypto using your gaming skill!\n🎮 Play, Earn & Have Fun!\n🔥 Latest AI Models at Your Fingertips!\n📢 Get Real-Time Crypto Earning for your priceless Time!\n💡 Unlock Exclusive AI & Gaming Features!\n🔗 Your Ultimate AI & Gaming Hub Awaits!\n✨ Discover, Play & Stay Ahead!\n👾 Smart AI + Fun Games = Endless Entertainment!\n🚀 Start Now & Experience the Future!\n\n💰 `;

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
