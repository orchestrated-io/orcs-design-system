import React from "react";
import Expandable from ".";
import Typography from "../Typography";

export default {
  title: "Components/Expandable",
  includeStories: []
};

export const basic = () => (
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

export const open = () => (
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

export const withSubtitle = () => (
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

export const withBadge = () => (
  <Expandable title="Complex example" badge="status" badgeColour="primaryDark">
    <Typography.P>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
    </Typography.P>
  </Expandable>
);
