import React from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import GlobalRedux from 'redux/global';
import Image from 'next/image';
import 'react-image-lightbox/style.css';
import { useGetPokemonByNameQuery } from 'services/pokemon';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  // RTK Query
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.global.imageUrl);
  const showImage = () => dispatch(GlobalRedux.actions.showImage('/pyco.jpeg'));
  const closeImage = () => dispatch(GlobalRedux.actions.hideImage());

  return (
    <div className={styles.container}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <Image
            width={100}
            height={100}
            quality={1}
            objectFit="contain"
            src={data.sprites.front_shiny}
            alt={data.species.name}
          />
        </>
      ) : null}
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
