import styled from 'styled-components';
import MainLayout from '../src/components/layouts/MainLayout';

const Nav = styled.nav`
  background-color: #000;
  height: 80px;
  color: #fff;
  font-size: 24px;
`

const index = () => {
  return (
    <MainLayout title='Home'>
      <h1>Home Page</h1>
    </MainLayout>
  )
}

export default index
