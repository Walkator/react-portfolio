import React from 'react';
import styled from 'styled-components';
import iconMobile from '../../images/Mobile.svg';
import iconDatabase from '../../images/Database.svg';
import iconTerminal from '../../images/Terminal.svg';

const Container = styled.div`
    position: absolute;
    width: 447px;
    height: 452px;
    left: 273px;
    top: 1313px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;


const Image = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 150px;
    top: 0px;
`;

const Title = styled.h1`
    position: absolute;
    width: 171px;
    height: 21px;
    left: 137px;
    top: 130px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;

    color: #222831;
`;


const Description = styled.h1`
    position: absolute;
    width: 374px;
    height: 54px;
    left: 35px;
    top: 180px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #000000;
`;

const TextPre = styled.h1`
    position: absolute;
    width: 271px;
    height: 57px;
    left: 85px;
    top: 270px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #00ADB5;
`;

const Languages = styled.h1`
    position: absolute;
    width: 337px;
    height: 75px;
    left: 50px;
    top: 300px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #000000;
`;


class Drawer extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <Image src={iconTerminal} />
                    <Title>Backed Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Languages>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Languages>
                </Container>
                <Container style={{'left' : 736}}>
                    <Image src={iconDatabase} />
                    <Title>Database Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Languages>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Languages>
                </Container>
                <Container style={{'left' : 1199}}>
                    <Image src={iconMobile} />
                    <Title>Mobile Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Languages>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Languages>
                </Container>
            </>
        );
    }
}


export default Drawer;