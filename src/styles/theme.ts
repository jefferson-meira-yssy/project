import { createTheme} from "@mui/material/styles";
import shadows from '@mui/material/styles/shadows';
import palette from "./palette";
import sizes from "./sizes";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    third: true;
  }
}

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      h1: {
        fontSize: sizes.FontSizeLG,
        color: palette.NeutralDark,
      },
      h2: {
        fontSize: sizes.FontSizeSM,
        color: palette.NeutralDark,
        fontWeight: "bold",
      },
      body1: {
        fontSize: sizes.FontSizeSM,
        color: palette.NeutralDark,
      },
      body2: {
        fontSize: sizes.FontSizeXS,
        color: palette.NeutralDark,
      },

      button: {
        fontSize: sizes.FontSizeXS,
      },
    },
    palette: {
      primary: {
        light: palette.PrimaryLight,
        main: palette.PrimaryMedium,
        dark: palette.PrimaryDark,
      },
      secondary: {
        light: palette.SecondaryLight,
        main: palette.SecondaryMedium,
        dark: palette.SecondaryDark,
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "primary" },
            style: {
              textTransform: "none",
              background: palette.PrimaryMedium,
              minWidth: 200,
              fontSize: sizes.FontSizeSM,
              fontWeight: 700,
              lineHeight: "27px",
              borderRadius: 24,
              boxShadow:
                "0px 4px 4px rgba(251, 181, 122, 0.44), 0px 5px 4px rgba(255, 193, 140, 0.36), 0px 7px 15px 2px rgba(255, 175, 107, 0.58); border- radius: 24px;",
              color: palette.White,
              marginTop: "15px",
              marginBottom: "15px",
              "&:hover": {
                background: palette.PrimaryMedium,
                boxShadow:
                  "0px 22px 17px rgba(243, 129, 33, 0.14), 0px 4px 30px 3px rgba(243, 129, 33, 0.43)",
              },
              "&:active": {
                background: palette.PrimaryDark,
                boxShadow:
                  "0px 22px 17px rgba(243, 129, 33, 0.14), 0px 4px 30px 3px rgba(243, 129, 33, 0.43)",
              },
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              textTransform: "none",
              background: palette.White,
              border: "2px solid " + palette.SecondaryDark,
              boxSizing: "border-box",
              minWidth: 200,
              fontSize: sizes.FontSizeSM,
              fontWeight: 700,
              lineHeight: "27px",
              borderRadius: 24,
              color: palette.SecondaryDark,
              marginTop: "15px",
              marginBottom: "15px",
              "&:hover": {
                background: palette.SecondaryMedium,
                color: palette.White,
              },
              "&:active": {
                background: palette.SecondaryDark,
                color: palette.White,
              },
            },
          },
          {
            props: { variant: "third" },
            style: {
              textTransform: "none",
              background: palette.BackgroundDisabled,
              minWidth: 200,
              fontSize: sizes.FontSizeSM,
              fontWeight: 700,
              lineHeight: "27px",
              borderRadius: 24,
              color: palette.NeutralMedium,
              marginTop: "15px",
              marginBottom: "15px",
            },
          },
        ],
      },
    },
    shadows,
  });

export default theme;

