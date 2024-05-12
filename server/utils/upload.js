import multer from 'multer';
import multerGridFsStorage from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new multerGridFsStorage({
    url: `mongodb://${username}:${password}@ac-uozyykw-shard-00-00.gt2um8z.mongodb.net:27017,ac-uozyykw-shard-00-01.gt2um8z.mongodb.net:27017,ac-uozyykw-shard-00-02.gt2um8z.mongodb.net:27017/?ssl=true&replicaSet=atlas-6p39gb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-app`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            // If the file type doesn't match, generate a unique filename
            return `${Date.now()}-blog-${file.originalname}`;
        } else {
            // If the file type matches, store it in the 'photos' bucket with a unique filename
            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`
            };
        }
    }
});

// Multer middleware configured with the storage engine
const upload = multer({ storage });

export default upload;
