import './Footer.css'

const Footer = () => {
  return(
    <footer className='footer'>
      <ul>
        <li>
          <a href="https://linkedin.com/in/viniciussis" rel="noreferrer" target='_blank'>
            <img src="../images/linkedin.png" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/_viniciussis/" rel="noreferrer" target='_blank'>
            <img src="../images/ig.png" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/_viniciussis" rel="noreferrer" target='_blank'>
          <img src="../images/tw.png" alt="twitter" />
          </a>
        </li>
      </ul>
      <section>
        <img src='../images/logo.png' alt="organo" />
      </section>
      <section>
        <h5>Desenvolvido por Vinícius Silva Santos.</h5>
      </section>
    </footer>
  )
}

export default Footer
