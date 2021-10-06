import styled from 'styled-components'
import { Card } from 'antd'
export const AntdCardStyleContainer = styled(Card)`
    height: fit-content;
    .container {
        height: 80vh;
        position: relative;
        width: 100%;
        overflow: hidden;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
    .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 80vh;
        border: none;
    }
`

export const LayoutContainer = styled.div`

/**
 * screens widths
 */
 @phone_only: 599px;
 @tablet_portrait_min: 600px;
 @tablet_portrait_max: 899px;
 @tablet_landscape_min: 900px;
 @tablet_landscape_max: 1199px;
 @desktop_min: 1200px;
 @desktop_max: 1799px;
 @big_desktop_min: 1800px;

/**
 * style variables
 */
@background: #FAFAFA;
@box_shadow_2dp: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
@box_shadow_4dp: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
@menu: #EEEEEE;

/**
 * style colors
 */
@light_gray: #fafafa;

/**
 * root style
 */
:root, html, body {
  font-family: Lato, sans-serif;
  font-size: 14px;
  height: 100%;
  background-color: @background;
  margin: 0;
}

/**
 * typography
 */
h1, h2, h3, h4, h5, p {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.display-2 {
  font-size: 45px;
  font-weight: 400;
  line-height: 64px;
}
.display-1 {
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
}
.headline {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}
.title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .005em;
}
.subhead { 
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .01em;
}

/**
 * breaths
 */
.content--padding {
  padding: 8px;
  @media (min-width: 960px) {
    padding: 16px; 
  }
}

/**
 ********************************************
 * Grid layout
 ********************************************
 */

/**
 * grid container
 */

  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  // phone & tablet portrait
  @media (max-width: @tablet_portrait_max) {
    grid-template-rows: 128px auto auto;
  }
  // tablet landscape & bigger displays
  @media (min-width: @tablet_landscape_min) {
    grid-template-rows: 64px auto;
  }

/**
 * grid sections
 */
#header {
  grid-column-start: 1;
  grid-column-end: -1;
}
#menu    {
  background-color: @menu;
  // phone & tablet portrait
  @media (max-width: @tablet_portrait_max) {
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row: 2;
  }
  // tablet landscape & bigger displays
  @media (min-width: @tablet_landscape_min) {
    grid-column: 1 / span 3;
    grid-row: 2;
  }
}
#board { 
  background-color: inherit;
  // phone & tablet portrait
  @media (max-width: @tablet_portrait_max) {
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row: 3;
  }
  // tablet landscape & bigger displays
  @media (min-width: @tablet_landscape_min) {
    grid-column-start: 4;
    grid-column-end: -1;
    grid-row: 2;
  }
}

/**
 ********************************************
 * Flex components
 ********************************************
 */

/**
 * toolbar
 */
.toolbar {
  display: flex;
  width: 100%;
  max-height: 128px;
  padding: 0 16px;
  margin: 0;
  box-sizing: border-box;
  letter-spacing: .005em;
  height: 64px;
  // phone & tablet portrait
  @media (max-width: @tablet_portrait_max) {
    flex-flow: column;
    &:not(.header) {
     height: 128px; 
    }
  }
  // tablet landscape & bigger displays
  @media (min-width: @tablet_landscape_min) {
    flex-flow: row;
  }
  & > .section__title {
    flex: auto;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
  & > .section__action {
    flex: initial;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    // phone & tablet portrait
    @media (max-width: @tablet_portrait_max) {
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
.toolbar--fixed {
  position: fixed;
  box-shadow: @box_shadow_4dp;
  z-index: 10;
}
.toolbar--border {
  border-bottom: 1px solid #CCCCCC;
}

/**
 * button
 */
button {
  .button--layout();
  &.raised{
    box-shadow: @box_shadow_2dp;
    background-color: @light_gray;
    &:active{
      box-shadow: @box_shadow_2dp;
    }
  }
}

.button--layout() {
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  color: rgba(0,0,0,.87);
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  letter-spacing: .01em;
  line-height: 36px;
  margin: 8px;
  min-width: 88px;
  outline: none;
  overflow: hidden;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  &:not([disabled]){
    box-shadow: none;
    cursor: pointer;
    &:hover{
      background-color: rgba(0,0,0,.12);
    }
    &:active{
      background-color: rgba(0,0,0,.25);
    }
  }
  &[disabled]{
    color: rgba(0,0,0,.38);
    pointer-events: none;
  }
}
`
