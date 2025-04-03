import React, { useState } from "react";
import Tag from ".";
import Flex from "../Flex";

export default {
  title: "Components/Tag",
  component: Tag,
  decorators: [
    (storyFn, { parameters }) => {
      // Skip decorator if excludeDecorator parameter is true
      if (parameters?.excludeDecorator) {
        return storyFn();
      }
      return (
        <Flex flexWrap="wrap" gap="xs">
          {storyFn()}
        </Flex>
      );
    }
  ]
};

export const defaultTag = () => <Tag>Default Tag</Tag>;
defaultTag.storyName = "Default";

export const Selected = () => {
  const [selectedA, setSelectedA] = useState(true);
  const [selectedB, setSelectedB] = useState(true);
  const [selectedC, setSelectedC] = useState(true);
  const [selectedD, setSelectedD] = useState(true);

  return (
    <>
      <Tag selected={selectedA} onClick={() => setSelectedA(!selectedA)}>
        devops
      </Tag>
      <Tag selected={selectedB} onClick={() => setSelectedB(!selectedB)}>
        software engineering
      </Tag>
      <Tag selected={selectedC} onClick={() => setSelectedC(!selectedC)}>
        product design
      </Tag>
      <Tag selected={selectedD} onClick={() => setSelectedD(!selectedD)}>
        digital transformation
      </Tag>
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

export const AllCombinations = () => (
  <Flex flexWrap="wrap" gap="xs" width="250px" border="1px solid red">
    {/* Default */}
    <Tag>Digital Transformation Strategy</Tag>
    <Tag small>Digital Transformation Strategy</Tag>

    {/* Selected */}
    <Tag selected>Digital Transformation Strategy</Tag>
    <Tag small selected>
      Digital Transformation Strategy
    </Tag>

    {/* Highlighted */}
    <Tag highlighted>Digital Transformation Strategy</Tag>
    <Tag small highlighted>
      Digital Transformation Strategy
    </Tag>

    {/* Selected and Highlighted */}
    <Tag selected highlighted>
      Digital Transformation Strategy
    </Tag>
    <Tag small selected highlighted>
      Digital Transformation Strategy
    </Tag>

    {/* Disabled */}
    <Tag disabled>Digital Transformation Strategy</Tag>
    <Tag small disabled>
      Digital Transformation Strategy
    </Tag>

    {/* With Tag Type */}
    <Tag tagType="Software Engineering Expertise">
      TPC3193EnterpriseArchitectureDesign
    </Tag>
    <Tag small tagType="Software Engineering Expertise">
      Software Engineering Principles
    </Tag>
    <Tag selected tagType="Software Engineering Expertise">
      Software Engineering Principles
    </Tag>
    <Tag small selected tagType="Software Engineering Expertise">
      Software Engineering Principles
    </Tag>

    {/* With Person Entity */}
    <Tag personEntity>Product Management Expertise</Tag>
    <Tag small personEntity>
      Product Management Expertise
    </Tag>
    <Tag personEntity={{ initials: "PM" }}>Product Management Expertise</Tag>
    <Tag small personEntity={{ initials: "PM" }}>
      Product Management Expertise
    </Tag>
    <Tag
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=product"
      }}
    >
      Product Management Expertise
    </Tag>
    <Tag
      small
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=product"
      }}
    >
      Product Management Expertise
    </Tag>

    {/* With Actions */}
    <Tag showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag small showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag showEdit>Enterprise Architecture Design</Tag>
    <Tag small showEdit>
      Enterprise Architecture Design
    </Tag>
    <Tag showRemove>Enterprise Architecture Design</Tag>
    <Tag small showRemove>
      Enterprise Architecture Design
    </Tag>
    <Tag showEdit showRemove>
      Enterprise Architecture Design
    </Tag>
    <Tag small showEdit showRemove>
      Enterprise Architecture Design
    </Tag>
    <Tag showEdit showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag small showEdit showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag showRemove showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag small showRemove showInfo tagType="Enterprise Architecture Solutions">
      Enterprise Architecture Design
    </Tag>
    <Tag
      showEdit
      showRemove
      showInfo
      tagType="Enterprise Architecture Solutions"
    >
      Enterprise Architecture Design
    </Tag>
    <Tag
      small
      showEdit
      showRemove
      showInfo
      tagType="Enterprise Architecture Solutions"
    >
      Enterprise Architecture Design
    </Tag>

    {/* Complex combinations */}
    <Tag
      selected
      highlighted
      personEntity={{ initials: "DT" }}
      showInfo
      tagType="Data Science Implementation Strategy"
    >
      Data Science Implementation
    </Tag>
    <Tag
      small
      selected
      highlighted
      personEntity={{ initials: "DT" }}
      showInfo
      tagType="Data Science Implementation Strategy"
    >
      Data Science Implementation
    </Tag>
    <Tag
      selected
      highlighted
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=data"
      }}
      showEdit
      showRemove
    >
      Data Science Implementation
    </Tag>
    <Tag
      small
      selected
      highlighted
      personEntity={{
        avatarSrc: "https://api.dicebear.com/7.x/personas/svg?seed=data"
      }}
      showEdit
      showRemove
    >
      Data Science Implementation
    </Tag>
  </Flex>
);
AllCombinations.parameters = {
  excludeDecorator: true
};
AllCombinations.storyName = "All Prop Combinations";
