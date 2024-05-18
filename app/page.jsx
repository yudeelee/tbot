'use client';

import styles from './page.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const TOKEN = '7001153040:AAFlV8F1uLQh0wH-5fWcJsq6v8FZI6-Gzz4';
  const BASE_URL = `https://api.telegram.org/bot${TOKEN}/`;

  console.log(`${BASE_URL}`);

  const [data, setData] = useState();

  const getUpdates = async () => {
    try {
      const res = await axios.get(`${BASE_URL}getUpdates`);
      console.log(res.data.result);
      setData(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.updates}>
        {data?.map((dat, idx) => {
          return (
            <div key={idx}>
              {dat.message.chat.first_name} <span>{dat.message.text}</span>
            </div>
          );
        })}
        <button onClick={getUpdates}>Updates</button>
      </div>
    </div>
  );
}
