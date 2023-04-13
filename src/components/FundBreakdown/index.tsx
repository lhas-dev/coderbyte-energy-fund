import React, {useState} from 'react';
import * as Styled from './styles';
import AspiraDAC from '../../assets/icons/aspira-dac.svg';
import AspiraThumbnail from '../../assets/icons/aspira-thumbnail.svg';
import Climeworks from '../../assets/icons/climeworks.svg';

export const FundBreakdown = () => {
  const rows = [
    {
      id: 1,
      label: 'Highlighted',
    },
    {
      id: 2,
      label: 'Value',
    },
    {
      id: 3,
      label: 'Vintage',
    },
    {
      id: 4,
      label: 'Registry',
    },
  ];
  const [active, setActive] = useState(rows[0].id);
  const companies = [
    {
      id: 1,
      icon: <AspiraDAC />,
      thumbnail: <AspiraThumbnail />,
      description:
        'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    },
    {
      id: 2,
      icon: <Climeworks />,
      thumbnail: <AspiraThumbnail />,
      description:
        'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
    },
  ];

  return (
    <>
      <Styled.Wrapper>
        {rows.map(row => (
          <Styled.Row
            active={active === row.id}
            onPress={() => setActive(row.id)}
            key={row.id}>
            <Styled.Value active={active === row.id}>{row.label}</Styled.Value>
          </Styled.Row>
        ))}
      </Styled.Wrapper>
      <Styled.Companies horizontal>
        {companies.map(company => (
          <Styled.CompanyCard key={company.id}>
            {company.thumbnail}
            <Styled.CompanyCardIcon>{company.icon}</Styled.CompanyCardIcon>
            <Styled.CompanyCardDescription>
              {company.description}
            </Styled.CompanyCardDescription>
          </Styled.CompanyCard>
        ))}
      </Styled.Companies>
    </>
  );
};
