import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainImg: {
    height: '100%',
    minHeight: 300,
    width: '100%',
    backgroundImage: (props) => `url(${props.mainImgSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

function MainImg(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.mainImg} />
  )
}

MainImg.propTypes = {
  mainImgSrc: PropTypes.string
};

export default MainImg
