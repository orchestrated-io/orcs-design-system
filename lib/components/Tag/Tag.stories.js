import React, { useState } from "react";
import Tag from ".";
import Flex from "../Flex";
import Spacer from "../Spacer";

export default {
  title: "Components/Tag",
  component: Tag,
  decorators: [(storyFn) => <Flex flexWrap="wrap">{storyFn()}</Flex>]
};

export const defaultTag = () => <Tag>Default Tag</Tag>;
defaultTag.storyName = "Default";

export const Selected = () => {
  const [selectedA, setSelectedA] = useState(true);
  const [selectedB, setSelectedB] = useState(true);

  return (
    <Spacer m="2px">
      <Tag selected={selectedA} onClick={() => setSelectedA(!selectedA)}>
        devops
      </Tag>
      <Tag selected={selectedB} onClick={() => setSelectedB(!selectedB)}>
        software engineering
      </Tag>
      <Tag>product design</Tag>
      <Tag>digital transformation</Tag>
    </Spacer>
  );
};

export const showInfo = () => (
  <Spacer m="2px">
    <Tag selected showInfo tagType="Skill">
      devops
    </Tag>
    <Tag selected showInfo tagType="Skill">
      software engineering
    </Tag>
    <Tag showInfo tagType="Skill">
      product design
    </Tag>
    <Tag showInfo tagType="Skill">
      digital transformation
    </Tag>
  </Spacer>
);

export const showEdit = () => (
  <Spacer m="2px">
    <Tag selected showEdit>
      devops
    </Tag>
    <Tag selected showEdit>
      software engineering
    </Tag>
    <Tag showEdit>product design</Tag>
    <Tag showEdit>digital transformation</Tag>
  </Spacer>
);

export const showRemove = () => (
  <Spacer m="2px">
    <Tag selected showRemove>
      devops
    </Tag>
    <Tag selected showRemove>
      software engineering
    </Tag>
    <Tag showRemove>product design</Tag>
    <Tag showRemove>digital transformation</Tag>
  </Spacer>
);

export const showEditAndRemove = () => (
  <Spacer m="2px">
    <Tag
      selected
      showEdit
      showRemove
      onSelect={() => console.log("select")}
      onEdit={() => console.log("edit")}
      onRemove={() => console.log("remove")}
    >
      devops
    </Tag>
    <Tag selected showEdit showRemove>
      software engineering
    </Tag>
    <Tag
      showEdit
      showRemove
      onSelect={() => console.log("select")}
      onEdit={() => console.log("edit")}
      onRemove={() => console.log("remove")}
    >
      product design
    </Tag>
    <Tag showEdit showRemove>
      digital transformation
    </Tag>
  </Spacer>
);

export const disabled = () => (
  <Spacer m="2px">
    <Tag disabled>devops</Tag>
    <Tag disabled>software engineering</Tag>
    <Tag disabled isPending>
      digital transformation
    </Tag>
    <Tag disabled isPending tagType="skill">
      product design
    </Tag>
  </Spacer>
);

export const strikethrough = () => (
  <Spacer m="2px">
    <Tag showStrikeThrough>devops</Tag>
    <Tag showStrikeThrough>software engineering</Tag>
    <Tag showStrikeThrough tagType="skill">
      product design
    </Tag>
    <Tag showStrikeThrough disabled tagType="skill">
      digital transformation
    </Tag>
  </Spacer>
);

export const withTagType = () => (
  <Spacer m="2px">
    <Tag tagType="skill">devops</Tag>
    <Tag tagType="skill" showRemove>
      devops
    </Tag>
    <Tag tagType="skill" showEdit>
      devops
    </Tag>
    <Tag tagType="skill" showRemove showEdit>
      devops
    </Tag>
    <Tag selected tagType="skill">
      javascript
    </Tag>
    <Tag selected showRemove tagType="skill">
      javascript
    </Tag>
    <Tag selected showEdit tagType="skill">
      javascript
    </Tag>
    <Tag selected showRemove showEdit tagType="skill">
      javascript
    </Tag>
    <Tag disabled tagType="skill">
      product design
    </Tag>
  </Spacer>
);

export const smallVariant = () => (
  <Tag selected tagType="specialist" small>
    Agile Coach
  </Tag>
);

export const highlightedVariant = () => (
  <Spacer m="2px">
    <Tag selected highlighted tagType="specialist">
      Agile Coach
    </Tag>
  </Spacer>
);

export const personTag = () => (
  <Spacer m="2px">
    <Tag
      disabled
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      disabled
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag disabled personEntity>
      Maximillian Dubois
    </Tag>
    <Tag
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag personEntity>Maximillian Dubois</Tag>
    <Tag
      selected
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      selected
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag selected personEntity>
      Maximillian Dubois
    </Tag>
    <Tag
      selected
      highlighted
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      selected
      highlighted
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag selected highlighted personEntity>
      Maximillian Dubois
    </Tag>
  </Spacer>
);
export const personTagSmall = () => (
  <Spacer m="2px">
    <Tag
      small
      disabled
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      small
      disabled
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag small disabled personEntity>
      Maximillian Dubois
    </Tag>
    <Tag
      small
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      small
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag small personEntity>
      Maximillian Dubois
    </Tag>
    <Tag
      small
      selected
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      small
      selected
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag small selected personEntity>
      Maximillian Dubois
    </Tag>
    <Tag
      small
      selected
      highlighted
      personEntity={{
        avatarSrc:
          "https://uploads-ssl.webflow.com/5f4852427e784b4cada3e0d0/65389e85af9ec00f6c03f592_kai.png"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag
      small
      selected
      highlighted
      personEntity={{
        initials: "MD"
      }}
    >
      Maximillian Dubois
    </Tag>
    <Tag small selected highlighted personEntity>
      Maximillian Dubois
    </Tag>
  </Spacer>
);
