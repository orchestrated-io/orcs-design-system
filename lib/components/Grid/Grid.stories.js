import React from "react";
import Grid, { GridItem } from "../Grid";
import Button from "../Button";
import mdx from "./Grid.mdx";

export default {
  title: "Components/Grid",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Grid
};

export const basicGrid = () => (
  <Grid>
    <GridItem>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem>3</GridItem>
    <GridItem>4</GridItem>
    <GridItem>5</GridItem>
    <GridItem>6</GridItem>
  </Grid>
);
basicGrid.storyName = "Default Grid";

export const backgroundColourGrid = () => (
  <Grid>
    <GridItem bg="grey">1</GridItem>
    <GridItem bg="primary" color="white">
      2
    </GridItem>
    <GridItem bg="greyLight">3</GridItem>
    <GridItem bg="greyDark">4</GridItem>
    <GridItem bg="success">5</GridItem>
    <GridItem bg="warning">6</GridItem>
  </Grid>
);
backgroundColourGrid.storyName = "With background colours";

export const templateColumnsAndRows = () => (
  <Grid
    gridTemplateColumns="repeat(3, 1fr)"
    gridTemplateRows="repeat(2, 1fr)"
    bg="greyLightest"
  >
    <GridItem>
      This Grid uses repeat and fr to specify the grid structure.
    </GridItem>
    <GridItem>Fusce sit amet lorem lectus.</GridItem>
    <GridItem>Nullam lobortis porta iaculis. </GridItem>
    <GridItem>Pellentesque fermentum elementum elit non blandit.</GridItem>
    <GridItem>Etiam rhoncus ultricies lorem nec imperdiet.</GridItem>
    <GridItem>Pellentesque. </GridItem>
  </Grid>
);
templateColumnsAndRows.storyName = "Template columns and rows";

export const widthColumnsAndRows = () => (
  <Grid
    gridTemplateColumns="25% 200px auto"
    gridTemplateRows="25% 100px auto"
    bg="greyLighter"
  >
    <GridItem>
      This Grid uses widths and percentages to specify the grid structure.
    </GridItem>
    <GridItem>Fusce sit amet lorem lectus.</GridItem>
    <GridItem>Nullam lobortis porta iaculis. </GridItem>
    <GridItem>Pellentesque fermentum elementum elit non blandit.</GridItem>
    <GridItem>Etiam rhoncus ultricies lorem nec imperdiet.</GridItem>
    <GridItem>Pellentesque. </GridItem>
    <GridItem>
      Each GridItem goes down the columns first and then goes through the rows.
    </GridItem>
    <GridItem>
      To change this, change the value of the gridAutoFlow property. The default
      value is columns.
    </GridItem>
  </Grid>
);
widthColumnsAndRows.storyName = "Width-based columns and rows";

export const withGridItem = () => (
  <Grid bg="greyLightest">
    <GridItem>
      <Button>Default Button</Button>
    </GridItem>
    <GridItem>
      <Button colour="successDark">Success</Button>
    </GridItem>
    <GridItem>
      <Button fullWidth>Full width button</Button>
    </GridItem>
    <GridItem>
      <p>Text-only item</p>
    </GridItem>
  </Grid>
);
withGridItem.storyName = "With GridItem";

export const textWithGridItem = () => (
  <Grid bg="greyLighter">
    <GridItem>3</GridItem>
    <GridItem>1</GridItem>
    <GridItem>4</GridItem>
    <GridItem>1</GridItem>
    <GridItem>5</GridItem>
    <GridItem>9</GridItem>
  </Grid>
);
textWithGridItem.storyName = "Text with GridItem";

export const withoutGridItem = () => (
  <Grid bg="greyLightest">
    <Button>Default Button</Button>
    <Button colour="successDark">Success</Button>
    <Button fullWidth>Full width button</Button>
    <p>Text-only item</p>
  </Grid>
);
withoutGridItem.storyName = "Without GridItem";
