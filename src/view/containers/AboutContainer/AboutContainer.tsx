import React from 'react'
import type {NextComponentType} from 'next'
import {Window} from '@/layout/index'
import {
  Introduction,
  SectionHeader,
  Welcome,
  SectionSlider,
  AboutWelcome,
} from '@/components/index'
import {
  Badge,
  Card,
  PostCard,
  Input,
  Textarea,
  Button,
  ProjectCard,
} from '@/ui/index'
import * as S from './style'
import {companies, projects, technologies} from '@/data'

const AboutContainer: NextComponentType = () => {
  const quotesMockData = [
    {
      id: 'getir',
      name: 'Getir',
      image: '/images/introduction-image-2.jpg',
      title: 'Getir',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
    {
      id: 'maxithings',
      name: 'MaxiThings',
      image: '/images/introduction-image-2.jpg',
      title: 'MaxiThings',
      text: "Granobra'da çalışırken full time olarak çalıştığım turizm e-ticaret sitesidir. React, Next.js, Redux, Sass gibi teklonojiler kullanarak geliştirdim. Figma, XD ve Zeplin üzerinden gelen tasarımları pixelperfect olarak hayata geçiriyordum. Fakat pandemiden dolayı projeyi tamamlayamadan ayrılmak zorunda kaldım.",
    },
  ]

  return (
    <>
      <S.ExperiencesSection>
        <SectionHeader
          title="Experiences"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={companies} hasBadge hasArrow />
      </S.ExperiencesSection>

      <S.TechnologiesSection>
        <SectionHeader
          title="Technologies"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <S.TechnologiesTags>
          {technologies.map(item => (
            <Badge key={item} cool>
              {item}
            </Badge>
          ))}
        </S.TechnologiesTags>
      </S.TechnologiesSection>

      <S.ProjectCardsSection>
        <SectionHeader
          title="Projects"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
          link="https://www.google.com"
        />
        <S.ProjectCards>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </S.ProjectCards>
      </S.ProjectCardsSection>

      <S.QuotesSection>
        <SectionHeader
          title="Quotes"
          subtitle="Let me show you what summary of my website is :) Click which you want or just wait."
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection>
    </>
  )
}

export default AboutContainer
