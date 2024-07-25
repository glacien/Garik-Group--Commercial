import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './GalleryContainer.module.css';

function GalleryContainer() {
  return (
    <div className={styles.container}>
      <h2>{'Galerie'}</h2>
      <div className={styles.content}>
        <PhotoProvider>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '1/2', gridColumn: '2/4' }}
          >
            <PhotoView src="/office-renovation.jpg">
              <img
                src="/office-renovation-compressed.jpg"
                alt="Renovace velkého areálu"
                className={`${styles.img} ${styles.img1}`}
                style={{
                  transform: 'translate(-50%, -38%)',
                }}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '2/3', gridColumn: '2/3' }}
          >
            <PhotoView src="/room.jpg">
              <img
                src="/room-compressed.jpg"
                alt="Krásný pokoj k rekonstrukci"
                className={`${styles.img} ${styles.img2}`}
                style={{
                  transform: 'translate(-50%, -43%)',
                }}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '2/3', gridColumn: '3/4' }}
          >
            <PhotoView src="/deconstruction.jpg">
              <img
                src="/deconstruction-compressed.jpg"
                alt="Demontáž práce v kanceláři"
                className={styles.img}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{
              gridRow: '3/5',
              gridColumn: '1/2',
            }}
          >
            <PhotoView src="/waste.jpg">
              <img
                src="/waste-compressed.jpg"
                alt="Proces likvidace odpadu"
                className={`${styles.img} ${styles.img3}`}
                style={{
                  width: 'unset',
                  height: '100%',
                  transform: 'translate(-54%, -50%)',
                }}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '3/4', gridColumn: '2/3' }}
          >
            <PhotoView src="/preparing.jpg">
              <img
                src="/preparing-compressed.jpg"
                alt="Příprava budovy na rekonstrukci"
                className={styles.img}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '3/4', gridColumn: '3/4' }}
          >
            <PhotoView src="/storage.jpg">
              <img
                src="/storage-compressed.jpg"
                alt="Složení použitých materiálů"
                className={styles.img}
              />
            </PhotoView>
          </div>
          <div
            className={styles.imgContainer}
            style={{ gridRow: '4/5', gridColumn: '2/3' }}
          >
            <PhotoView src="/staircase.jpg">
              <img
                src="/staircase-compressed.jpg"
                alt="Budova bude rekonstruována"
                className={styles.img}
              />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
}

export default GalleryContainer;
