import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputField from '../form-helpers/inputField';
import PageTitle from '../pageTitle';
import Uploader from '../form-helpers/uploader';
import PercentBadge from './percentBadge';

// const useStyles = makeStyles(() => ({}));

function ControlPhotoAndVideoForm({
  control,
  isProfile,
  showPageTitle,
  onSubmit=()=>null,
}) {

  const badge = <PercentBadge hidden={!isProfile}>10</PercentBadge>;

  return (
    <React.Fragment>
      {showPageTitle && <PageTitle badge={badge} title="Photos or/and Videos" />}
      <Box mt={4} mb={7}>
        <Typography variant="body2">
          Lets make it more personal by adding Photos and maybe Video of your Agency. By Adding Pictures or/and Videos
          your are giving more trust to your future employees.
        </Typography>
      </Box>
      <Box mb={4}>
        <PageTitle title="Photos" />
      </Box>
      <Box mb={7}>
        <Controller as={Uploader} control={control} name="photo" title="UPLOAD A PHOTO" showPreview />
      </Box>
      <Box mb={3} display={isProfile?'block':'none'}>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
      <Box mb="12px">
        <PageTitle title="Videos" />
      </Box>
      <Controller as={InputField} control={control} name="videoUrl" label="VIDEO URL" />
      <Box mt={4} mb={15}>
        <Controller as={Uploader} control={control} name="video" title="UPLOAD A VIDEO" accept="video/*" />
      </Box>
      <Box mb={3} display={isProfile?'block':'none'}>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
    </React.Fragment>
  )
}

const { object, bool } = PropTypes;

ControlPhotoAndVideoForm.propTypes = {
  control: object.isRequired,
  showPageTitle: bool
};

export default ControlPhotoAndVideoForm
