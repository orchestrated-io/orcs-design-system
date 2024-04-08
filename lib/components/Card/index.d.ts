import * as React from "react";

export type CardChangeIcon = "arrowUp" | "arrowDown";

export type CardChildren = React.ReactNode | React.ReactNode[];

export interface CardProps {
  /**
   * Changes card styles to suit a card that holds alternate data
   */
  alternate?: boolean;
  /**
   * Forces card to take 100% width and height of parent element
   */
  fluid?: boolean;
  /**
   * Applies an icon to header of specified name
   */
  icon?: any[];
  /**
   * Card title
   */
  title?: React.ReactNode;
  /**
   * Card subtitle
   */
  subtitle?: React.ReactNode;
  /**
   * Horizontally centers content inside card
   */
  center?: boolean;
  /**
   * Can specify a width in pixels or percentages (make sure you specify units). Can also use calc (see code for example)
   */
  width?: string;
  /**
   * Adds a coloured top border. Uses the system colours (eg primary, warning)
   */
  colour?: string;
  /**
   * Specify the icon to be used for the changeValue element.
   */
  changeIcon?: CardChangeIcon;
  /**
   * Adds a gray inline element to the card heading to describe change in value
   */
  changeValue?: string;
  /**
   * Card contents.
   */
  children?: CardChildren;
  /**
   * Specifies the system design theme.
   */
  theme?: Object;
}

declare const Card: React.FC<CardProps>;

export default Card;
