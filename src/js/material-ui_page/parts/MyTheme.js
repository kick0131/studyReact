import { createMuiTheme } from '@material-ui/core/styles';
import { lime,indigo } from "@material-ui/core/colors";

// Material UIのテーマ上書き
export const mytheme = createMuiTheme({
    // カラーパレット追加
    // https://material-ui.com/customization/color/
    palette: {
        // type: 'light',
        primary: {
            main: lime["A200"],
        },
        secondary: {
            main: indigo["300"],
        },
    },
    props: {
        MuiCheckbox: {
            color: "primary"
        },
        MuiRadio: {
            color: "primary"
        },
        MuiSwitch: {
            color: "primary"
        },
    }
});

export default mytheme

