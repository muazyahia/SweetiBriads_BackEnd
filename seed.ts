import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Content from './src/models/Content';
import Style from './src/models/Style';
import Admin from './src/models/Admin';
import bcrypt from 'bcryptjs';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://moazyahia2002_db_user:releYbozUqJBLrjz@ac-wkvtnrj-shard-00-00.nnm0gvj.mongodb.net:27017,ac-wkvtnrj-shard-00-01.nnm0gvj.mongodb.net:27017,ac-wkvtnrj-shard-00-02.nnm0gvj.mongodb.net:27017/sweeti?appName=Cluster0&authSource=admin&replicaSet=atlas-dkwcki-shard-0&ssl=true';

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // 1. Seed Content
    await Content.deleteMany({});
    await Content.create({
      heroData: {
        badge: "Self Love Starts Here",
        accent: "Beauty",
        main: "in every braid",
        desc: "Indulge in a premium hair braiding experience tailored just for you. From sleek knotless braids to timeless cornrows, we weave elegance and confidence into every strand.",
        btnBook: "Book Appointment",
        btnStyles: "Explore Styles",
        statNeat: "Clean & Neat",
        statWeeks: "Weeks Wear",
        statTension: "Scalp Tension",
      },
      signatureData: {
        sub: "Handcrafted Elegance",
        title: "Our Braiding Masterpieces",
        desc: "Discover our signature braiding techniques designed to protect your hair while keeping you looking absolutely gorgeous."
      },
      aboutData: {
        sub: "Our Philosophy",
        title: "The Sweeti Braids Identity",
        desc: `"Sweeti Braids" is more than just hair styling; it's a celebration of self-love and intricate artistry. We believe that a perfect braid is a form of crown, styled with passion, care, and total precision.`
      },
      reviewsData: {
        title: "Loved by our Clients",
        desc: "We value your opinion and check every feedback to offer the absolute best experience in Zagazig."
      },
      bookingData: {
        sub: "Reserve Your Glow",
        title: "Book Your Appointment",
        desc: "Customize your braid session in three easy steps, preview your selections, and submit directly to confirm via WhatsApp."
      },
      contactData: {
        title: "Get in Touch",
        slogan: "Hand drawn with love. Beauty in every braid.",
        credit: "Designed in Zagazig, Egypt.",
        whatsapp: "201091945495",
        instagram: "https://instagram.com/sweetibraids",
        tiktok: "https://tiktok.com/@sweetibraids"
      }
    });
    console.log('Content seeded successfully.');

    // 2. Seed Styles
    await Style.deleteMany({});
    
    const styles = [
      {
        name: "Knotless Braids",
        tagline: "Gentle on your edges, stunning on your crown.",
        description: "A modern take on box braids with a seamless start — no knot at the root means less tension, more comfort, and a natural-looking finish.",
        features: [
          { title: "Lightweight Feel", desc: "No heavy knot at the base keeps the style light and tension-free from day one." },
          { title: "Long-Lasting Wear", desc: "With proper care, knotless braids can last up to 8 weeks beautifully." },
          { title: "Protective & Healthy", desc: "Protects your natural hair and promotes growth while looking gorgeous." }
        ],
        modelImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/knotless",
        posterImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/knotless-poster"
      },
      {
        name: "Cornrows",
        tagline: "A timeless classic, reimagined with precision.",
        description: "Cornrows are braided close to the scalp in continuous rows. Versatile, neat, and ready for any occasion — from everyday wear to special events.",
        features: [
          { title: "Sleek Profile", desc: "Flat against the scalp for a sleek, neat profile that's easy to maintain." },
          { title: "Protective Style", desc: "Keeps your natural hair tucked away and protected from daily wear." },
          { title: "Minimal Maintenance", desc: "Stay fresh and neat for weeks with minimal maintenance required." }
        ],
        modelImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/cornrows",
        posterImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/cornrows-poster"
      },
      {
        name: "French Braids",
        tagline: "Effortless elegance for every moment.",
        description: "French braids weave your hair into a flowing, three-strand pattern that's both elegant and practical. Perfect for a polished look that lasts all day.",
        features: [
          { title: "Clean & Polished", desc: "Creates a refined, structured look that elevates any outfit." },
          { title: "Comfortable Fit", desc: "Smooth technique ensures no pulling or discomfort throughout the day." },
          { title: "All-Day Hold", desc: "Styled to hold beautifully from morning to evening without fuss." }
        ],
        modelImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/french",
        posterImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/french-poster"
      },
      {
        name: "Boho Braids",
        tagline: "Free-spirited, flowy, and uniquely you.",
        description: "Boho braids blend traditional braiding with loose, flowing curls for a carefree and romantic look. Perfect for those who want to stand out beautifully.",
        features: [
          { title: "Effortless Look", desc: "Light, loose ends give the style a natural, effortless feel." },
          { title: "Lasting Beauty", desc: "Boho braids maintain their beautiful shape for weeks with minimal upkeep." },
          { title: "Protective Focus", desc: "Protective base with free-flowing ends to keep your natural hair healthy." }
        ],
        modelImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/boho",
        posterImage: "https://res.cloudinary.com/dpvj12z2x/image/upload/v1/sweetibraid/boho-poster"
      }
    ];

    await Style.insertMany(styles);
    console.log('Styles seeded successfully.');

    // 3. Admin user
    await Admin.deleteMany({});
    const passwordHash = await bcrypt.hash('admin123', 10);
    await Admin.create({
      email: 'admin@sweeti.com',
      passwordHash
    });
    console.log('Admin seeded successfully (admin@sweeti.com / admin123).');

    mongoose.disconnect();
    console.log('Done and disconnected.');

  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();
