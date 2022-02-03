import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {Title} from '@/ui'

const MainNews = styled.div`
  padding: 0 1rem 1rem 1rem;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    background: rgba(249, 247, 241, 0.2);
    /* outline: 2px solid #e9b258; */
  }
`
const MainNewsTitle = styled(Title)`
  color: #000;
  font-size: var(--font-size-l);
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-family: 'Playfair Display', serif;
  line-height: 100%;
  padding-top: 2px;
`
const MainNewsDate = styled.p`
  text-align: center;
  font-family: 'Droid Serif', serif;
  font-size: var(--font-size-s);

  &:before,
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 4px 0;
  }
`
const MainNewsContent = styled.p`
  text-align: justify;
  cursor: default;
  font-size: var(--font-size-xs);
  line-height: 120%;
`
const MainNewsImage = styled.div`
  position: relative;
  float: left;
  margin-right: 1rem;
  margin-bottom: 0.2rem;
  filter: grayscale(100%);
  border-radius: 4px;
  overflow: hidden;
  height: 100px;

  @media (max-width: ${BreakpointSize.TABLET.MAX}px) {
    width: 140px;
  }

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    width: 120px;
  }
`
const MainNewsFigure = styled.figure``
const MainNewsFigcaption = styled.figcaption`
  font-style: italic;
  font-size: 10px;
`

export {
  MainNews,
  MainNewsTitle,
  MainNewsDate,
  MainNewsContent,
  MainNewsImage,
  MainNewsFigure,
  MainNewsFigcaption,
}
