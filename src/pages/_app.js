// import global css from '../styles/';
import 'material-icons/iconfont/material-icons.css'; // material-icons

// GLOBAL SCSS
import '../styles/global.scss'; // global

// HOME SCSS
import '../styles/pages/home/home.scss'; // home
import '../styles/pages/home/slides/overview.scss'; // overview
import '../styles/pages/home/slides/vision-mision.scss'; // vision & mision
import '../styles/pages/home/slides/team.scss'; // team
import '../styles/pages/home/slides/milestones.scss'; // milestones
import '../styles/pages/home/slides/products.scss'; // products
import '../styles/pages/home/slides/touch-with-us.scss'; // touch-with-us

// COMPONENT SCSS

function G_INTENTION({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default G_INTENTION
