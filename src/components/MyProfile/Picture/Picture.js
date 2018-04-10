import React, {Component} from 'react';
import profile_image from '../../../images/profile_image.png'
import {Image} from "react-bootstrap";
import styled from "styled-components";

class Picture extends Component {

    render() {
        return (
            <ImageContainer>
                <Image id="profile-pic" src={profile_image} alt="pic" thumbnail />
            </ImageContainer>
        )
    }
}

const ImageContainer = styled.div`
        position: relative;
        margin: 2% 0;
		top: 50%;
		transform: translateY(-50%);
        text-align: center;
    `

export default Picture
