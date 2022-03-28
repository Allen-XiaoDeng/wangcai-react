import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于我们' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>
        一款基于React实现的极简主义的记账应用，特点是一键急速记账。
      </article>
    </div>
  </>
};

export default About;