import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from "styled-components/macro";
import { breakpoints } from "../../Media";

const ProjectThumb = styled.div`
  width: 60%;
  height: auto;
  padding: 0;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d3d3d3;
  transition: box-shadow 0.2s;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    margin: 0 20px 20px 40px;
    width: 70%;
    height: auto;
  }

  ::after {
    content: "+";

    opacity: 0;
    transform: translateY(20px);
    transition: 0.2s;
    font-size: 20px;
    content: "+";
    padding: 20px 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: white;
  }

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    ::after {
      transform: translateY(0);
      opacity: 1;
    }
  }
  :nth-child(1) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(100px);
    }
  }

  :nth-child(2) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(35px);
    }
  }

  :nth-child(3) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(-35px);
    }
  }
`;

export default function Project({ project }) {
  const { slug, images, name } = project;

  return <ProjectThumb>
    <Link to={`/project/${slug}`}>
      <img src={images[0]} alt={name} />
    </Link>
  </ProjectThumb>
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })
}