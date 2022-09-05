import { MDBFooter } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Copyright Hacktiv8 2018
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;