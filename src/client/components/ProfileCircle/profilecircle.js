// ProfileCircle.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledProfile } from './profilecircle.styled';
const ProfileCircle = ({ open, setOpen, src }) => {
    return (
        <StyledProfile open={open} onClick={() => setOpen(!open)}>
            <img src={src}/>
        </StyledProfile>
    )
}
ProfileCircle.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default ProfileCircle;