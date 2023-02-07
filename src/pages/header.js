import styles from '@/styles/header.module.css';
import Image from 'next/image';
import logoImg from '../../public/logo.png';
import insta from '../../public/insta.svg'
import email from '../../public/email.svg'
import { easeIn, motion } from 'framer-motion';

export default function Header() {
    return (
        <div className={styles.header}>
            <motion.div className={styles.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: easeIn, duration: .75 }}>
                <Image src={logoImg} alt="Jess Ford" height={100} />
            </motion.div>
            <div className={styles.icons}>
                <motion.a className={styles.icon} href="https://www.instagram.com/jessford.care/" target="_blank" rel="noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: 0.2 }} whileHover={{ scale: 1.1 }}><Image src={insta} alt="Instagram Link"/></motion.a>
                <motion.a className={styles.icon} href="mailto:jessfordcare@gmail.com" initial={{ scale: .5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: 0.3 }} whileHover={{ scale: 1.1 }}><Image src={email} alt="Email Link"/></motion.a>
            </div>
        </div>
    )
}