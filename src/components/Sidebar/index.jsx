import React, { useState } from 'react';
import { Collapsible, VerticalNav } from '@innovaccer/design-system';
import { useNavigate } from 'react-router-dom';
import '@innovaccer/design-system/css';
import './Sidebar.css';

const Sidebar = () => {
  const data = [
    {
      name: '/',
      label: 'Home',
      icon: 'home',
    },
    {
      name: '/patientform',
      label: 'Patient Form',
      icon: 'assignment_ind',
    },
    {
      name: '/patientInfo',
      label: 'Patient Info',
      icon: 'info',
    },
    {
      name: '/medication',
      label: 'Medical Summary',
      icon: 'account_circle',
    },
    {
      name: '/problemList',
      label: 'Problem List',
      icon: 'list',
    },
    {
      name: '/diagnostic',
      label: 'Diagnostic Results',
      icon: 'summarize',
    },
    {
      name: '/planofcare',
      label: 'Plan of Care',
      icon: 'self_improvement',
    },
    {
      name: '/pastHistory',
      label: 'Past History of illness',
      icon: 'timeline',
    },
    {
      name: '/eprescription',
      label: 'ePrescription',
      icon: 'speaker_notes',
    },
    {
      name: '/documentation',
      label: 'Documentation',
      icon: 'assignment',
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState({
    name: '/',
  });
  const navigate = useNavigate();

  const onClickHandler = (menu) => {
    setActive(menu);
    navigate(menu.name);
  };

  return (
    <div className='stick-left'>
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={onClickHandler}
        />
      </Collapsible>
    </div>
  );
};
export default Sidebar;
