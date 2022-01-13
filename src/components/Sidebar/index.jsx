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
      name: 'documents',
      label: 'ePrescription',
      icon: 'speaker_notes',
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState({
    name: 'medical_records.allergies',
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

  // return (
  // <aside ide class='navbar bg-light'>
  //   <div class='container-fluid'>
  //     <ul class='navbar-nav'>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/medication'>
  //           Medical Summary
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/documentation'>
  //           Medical Summary
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/patient-list'>
  //           Medical Summary
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/register'>
  //           Problem List
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/register'>
  //           Diagnostic Results
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/register'>
  //           Past History of Illness
  //         </Link>
  //       </li>
  //       <li class='nav-item'>
  //         <Link class='nav-link' to='/register'>
  //           Plan of Care
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // </aside>

  // );
};
export default Sidebar;
