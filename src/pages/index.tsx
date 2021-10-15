import React from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import GlobalRedux from 'redux/global';
import 'react-image-lightbox/style.css';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.global.imageUrl);
  const showImage = () => dispatch(GlobalRedux.actions.showImage('/pyco.jpeg'));
  const closeImage = () => dispatch(GlobalRedux.actions.hideImage());
  return (
    <div className={styles.container}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <button onClick={showImage}>Show Image</button>
      {!!imageUrl && (
        <Lightbox
          mainSrc={imageUrl}
          onCloseRequest={closeImage}
          reactModalStyle={{
            overlay: {
              zIndex: 1100,
            },
          }}
        />
      )}
    </div>
  );
};

export default Home;
