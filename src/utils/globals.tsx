import { Chip } from "@mui/material";

export const chips = (chips: string[]) => {
  return chips.map((chip: string) => (
    <Chip
      color="primary"
      variant="outlined"
      className="max-w-full truncate"
      size="small"
      label={chip}
    ></Chip>
  ));
};
