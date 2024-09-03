import React from "react";
import { TreeNav } from "orcs-design-system";

export default {
  title: "TreeNav",
  component: TreeNav
};

const data = [
  {
    id: "1",
    name: "Domains",
    badgeText: "Domains",
    badgeColour: "success",
    children: [
      {
        id: "1a",
        name: "Business",
        badgeText: "Domain",
        badgeColour: "success",
        checkbox: true,
        children: [
          {
            id: "1a1",
            name: "Capture & Release",
            badgeText: "Team",
            badgeColour: "success",
            checkbox: true
          },
          {
            id: "1a2",
            name: "Goonsquad",
            badgeText: "Team",
            badgeColour: "success",
            checkbox: true
          },
          {
            id: "1a3",
            name: "Wolfpack",
            badgeText: "Team",
            badgeColour: "success",
            checkbox: true
          }
        ]
      },
      {
        id: "1b",
        name: "Hardware Product",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1b1",
            name: "Blackhole",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1b2",
            name: "Marvel",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1b3",
            name: "Stargazers",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1c",
        name: "Innovation",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1c1",
            name: "AI Master Race",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1c2",
            name: "Constellation",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1c3",
            name: "Dark Matter",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1c4",
            name: "Future Space",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1c5",
            name: "Innovation Lab",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1d",
        name: "Marketing",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1d1",
            name: "Community",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1d2",
            name: "Product",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1e",
        name: "Operations",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1e1",
            name: "Backbone",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1e2",
            name: "Blackops",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1f",
        name: "Platform",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1f1",
            name: "Event Horizon",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1f2",
            name: "Transformers",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1f3",
            name: "Zeta Squad",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1g",
        name: "Research & Analysis",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1g1",
            name: "Alpha Relay",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1g2",
            name: "Gizmosphere",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1h",
        name: "Software Product",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1h1",
            name: "Alphazone",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h2",
            name: "Asterism",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h3",
            name: "Beta Testers",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h4",
            name: "BobRossers",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h5",
            name: "Flashdance",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h3",
            name: "Matrix",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h4",
            name: "Matter",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1h5",
            name: "The Incredibles",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      },
      {
        id: "1i",
        name: "Support",
        badgeText: "Domain",
        badgeColour: "success",
        children: [
          {
            id: "1i1",
            name: "Customer Support",
            badgeText: "Team",
            badgeColour: "success"
          },
          {
            id: "1i2",
            name: "Tech Support",
            badgeText: "Team",
            badgeColour: "success"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Capabilities",
    badgeText: "Capabilities",
    badgeColour: "secondary",
    children: [
      {
        id: "2a",
        name: "Analysts",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2b",
        name: "Astrophysics & Aerospace Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2c",
        name: "Consulting",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2d",
        name: "Customer Success",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2e",
        name: "Data Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2f",
        name: "Design",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2g",
        name: "DevOps",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2h",
        name: "Finance",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2i",
        name: "Hardware Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2j",
        name: "Leadership",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2k",
        name: "Management",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2l",
        name: "Marketing",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2m",
        name: "Operations",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2n",
        name: "People & Culture",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2o",
        name: "Product Management",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2p",
        name: "Quality Assurance & Testing",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2q",
        name: "Recruitment",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2r",
        name: "Research",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2s",
        name: "Sales",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2t",
        name: "Security Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2u",
        name: "Software Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2v",
        name: "Support",
        badgeText: "Capability",
        badgeColour: "secondary"
      },
      {
        id: "2w",
        name: "Systems Engineering",
        badgeText: "Capability",
        badgeColour: "secondary"
      }
    ]
  },
  {
    id: "3",
    name: "Omega Systems",
    badgeText: "Contractor",
    badgeColour: "primary"
  }
];

export const Basic = {
  render: () => <TreeNav data={data} openByDefault={true} width={400} />
};
