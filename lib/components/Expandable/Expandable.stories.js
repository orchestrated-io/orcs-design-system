import React from "react";
import Expandable from ".";
import Typography from "../Typography";
import Box from "../Box";
import mdx from "./Expandable.mdx";

export default {
  title: "Components/Expandable",
  parameters: {
    docs: { page: mdx }
  },
  decorators: [(storyFn) => <Box height="300px">{storyFn()}</Box>],
  component: Expandable
};

export const defaultExpandable = () => (
  <Expandable title="Details">
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
    </Typography.P>
  </Expandable>
);

export const openExpandable = () => (
  <Expandable isOpen title="Details">
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
    </Typography.P>
  </Expandable>
);

export const expandableWithSubtitle = () => (
  <Expandable title="Complex example" subtitle="Subtitle">
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
    </Typography.P>
  </Expandable>
);

export const expandableWithBadge = () => (
  <Expandable title="Complex example" badge="status" badgeColour="success">
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
    </Typography.P>
  </Expandable>
);

export const expandableSmall = () => (
  <>
    <Expandable small title="Small example">
      <Typography.P>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem.
      </Typography.P>
    </Expandable>
    <Expandable
      small
      title="Small complex example"
      subtitle="Subtitle"
      badge="status"
      badgeColour="success"
    >
      <Typography.P>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem.
      </Typography.P>
    </Expandable>
  </>
);
