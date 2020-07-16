import React from 'react';
import { Menu, Button } from 'antd';
import { Link, Router } from 'react-router-dom';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  ContainerOutlined,
  CloseOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { observer } from 'mobx-react'
import {useStores} from '../stores';
import { useHistory } from "react-router-dom";




const Nav = styled.nav`
  position: relative;
`
const Close = styled(CloseOutlined)`
  position: absolute;
  right: 5px;
  top: 0;
  padding: 8px;
  color: #ddd;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    color:#fff;
  }
`

const { SubMenu } = Menu;

// class Component extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   state = {
//     collapsed: false,
//   };

//   toggleCollapsed = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <Nav style={{ width: 256 }}>
//         <Close onClick={() => {this.props.router.push(`/`)}}/>
//         <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//           {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
//         </Button>
//         <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode="inline"
//           theme="dark"
//           inlineCollapsed={this.state.collapsed}
//         >
//           <Menu.Item key="1" icon={<ContainerOutlined />}>
//           <Link to='/view/history'>博客列表</Link>
//           </Menu.Item>
//           <SubMenu key="sub1" icon={<AppstoreOutlined />} title="我的博客">
//             <Menu.Item key="2"> <Link to='/view/editor'>编辑</Link></Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<DesktopOutlined />} title="个人信息">
//             <Menu.Item key="4"><Link to='/view/information'>信息编辑</Link></Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Nav>
//     );
//   }
// }

const Component = observer(()=>{
  let collapsed = false;
  const history = useHistory();
  const { UserStore } = useStores();
  const toggleCollapsed = () => {
      collapsed = !collapsed
    };
  const handleClose =() => {
    history.push('/')
    UserStore.resetUser()
  }
    return (
    <Nav style={{ width: 256 }}>
      <Close onClick={handleClose}/>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<ContainerOutlined />}>
        <Link to='/view/history'>博客列表</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="我的博客">
          <Menu.Item key="2"> <Link to='/view/editor'>编辑</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<DesktopOutlined />} title="个人信息">
          <Menu.Item key="4"><Link to='/view/information'>信息编辑</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Nav>
  );
})

export default Component;