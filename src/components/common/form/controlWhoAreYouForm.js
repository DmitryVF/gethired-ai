import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputField from '../../../components/common/form-helpers/inputField';
import CustomHelperText from '../../../components/common/form-helpers/customHelperText';
import PageTitle from '../../../components/common/pageTitle';
import AutocompleteWithChips from '../../../components/common/form-helpers/autocompleteWithChips';
import FieldArrayCard from '../../../components/common/form-helpers/fieldArrayCard';
import Bulletin from './bulletin';
import Location from './location';
import PercentBadge from './percentBadge';

// const useStyles = makeStyles(() => ({}));

function ControlWhoAreYouForm({
  addressFieldArray, 
  bulletinFieldArray, 
  control, 
  isProfile,
  onSubmit=()=>null,
  register, 
  setValue, 
  skills, 
  watch,
}) {

  const badge = <PercentBadge hidden={!isProfile}>10</PercentBadge>;

  return (
    <div>
      <Typography variant="body2">
    Please give description of how you see your agency and how other should talk about your agency while you are not in the same room.
      </Typography>
      <Controller
        as={InputField}
        control={control}
        name="bio"
        label="BIO"
        placeholder="Start typing here..."
        multiline
        rows="19"
        inputProps={{ maxLength: 1000 }}
        helperText={<CustomHelperText text={`${watch('bio').length} / 1000`} />}
      />
      <Box mb={3} display={isProfile?'block':'none'}>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
      <hr/>
      <Box mt={3}>
        <Box mb="12px">
          <PageTitle
            title="Company/Agency Tech Stack?"
            badge={badge}
          />
        </Box>
        <Typography variant="body2">
          Please give desription of what you agency do. What kind of skills and solution can offer.
        </Typography>
        <Controller
          as={InputField}
          control={control}
          name="description"
          label="DESCRIPTION"
          placeholder="Start typing here..."
          multiline
          rows="4"
        />
        <AutocompleteWithChips
          register={register}
          name="skills"
          value={skills}
          setValue={setValue}
          watch={watch}
          label="SKILLS"
          placeholder="+ Add New Skill"
        />
        <Box mb={3} display={isProfile?'block':'none'}>
          <Button onClick={onSubmit}>Submit</Button>
        </Box>
      </Box>
      <hr/>
      <Box mt={3}>
        <Bulletin
          title='Company Benefits?'
          badge={badge}
          description='By adding Company Benefits you are differentiating yourself from your competition and providing higher variety of applicants.'
        />
        <Box mb={3} display={isProfile?'block':'none'}>
          <Button onClick={onSubmit}>Submit</Button>
        </Box>
      </Box>
      <hr/>
      <Box mt={3}>
        <Location 
          title='Office Location?' 
          badge={badge}
          label='ADDRESS'
          description='Please enter your office location. With this information we use to match you for better applicants.'
        />
        <Box mb={3} display={isProfile?'block':'none'}>
          <Button onClick={onSubmit}>Submit</Button>
        </Box>
      </Box>
      <hr/>
    </div>
  )
}

const { object, array, func } = PropTypes;

ControlWhoAreYouForm.defaultProps = {
  skills: []
};

ControlWhoAreYouForm.propTypes = {
  control: object.isRequired,
  register: func.isRequired,
  bulletinFieldArray: object.isRequired,
  addressFieldArray: object.isRequired,
  skills: array,
  setValue: func.isRequired,
  watch: func.isRequired
};

export default ControlWhoAreYouForm;
