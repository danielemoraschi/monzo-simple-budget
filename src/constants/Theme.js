import { StyleSheet, PixelRatio } from 'react-native';
import { Platform } from 'react-native';
//import { COLOR } from 'react-native-material-ui';

// const PRIMARY_COLOR = "rgb(42,47,65)"; //"rgb(37,56,67)",//COLOR.green700;
// const SECONDARY_COLOR = "rgb(34,37,45)"; //"rgb(27,46,57)"//COLOR.green900;
// const LIGHT_COLOR = "rgb(102,107,125)";

// const PRIMARY_COLOR = COLOR.deepPurple800;
// const SECONDARY_COLOR = COLOR.deepPurple900;

const PRIMARY_COLOR = "rgb(62, 130, 247)";
const SECONDARY_COLOR = "rgb(47, 99, 217)";
const LIGHT_COLOR = "rgb(178, 205, 253)";

export default uiTheme = {
  palette: {
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    lightColor: LIGHT_COLOR,
  },
  toolbar: {
    container: {
      height: Platform.OS == 'ios' ? 90 : 70,
      paddingTop: Platform.OS == 'ios' ? 20 : 0
    },
  },
};