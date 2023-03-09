import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { ReactComponent as UploadPhotoSvg } from '../../../assets/icons/upload-photo.svg'
import { ReactComponent as UploadVideoSvg } from '../../../assets/icons/upload-video.svg'
import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg'
import { ReactComponent as DefaultPreviewUploadSvg } from '../../../assets/icons/upload-default-preview.svg'

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const useStyles = makeStyles({
  thumbInner: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    minWidth: 0,
    overflow: 'hidden',
    '&:hover div': {
      visibility: 'visible'
    }
  },
  img: {
    display: 'block',
    maxWidth: '430px',
    height: '320px',
    borderRadius: '12px'
  },
  closeIcon: {
    visibility: 'hidden',
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
    transition: 'visibility .24s ease-in-out'
  }
});

function Uploader({
  svgIcon, title, showPreview, accept, ...restInputProps
}) {
  const [files, setFiles] = useState([]);
  // console.log('files', files)
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept,
    // disabled: true,
    onDrop: acceptedFiles => {
      const fileList = acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));
      setFiles(showPreview ? fileList : acceptedFiles);
      restInputProps.onChange(fileList[0])
    }
  });

  const classes = useStyles();

  useEffect(() => () => {
    if (showPreview) {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }
  }, [showPreview, files]);

  const onDeleteFile = () => {
    setFiles([]);
    restInputProps.onChange()
  };

  const getSvgIcon = () => {
    if (accept === 'image/*') {
      return <UploadPhotoSvg />
    } else if (accept === 'video/*') {
      return <UploadVideoSvg />
    }
  };

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <Box
          minHeight="120px"
          border="2px dashed #CCC"
          borderRadius="8px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderColor={getColor({ isDragActive, isDragAccept, isDragReject })}
        >
          <input {...getInputProps()} />
          <Box mb={2}>{svgIcon || getSvgIcon()}</Box>
          <Typography variant="caption">{title}</Typography>
        </Box>
      </div>
      {
        showPreview &&  (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="430px"
            height="320px"
            borderRadius="12px"
            bgcolor="#000"
            m="24px auto 0 auto"
          >
            {
              files[0] ? (
                <div className={classes.thumbInner}>
                  <img className={classes.img} alt="" src={files[0].preview} />
                  <div className={classes.closeIcon} onClick={onDeleteFile}><CloseSvg /></div>
                </div>
              ) : (
                <div><DefaultPreviewUploadSvg /></div>
              )
            }
          </Box>
        )
      }
    </React.Fragment>
  )
}

Uploader.defaultProps = {
  title: 'UPLOAD',
  showPreview: false,
  accept: 'image/*', // video/*
  onChange: () => {}
};

const { object, string, bool, func } = PropTypes;

Uploader.propTypes = {
  svgIcon: object,
  title: string,
  showPreview: bool,
  accept: string,
  onChange: func
};

export default Uploader
