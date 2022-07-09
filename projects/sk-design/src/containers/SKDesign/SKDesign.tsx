import { FC } from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/img/logo.png';

export const SKDesign:FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <img src={logo} alt="" className={styles.imgLogo}/>  
      <h2 className={styles.titleWpapper}>Оставьте заявку и станьте частью нашей команды</h2>
      <div className={styles.textWrapper}>
        <div className={styles.textItem}>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</div>
        <div className={styles.textItem}>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.</div>
        <div className={styles.textItem}>Ознакомиться с проектами можете в нашем <span className={styles.span}>портфолио</span>. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.</div>
      </div>
    </div>
  );
};