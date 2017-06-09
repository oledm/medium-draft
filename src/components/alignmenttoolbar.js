import PropTypes from 'prop-types';
import React from 'react';

import StyleButton from './stylebutton';


const AlignmentToolbar = (props) => {
  if (props.buttons.length < 1) {
    return null;
  }
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="md-RichEditor-controls md-RichEditor-controls-inline">
      {props.buttons.map(type => {
        const { label, icon } = type;
        const iconData = { label, icon };
        return (
          <StyleButton
            {...iconData}
            key={type.style}
            active={currentStyle.has(type.style)}
            onToggle={props.onToggle}
            style={type.style}
            description={type.description}
          />
        );
      })}
    </div>
  );
};

AlignmentToolbar.propTypes = {
  buttons: PropTypes.array,
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
};

export default AlignmentToolbar;

