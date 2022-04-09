import { useState } from 'react';
import styles from './Notice.module.css'
import Close from '../icons/Close'

export default function CovidNotice() {
  const [noticeState, setNoticeState] = useState('show');

  const closeCovidNotice = () => {
    console.log('Test');
    setNoticeState('hide')
  };

  return (
    <div className="container">
      <div className={noticeState === 'hide' ? styles.hiddenNotice : styles.notice}>
        <div>
          <h4>Covid Notice</h4>
          <p>Covid information here</p>
        </div>
        <a href="#covidClose" onClick={closeCovidNotice}>
          <Close />
        </a>
      </div>
    </div>
  )
}
