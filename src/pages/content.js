import styles from '@/styles/content.module.css';
import Image from 'next/image';
import bioPic from '../../public/biopic.png';
import { Baskervville } from '@next/font/google';

const baskervville = Baskervville({ 
    subsets: ["latin"],
    weight: "400",
    styles: ['italic', 'normal'],
});

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.bio}>
                <div className={styles.copy} style={baskervville.style}>
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
                </div>
                <div className={styles.image}>
                    <Image src={bioPic} alt="Jess Ford" style={{ width: '100%', height: '100%', border: '1px solid #2B3034'}}/>
                </div>
            </div>
            <div className={styles.cta}>
                <a href='https://www.calendly.com/jessfordcare' target="_blank" rel="noreferrer"><button className={styles.button} style={baskervville.style}>CONNECT</button></a>
            </div>
        </div>
    )
}