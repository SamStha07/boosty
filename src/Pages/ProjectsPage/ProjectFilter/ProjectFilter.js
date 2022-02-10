import React from 'react';
import ProjectSelect from '../../../Components/Project/ProjectSelect';
import { Wrapper, Content } from './ProjectFilterStyled';

import { typesData, industryData, technologyData } from './Data';
import { ProjectConsumer } from '../../../context/provider';

const ProjectFilter = () => {
  return (
    <ProjectConsumer>
      {(value) => {
        const {
          type,
          industry,
          technology,
          updateType,
          updateIndustry,
          updateTechnology,
        } = value;

        return (
          <Wrapper>
            <Content>
              <p>Type</p>
              <ProjectSelect
                selectOptions={typesData}
                setValue={updateType}
                value={type}
              />
            </Content>
            <Content>
              <p>Industry</p>
              <ProjectSelect
                selectOptions={industryData}
                value={industry}
                setValue={updateIndustry}
              />
            </Content>
            <Content>
              <p>Technology</p>
              <ProjectSelect
                selectOptions={technologyData}
                value={technology}
                setValue={updateTechnology}
              />
            </Content>
          </Wrapper>
        );
      }}
    </ProjectConsumer>
  );
};

export default ProjectFilter;

// const [type, setType] = useState({
//   value: typesData[0]?.value || '',
//   label: typesData[0]?.label || '',
// });
// const [industry, setIndustry] = useState({
//   value: industryData[0]?.value || '',
//   label: industryData[0]?.label || '',
// });
// const [technology, setTechnology] = useState({
//   value: technologyData[0]?.value || '',
//   label: technologyData[0]?.label || '',
// });
