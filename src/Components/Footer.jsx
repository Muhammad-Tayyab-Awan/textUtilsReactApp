function Footer(props) {
  let date = new Date();
  return (
    <footer
      className={`${props.modeTheme.mainColor} h-10 w-full flex justify-center items-center text-sm md:text-base font-bold`}
    >
      <p className="text-center px-2">
        Copyright&nbsp;&copy;&nbsp;{date.getFullYear()}
        &nbsp;|&nbsp;
        <a href="https://infowithawan.com">infowithawan.com</a>
        &nbsp;|&nbsp;All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
