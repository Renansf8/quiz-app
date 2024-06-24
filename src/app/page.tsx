import React from 'react';
import styles from './styles.module.scss'
import { PlayerForm } from '@/components/playerForm/playerForm';

export default function Home() {

  return (
    <div>
      <div className={styles.content}>
        <PlayerForm />
      </div>
    </div>
  );
}
