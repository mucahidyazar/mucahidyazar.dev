import styled from 'styled-components'

import {BreakpointSize} from '@/constants'
import {News} from '@/types'

import {
  MainNews,
  MainNewsTitle,
  MainNewsDate,
  MainNewsImage,
  MainNewsContent,
} from 'src/view/components/MainNews/style'

const NewsHeader = styled.div`
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
  padding: 10px 0;
  background: var(--color-newspaper);
  padding: 1rem 3rem 0;
  border-bottom: 1px solid var(--color-black-light);
  color: var(--color-black-light);
`
const NewsHeaderImage = styled.div`
  position: relative;
  height: 60px;
`

const NewsHeaderDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0.5rem;
  font-size: var(--font-size-s);
`
const NewsHeaderDate = styled.p``
const NewsHeaderMainTheme = styled.p`
  font-size: var(--font-size-l);
  text-transform: uppercase;
`
const NewsHeaderTotalNews = styled.p``
const ModalNews = styled.div`
  background: var(--color-newspaper);
  color: var(--color-black-light);
  padding: 2rem 3rem 2rem;

  @media (max-width: ${BreakpointSize.TABLET_MINI.MAX}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    grid-template-columns: 1fr;
  }

  ${MainNews} {
    padding: 0;
    padding-right: 1rem;

    ${MainNewsTitle} {
      font-size: 60px;
    }

    ${MainNewsDate} {
      font-size: 20px;
      margin-bottom: 1rem;
    }
    ${MainNewsImage} {
      width: 100%;
      height: 280px;
      float: none;
      margin-bottom: 1rem;
      max-width: 100%;
    }
    ${MainNewsContent} {
      font-size: 1rem;
      font-weight: 400;

      &::first-letter {
        color: tomato;
        padding: 0 0.3rem;
        margin: 0 0.3rem 0 0;
        border: 2px solid;
        border-radius: 2px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 5.5rem;
        float: left;
        line-height: 1;
      }
    }
  }
`

const ModalMainNews = styled(MainNews)<{
  news: News
  isModal?: boolean
}>``

export {
  NewsHeader,
  NewsHeaderImage,
  NewsHeaderDescription,
  NewsHeaderDate,
  NewsHeaderMainTheme,
  NewsHeaderTotalNews,
  ModalNews,
  ModalMainNews,
}
