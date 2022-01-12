import React from 'react';
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
      icon: 'local_hospital',
    },
    {
      name: '/diagnostic',
      label: 'Diagnostic Results',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Plan of Care',
      icon: 'directions_walk',
    },
    {
      name: '/pastHistory',
      label: 'Past History of illness',
      icon: 'receipt',
    },
    {
      name: 'documents',
      label: 'ePrescription',
      icon: 'assignment',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medical_records.allergies',
  });
  const navigate = useNavigate();

  const onClickHandler = (menu) => {
    setActive(menu);
    navigate(menu.name);
  };

  return (
    <div
      style={{ background: 'var(--secondary-lightest)' }}
      className='stick-left'>
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
