import {
  ButtonProps,
  Button as MuiButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";

export function Button(props: ButtonProps) {
  const {
    breakpoints: { up },
  } = useTheme();

  const isLg = useMediaQuery(up("lg"));
  const isMd = useMediaQuery(up("md"));
  const isSm = useMediaQuery(up("sm"));

  const getSize = useMemo((): "large" | "medium" | "small" => {
    switch (true) {
      case isLg:
        return "large";
      case isMd:
        return "medium";
      case isSm:
        return "small";
      default:
        return "small";
    }
  }, [isLg, isMd, isSm]);

  return (
    <MuiButton {...props} size={getSize}>
      {props.children}
    </MuiButton>
  );
}
