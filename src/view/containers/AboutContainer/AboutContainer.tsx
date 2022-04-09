import React from 'react'
import {useTranslation} from 'next-i18next'

import {AboutWelcome, SectionHeader, SectionSlider} from '@/components'
import {Badge, ProjectCard} from '@/ui'
import {companies, projects, technologies} from '@/data'

import * as S from './style'

const AboutContainer: React.FC = () => {
  const {t} = useTranslation()

  const quotesMockData = [
    {
      id: '0',
      name: 'Mack D. Johnson',
      image: '/images/avatars/avatar-1.jpg',
      text: "He has been a very good mentor to me. He's always there to help me when I need it. I'm glad I found him.",
    },
    {
      id: '1',
      name: 'Maria Jane',
      image: '/images/avatars/avatar-2.jpg',
      text: "He is the best mentor I've ever had. When I need help, he's always there to help me. Especially in JavaScript, he has amazing knowledge. I am happy to get mentorship from him.",
    },
  ]

  return (
    <>
      <AboutWelcome />
      <S.ExperiencesSection>
        <SectionHeader
          title={t('experiences')}
          subtitle={t('experiencesSectionDescription')}
        />
        <SectionSlider data={companies} hasBadge hasArrow />
      </S.ExperiencesSection>

      <S.TechnologiesSection>
        <SectionHeader
          title={t('technologies')}
          subtitle={t('technologiesSectionDescription')}
        />
        <S.TechnologiesTags>
          {technologies.map(item => (
            <Badge key={item}>{item}</Badge>
          ))}
        </S.TechnologiesTags>
      </S.TechnologiesSection>

      <S.ProjectCardsSection>
        <SectionHeader
          title={t('projects')}
          subtitle={t('projectsSectionDescription')}
          link="/projects"
        />
        <S.ProjectCards>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </S.ProjectCards>
      </S.ProjectCardsSection>

      <S.QuotesSection>
        <SectionHeader
          title={t('quotes')}
          subtitle={t('quotesSectionDescription')}
        />
        <SectionSlider data={quotesMockData} hasArrow type={2} />
      </S.QuotesSection>
    </>
  )
}

export default AboutContainer
