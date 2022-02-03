import styled from 'styled-components'

const SummarySection = styled.div`
  max-width: 100%;
`

const ExperiencesSection = styled.div`
  margin-bottom: 10rem;
`
const WorkshopsSection = styled.div`
  margin: 10rem 0;
`

const WorkshopsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5rem;
  margin-bottom: 2rem;
`

const SectionCards = styled.div`
  height: 600px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export {
  SummarySection,
  ExperiencesSection,
  WorkshopsSection,
  WorkshopsList,
  SectionCards,
}
