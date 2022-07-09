import styles from './styles.module.scss';
import { SKDesign, ContainerForm } from '..';
export const Layout = () => {
  return (
    <div className={styles.testWrap}>
      <div className={styles.Layout}>
        <SKDesign />
        <ContainerForm />
      </div>
    </div>
  );
};