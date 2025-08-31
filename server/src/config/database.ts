import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ Подключение к MongoDB установлено');
    
    // Обработка событий подключения
    mongoose.connection.on('error', (err) => {
      console.error('❌ Ошибка подключения к MongoDB:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('🔌 Отключено от MongoDB');
    });
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('🔄 Соединение с MongoDB закрыто');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Ошибка подключения к MongoDB:', error);
    process.exit(1);
  }
};
