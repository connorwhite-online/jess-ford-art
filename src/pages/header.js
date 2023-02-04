import styles from '@/styles/header.module.css';
import Image from 'next/image';
import logoImg from '../../public/logo.png';
import insta from '../../public/insta.svg'
import email from '../../public/email.svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.image}>
                <Image src={logoImg} alt="Jess Ford" height={100} />
            </div>
            <div className={styles.icons}>
                <a className={styles.icon} href="https://www.instagram.com/jessford.care/" target="_blank" rel="noreferrer"><Image src={insta} alt="Instagram Link"/></a>
                <a className={styles.icon} href="mailto:jessfordcare@gmail.com"><Image src={email} alt="Email Link"/></a>
            </div>
        </div>
    )
}