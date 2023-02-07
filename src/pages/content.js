import styles from '@/styles/content.module.css';
import Image from 'next/image';
import bioPic from '../../public/biopic.png';
import { Baskervville } from '@next/font/google';
import { circIn, easeIn, motion } from 'framer-motion';

const baskervville = Baskervville({ 
    subsets: ["latin"],
    weight: "400",
    styles: ['italic', 'normal'],
});

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.bio}>
                <motion.div className={styles.copy} style={baskervville.style} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', bounce: 0, ease: easeIn, duration: 1, delay: 0.5 }}>
                    Whether you’re preparing for birth and postpartum, facing the loss of your baby, or are approaching end of life, these profound human experiences require tender support and guidance.
                    <br/>
                    <br/>
                    My approach to doula work is calm, encouraging and adaptive. I believe each experience is unique and will meet you where you are at in order to provide personalized care.
                    <br/>
                    <br/>
                    My offerings have evolved after the birth of my baby and entering parenthood, and I am now transforming my work into a healing arts practice offered as one-on-one and group sessions.
                    <br/>
                    <br/>
                    Healing, grief, and life transformations in and of themselves are a form of art. When we are faced with these, there is no clear cut, linear path to follow. By tapping into an art practice, you are able to shed light on emotions, express more deeply, create tangible meaning, and heal through process.
                    <br/>
                    <br/>
                    As I develop my practice, I will be offering complimentary consultations for full spectrum doula needs, as well as healing art therapy sessions on a sliding scale.
                    <br/>
                    <br/>
                    More to come :&#41;
                </motion.div>
                <motion.div className={styles.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: easeIn, delay: 0.5, duration: 1 }}>
                    <Image src={bioPic} alt="Jess Ford" style={{ width: '100%', height: '100%', border: '1px solid #2B3034'}}/>
                </motion.div>
            </div>
            <motion.div className={styles.cta} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <a href='https://www.calendly.com/jessfordcare' target="_blank" rel="noreferrer"><motion.button className={styles.button} style={baskervville.style} whileTap={{ scale: 0.97 }} whileHover={{ backgroundColor: '#2B3034', color: 'white' }}>CONNECT</motion.button></a>
            </motion.div>
        </div>
    )
}