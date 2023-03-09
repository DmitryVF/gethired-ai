import React from 'react';
import PropTypes from 'prop-types';
import SupportMiniChatForm from './form/supportMiniChatForm';
import SupportCard from './supportCard';

function SupportChat({ messages, questionPlaceholder }) {
  return (
    <div>
      <SupportMiniChatForm messages={messages} questionPlaceholder={questionPlaceholder} />
      <SupportCard />
    </div>
  )
}

SupportChat.defaultProps = {
  messages: [],
  questionPlaceholder: ''
};

const { arrayOf, shape, string } = PropTypes;

SupportChat.propTypes = {
  messages: arrayOf(shape({
    id: string,
    avatar: string,
    message: string
  })),
  questionPlaceholder: string
};

export default SupportChat
