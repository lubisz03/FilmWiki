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
  startAddWatchedMovie,
  startRemoveWatchedMovie,
  startAddWishlistedMovie,
  startRemoveWishlistedMovie,
} from '../actions/movies';
import { closeModal } from '../actions/modal';
import moment from 'moment/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size='xl'
      scrollBehavior='outside'
      p='1.2rem 0'
      autoFocus={false}
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
          <Text mt='0.6rem'>
            {moment(props.data.release_date).format('Do MMMM YYYY')}
          </Text>
          <Heading as='h3' size='lg' color='red' mt='1.2rem'>
            Rating
          </Heading>
          <Text mt='0.6rem'>
            {parseFloat(props.data.vote_average).toFixed(1)}
          </Text>
        </ModalBody>
        <ModalFooter>
          {props.watched && props.isAuthenticated ? (
            <Button
              colorScheme='red'
              mr={3}
              size='lg'
              fontFamily='inherit'
              color='white'
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
                size='lg'
                fontFamily='inherit'
                color='white'
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
              size='lg'
              fontFamily='inherit'
              color='white'
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
                size='lg'
                fontFamily='inherit'
                color='white'
                onClick={() =>
                  props.dispatch(startAddWishlistedMovie(props.data))
                }>
                Add to wishlist
              </Button>
            )
          )}
          <Button
            colorScheme='red'
            mr={3}
            size='lg'
            fontFamily='inherit'
            fontWeight='bold'
            color='white'
            onClick={() => props.dispatch(closeModal())}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
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
