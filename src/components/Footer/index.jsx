import styledComponents from '../../styles'

const Footer = () => {
  return (
    <styledComponents.Footer className='footer'>
      <div className='content has-text-centered is-size-3'>
        <p>
          <span className="is-size-3">React Serverless Demo </span> 
          <a href="https://app.easybase.io/#/tables" target='blank'>Easybase React</a>
        </p>
      </div>
    </styledComponents.Footer>
  );
}

export default Footer;
