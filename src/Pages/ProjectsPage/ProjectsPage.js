import React, { useEffect, useState } from 'react';
import HeaderOpenSection from '../../Components/HeaderOpenSection/HeaderOpenSection';
import LetsTalk from '../../Components/LetsTalk/LetsTalk';
import Navbar from '../../Components/Navbar/Navbar';
import { Container } from '../../styles/globalStyles';
import ProjectFilter from './ProjectFilter/ProjectFilter';
import ProjectsList from './ProjectsList/ProjectsList';
import { Wrapper, Title, Flex } from './ProjectsPageStyled';

const ProjectsPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const closeBtnHandler = (data) => setOpen(data);

  return (
    <>
      {open ? (
        <HeaderOpenSection open={open} closeBtnHandler={closeBtnHandler} />
      ) : (
        <Wrapper>
          <Container>
            <Navbar open={open} handleOpen={handleOpen} />
            <Flex>
              <Title>We take digital experiences to the next level </Title>

              <ProjectFilter />

              <ProjectsList />
            </Flex>
          </Container>

          <LetsTalk />
        </Wrapper>
      )}
    </>
  );
};

export default ProjectsPage;
