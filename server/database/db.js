import mongoose from 'mongoose';
//${username}:${password}

const Connection = async (username, password) => {
    mongoose.set('strictQuery', false);
    const URL = `mongodb://${username}:${password}@ac-uozyykw-shard-00-00.gt2um8z.mongodb.net:27017,ac-uozyykw-shard-00-01.gt2um8z.mongodb.net:27017,ac-uozyykw-shard-00-02.gt2um8z.mongodb.net:27017/?ssl=true&replicaSet=atlas-6p39gb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-app`;   
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
