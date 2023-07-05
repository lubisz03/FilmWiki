import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  startAddWishlistedMovie,
  startRemoveWishlistedMovie,
} from '../actions/wishlistedMovies';
import {
  startAddWatchedMovie,
  startRemoveWatchedMovie,
} from '../actions/watchedMovies';

const Details = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size='xl'
      scrollBehavior='outside'
      p='1.2rem 0'
      isCentered>
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent backgroundColor='black'>
        <ModalHeader color='red'>
          <Heading as='h3' size='lg'>
            {props.data.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton backgroundColor='red' />
        <ModalBody color='white'>
          <Image
            objectFit='cover'
            objectPosition='center'
            src={`${process.env.REACT_APP_TMDB_IMG_URL}${props.data.poster_path}`}
          />
          <Heading as='h3' size='lg' color='red' mt='1.2rem'>
            About
          </Heading>
          <Text mt='0.6rem'>{props.data.overview}</Text>
          <Heading as='h3' size='lg' color='red' mt='1.2rem'>
            Release Date
          </Heading>
          <Text mt='0.6rem'>{props.data.release_date}</Text>
          <Heading as='h3' size='lg' color='red' mt='1.2rem'>
            Rating
          </Heading>
          <Text mt='0.6rem'>{props.data.vote_average}</Text>
        </ModalBody>
        <ModalFooter>
          {props.watched && props.isAuthenticated ? (
            <Button
              colorScheme='red'
              mr={3}
              onClick={() =>
                props.dispatch(startRemoveWatchedMovie(props.data))
              }>
              Remove from watched
            </Button>
          ) : (
            props.isAuthenticated && (
              <Button
                colorScheme='green'
                mr={3}
                onClick={() =>
                  props.dispatch(startAddWatchedMovie(props.data))
                }>
                Add to watched
              </Button>
            )
          )}
          {props.wishlisted && props.isAuthenticated ? (
            <Button
              colorScheme='red'
              mr={3}
              onClick={() =>
                props.dispatch(startRemoveWishlistedMovie(props.data))
              }>
              Remove from wishlist
            </Button>
          ) : (
            props.isAuthenticated && (
              <Button
                colorScheme='green'
                mr={3}
                onClick={() =>
                  props.dispatch(startAddWishlistedMovie(props.data))
                }>
                Add to wishlist
              </Button>
            )
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.uid,
    genres: state.genres,
    watched: state.modal.watched,
    wishlisted: state.modal.wishlisted,
  };
};

export default connect(mapStateToProps)(Details);
