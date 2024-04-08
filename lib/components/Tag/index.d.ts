import * as React from "react";

export type TagChildren = React.ReactNode | React.ReactNode[];

export interface TagProps {
  children?: TagChildren;
  /**
   * Adds selected styling to tag
   */
  selected?: boolean;
  /**
   * On tag selected
   */
  onSelect?: (...args: any[]) => any;
  /**
   * Shows the remove button
   */
  showRemove?: boolean;
  /**
   * On tag remove button clicked
   */
  onRemove?: (...args: any[]) => any;
  /**
   * Shows edit button
   */
  showEdit?: boolean;
  /**
   * On tag edit button clicked
   */
  onEdit?: (...args: any[]) => any;
  /**
   * Shows info button
   */
  showInfo?: boolean;
  /**
   * On tag info button clicked
   */
  onInfo?: (...args: any[]) => any;
  /**
   * Can add a type to a tag as text
   */
  tagType?: string;
  /**
   * Can add an img url for showing a person's avatar if the tag is used for a person
   */
  personAvatar?: string;
  /**
   * Adds disabled attribute and styling to tag
   */
  disabled?: boolean;
  /**
   * Adds loading spinner to tag to indicate awaiting an action to complete
   */
  isPending?: boolean;
  /**
   * Specifies the design theme
   */
  theme?: Object;
  /**
   * Add a strikethrough to a tag value text
   */
  showStrikeThrough?: boolean;
  /**
   * Applies the small variant styles
   */
  small?: boolean;
  /**
   * Applies a highlighted style and colour to the tag
   */
  highlighted?: boolean;
  /**
   * Allows you to set a person avatar image or initials
   */
  personEntity?: Object;
}

declare const Tag: React.FC<TagProps>;

export default Tag;
