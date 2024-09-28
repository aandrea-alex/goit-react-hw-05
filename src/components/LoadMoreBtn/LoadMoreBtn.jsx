import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { MOREBTN_CAPTION } from '../../notifications/constants';

const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <React.Fragment>
      {isVisible && (
        <CustomButton onClick={onClick}>{MOREBTN_CAPTION}</CustomButton>
      )}
    </React.Fragment>
  );
};

export default LoadMoreBtn;
