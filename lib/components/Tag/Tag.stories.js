import React, { useState } from "react";
import Tag from ".";
import Flex from "../Flex";

export default {
  title: "Components/Tag",
  component: Tag,
  decorators: [
    (storyFn) => (
      <Flex flexWrap="wrap" gap="xs">
        {storyFn()}
      </Flex>
    )
  ]
};

export const defaultTag = () => <Tag>Default Tag</Tag>;
defaultTag.storyName = "Default";

export const Selected = () => {
  const [selectedA, setSelectedA] = useState(true);
  const [selectedB, setSelectedB] = useState(true);

  return (
    <>
      <Tag selected={selectedA} onClick={() => setSelectedA(!selectedA)}>
        devops
      </Tag>
      <Tag selected={selectedB} onClick={() => setSelectedB(!selectedB)}>
        software engineering
      </Tag>
      <Tag>product design</Tag>
      <Tag>digital transformation</Tag>
    </>
  );
};

export const showInfo = () => (
  <>
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
  </>
);

export const showEdit = () => (
  <>
    <Tag selected showEdit>
      devops
    </Tag>
    <Tag selected showEdit>
      software engineering
    </Tag>
    <Tag showEdit>product design</Tag>
    <Tag showEdit>digital transformation</Tag>
  </>
);

export const showRemove = () => (
  <>
    <Tag selected showRemove>
      devops
    </Tag>
    <Tag selected showRemove>
      software engineering
    </Tag>
    <Tag showRemove>product design</Tag>
    <Tag showRemove>digital transformation</Tag>
  </>
);

export const showEditAndRemove = () => (
  <>
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
  </>
);

export const disabled = () => (
  <>
    <Tag disabled>devops</Tag>
    <Tag disabled>software engineering</Tag>
    <Tag disabled isPending>
      digital transformation
    </Tag>
    <Tag disabled isPending tagType="skill">
      product design
    </Tag>
  </>
);

export const strikethrough = () => (
  <>
    <Tag showStrikeThrough>devops</Tag>
    <Tag showStrikeThrough>software engineering</Tag>
    <Tag showStrikeThrough tagType="skill">
      product design
    </Tag>
    <Tag showStrikeThrough disabled tagType="skill">
      digital transformation
    </Tag>
  </>
);

export const withTagType = () => (
  <>
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
  </>
);

export const smallVariant = () => (
  <>
    <Tag selected tagType="specialist" small>
      Agile Coach
    </Tag>
    <Tag selected showRemove showEdit tagType="Project" small>
      Infracore 2.0
    </Tag>
  </>
);

export const highlightedVariant = () => (
  <>
    <Tag selected highlighted showEdit showRemove tagType="specialist">
      Agile Coach
    </Tag>
    <Tag highlighted showEdit showRemove tagType="specialist">
      Agile Coach
    </Tag>
  </>
);

export const personTag = () => (
  <>
    <Tag
      disabled
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
  </>
);
export const personTagSmall = () => (
  <>
    <Tag
      small
      disabled
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=maxi"
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
  </>
);
