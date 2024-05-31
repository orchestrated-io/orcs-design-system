import React from "react";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Flex from "../Flex";
import { VARIANT_COLORS, ButtonLink } from ".";

export default {
  title: "Components/Buttons/ButtonLink",
  component: ButtonLink
};

const link = "http://www.google.com";

export const defaultButton = () => (
  <ButtonLink href={link}>Default button</ButtonLink>
);
defaultButton.storyName = "Default button";

export const variants = () => (
  <Spacer my="3">
    {Object.keys(VARIANT_COLORS).map((variant) => (
      <ButtonLink large key={variant} variant={variant} href={link}>
        {variant}
      </ButtonLink>
    ))}
  </Spacer>
);

export const alternateSize = () => (
  <Spacer my="3">
    <ButtonLink small href={link}>
      Small button
    </ButtonLink>
    <ButtonLink large href={link}>
      Large button
    </ButtonLink>
    <ButtonLink height="xxxl" href={link}>
      Specified height button
    </ButtonLink>
    <ButtonLink href={link} width="100px">
      A multiple-line button with specified width
    </ButtonLink>
  </Spacer>
);
alternateSize.storyName = "Alternate sizes";

export const alternateColours = () => (
  <Spacer my="3">
    <ButtonLink variant="success" href={link}>
      Success/green button
    </ButtonLink>
    <ButtonLink variant="danger" href={link}>
      Danger/red button
    </ButtonLink>
  </Spacer>
);
alternateColours.storyName = "Alternate colours";

export const ghost = () => (
  <Spacer my="3">
    <ButtonLink small variant="ghost" href={link}>
      Small ghost button
    </ButtonLink>
    <ButtonLink variant="ghost" href={link}>
      Regular ghost button
    </ButtonLink>
    <ButtonLink large variant="ghost" href={link}>
      Large ghost button
    </ButtonLink>
  </Spacer>
);
ghost.storyName = "Ghost style";

export const fullWidth = () => (
  <ButtonLink fullWidth href={link}>
    Full width button
  </ButtonLink>
);
fullWidth.storyName = "Full width";

export const disabled = () => (
  <Spacer my="r">
    <ButtonLink disabled href={link}>
      Disabled button
    </ButtonLink>
    <ButtonLink variant="disabled" href={link}>
      Alternate way of making button disabled
    </ButtonLink>
  </Spacer>
);
disabled.storyName = "Disabled state";

export const withIcon = () => (
  <Spacer my="3">
    <ButtonLink iconLeft href={link} isLoading>
      <Icon icon={["fas", "user-plus"]} />
      Left aligned icon
    </ButtonLink>
    <ButtonLink iconRight href={link}>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </ButtonLink>
    <ButtonLink leftIcon={["fas", "star"]} href={link}>
      Left icon magic!
    </ButtonLink>
  </Spacer>
);
withIcon.storyName = "With icon";

export const iconOnly = () => (
  <Spacer my="3">
    <ButtonLink
      small
      iconOnly
      p="s"
      ariaLabel={<Icon icon={["fas", "download"]} />}
      href={link}
    >
      <Icon icon={["far", "calendar-alt"]} />
    </ButtonLink>
    <ButtonLink iconOnly p="s" ariaLabel="Show calendar" href={link}>
      <Icon icon={["far", "calendar-alt"]} />
    </ButtonLink>
    <ButtonLink large iconOnly p="s" ariaLabel="Show calendar" href={link}>
      <Icon icon={["far", "calendar-alt"]} />
    </ButtonLink>
    <Flex alignItems="center" mt="r">
      <Spacer mr="r">
        <ButtonLink
          iconOnly
          variant="success"
          href={link}
          width="33px"
          height="32px"
          ariaLabel="Confirm"
        >
          <Icon icon={["fas", "check"]} />
        </ButtonLink>
        <ButtonLink
          iconOnly
          variant="successAlternate"
          href={link}
          width="33px"
          height="32px"
          ariaLabel="Confirm"
        >
          <Icon icon={["fas", "check"]} />
        </ButtonLink>
        <ButtonLink
          iconOnly
          variant="danger"
          href={link}
          width="33px"
          height="32px"
          ariaLabel="Cancel"
        >
          <Icon icon={["fas", "times"]} />
        </ButtonLink>
        <ButtonLink
          iconOnly
          variant="dangerAlternate"
          href={link}
          width="33px"
          height="32px"
          ariaLabel="Cancel"
        >
          <Icon icon={["fas", "times"]} />
        </ButtonLink>
      </Spacer>
    </Flex>
  </Spacer>
);
iconOnly.storyName = "Icon only";
