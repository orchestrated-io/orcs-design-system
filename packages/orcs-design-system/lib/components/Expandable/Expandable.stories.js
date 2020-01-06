import React from "react";
import Expandable from ".";

export default {
  title: "Expandable",
  parameters: {
    component: Expandable
  }
};

export const basicExpandable = () => (
  <Expandable title="Details">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem.
  </Expandable>
);
basicExpandable.story = {
  name: "Basic"
};

export const openExpandable = () => (
  <Expandable isOpen title="Details">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem.
  </Expandable>
);
openExpandable.story = {
  name: "Open"
};

export const withSubtitle = () => (
  <Expandable title="Complex example" subtitle="Subtitle">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem.
  </Expandable>
);
withSubtitle.story = {
  name: "With Subtitle"
};

export const withBadge = () => (
  <Expandable title="Complex example" badge="status" badgeColour="primaryDark">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem.
  </Expandable>
);
withBadge.story = {
  name: "With Badge"
};
