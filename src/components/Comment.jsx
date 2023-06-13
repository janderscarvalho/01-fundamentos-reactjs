import { ThumbUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}> 
            <img src="https://avatars.githubusercontent.com/u/24524909?v=4" alt=''/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon</strong>
                            <time title="11 de maio ás 08:13h" dateTime='2021-05-11T08:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={28} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button title='Apaludir'>
                        <ThumbUp size={20} />
                        Apaludir <span>18</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}