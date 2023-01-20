import Image from 'next/image'
import { Chip, Tooltip, HomeArticle, HomeSection } from '@/components'
import { EXPERIENCES, LINKS, PROJECTS } from '@/mocks'

interface ISectionLink {
  href?: string
  children?: React.ReactNode
  logo?: string
  text?: string
}
const SectionLink = ({ href = '#', text = '', logo, children }: ISectionLink) => {
  return (
    <a href={href} className={`link flex items-center gap-2`}>
      {logo && <Image src={logo} alt={text} width={20} height={20} />}
      {text || children}
    </a>
  )
}

export default function Home() {
  // const router = useRouter()
  // console.log(router)

  return (
    <div id="home" className='flex flex-col gap-6'>
      <HomeSection id="about">
        <HomeArticle
          id="creator-of"
          title="Creator of"
          content={(
            <p>
              <a
                className="link"
                href="https://github.com/mucahidyazar/icomoon-generator"
              >
                icomoon-generator
              </a>
              {' and '}
              <a
                className="link"
                href="https://github.com/mucahidyazar/html-css-boilerplate"
              >
                html-css-boilerplate
              </a>
            </p>
          )}
        />

        <HomeArticle
          id="writer-at"
          title="Writer at"
          content={(
            <p>
              <a className="link" href="https://javascript.plainenglish.io">
                Javascript Plainenglish
              </a>
              {' '}on{' '}
              <a className="link" href="https://medium.com/@mucahidyazar">
                Medium
              </a>
            </p>
          )}
        />
      </HomeSection>
      <HomeArticle
        id="about-me"
        title="About me"
        content={(
          <div className='flex flex-col gap-2'>
            <p>
              I am a highly experienced frontend developer with a passion for building great companies and creating high-quality software. I have been working in the field since 2017, and have a wealth of experience in developing products, designing frontend applications, and implementing software patterns and architecture. I have worked on large zero-to-one SAAS projects at unicorn, decacorn, and billion dollar companies, and have gained a wealth of knowledge and best practices from my experiences.
            </p>
            <div className='flex flex-wrap gap-2'>

              <Tooltip
                content={(
                  <div className='w-96'>
                    My motivation is driven by a passion for creating high-quality software for my company. And giving my experience to my collegues. I also like tos hare my experience with the community by writing articles. In frontend development everything get more complex and easier in time. As a part of this community I want to develop to solve these complex problems and make this easier than today. And also the other best motivated thing is thriving on the challenge of solving complex problems and seeing my work come to life in a polished, functional end-product.
                  </div>
                )}
                key="motivation-tooltip"
              >
                <Chip content="Motivation" />
              </Tooltip>
              <Tooltip
                content={(
                  <div className='w-96'>
                    •	Pixel perfect and fully responsive applications
                    •	Best practises of frontend community and Getir I learnt so far
                    •	Good code-based projects and you wont need to refactor it
                    •	Documented projects so having good and smooth flow for anyone
                    •	Analyzing and monitoring your frontend applications and taking action before time is too late
                    •	Experience worked on the projects that has millions requests each day
                    •	Accessible forms and applications
                    •	Full automated workflow your frontend applications with CI/CD and your deployment tool
                    •	Applying similar codebases and single source of truth

                  </div>
                )}
                key="offer-tooltip"
              >
                <Chip content="Offer" />
              </Tooltip>
              <Tooltip
                content={(
                  <ul className='w-96 list-disc pl-2'>
                    <li>Multi language URLs (/about | /hakkinda)</li>
                    <li>Number input problem (It is little complicated to tell here but I can give a link similar to this topic)</li>
                    https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
                    <li>Server-side multi language support without using any library (I applied this without package some package problems on serverside)</li>
                    <li>Single source of truth for everhthing, for your code bases, for your documentations, for your engineer habits of the company. (folder structure, naming convention, message convention etc…)</li>
                    <li>Created a UI library as a unique library for my company</li>
                    <li>Created a company and engineering culture from scratch for a startup. I built their documentation as a template, teach them some daily and development habits.</li>
                    <li>Automated release process and version management. This is a monorepo example: If PR is merged to main; (1 and 2 are working as parallel)
                      <ul className='list-decimal list-inside'>
                        <li>Create a changelog for apps which has any file changes
                          <ul className='list-inside pl-6'>
                            <li>If there is any changes under /libs/ui, then start npm publish process</li>
                          </ul>
                        </li>
                        <li>In parallel upload assets</li>
                      </ul>
                    </li>
                  </ul>
                )}
                key="challenges-tooltip"
              >
                <Chip content="Challenges" />
              </Tooltip>
              <Tooltip
                content={(
                  <ul className='w-96 list-disc pl-2'>
                    <li>Education support (Courses, books etc…)</li>
                    <li>Necessary environments</li>
                    <li>Flexible working hours</li>
                    <li>Open-mind and respectful relations</li>
                    <li>Turkish official holidays</li>
                    <li>Language class support (Current level: B2)</li>
                    <li>Stock option (Nice to have)</li>
                    <li>Home Office support (Nice to have)</li>
                  </ul>
                )}
                key="expectation-tooltip"
              >
                <Chip content="Expectation" />
              </Tooltip>
            </div>
          </div>
        )}
      />

      <HomeSection id="socials">
        <HomeArticle
          id="find-me-on"
          title="Find me on"
          content={LINKS.map(link => (
            <SectionLink
              key={link.label}
              text={link.label}
              href={link.url}
              logo={`/svg/socials/${link.icon}.svg`}
            />
          ))}
        />
      </HomeSection>

      <HomeSection id="experience">
        <HomeArticle
          id="experience"
          title="Experience"
          content={EXPERIENCES.map(experience => (
            <Tooltip
              content={
                <aside className="flex flex-col gap-1 w-96">
                  {Object.entries(experience.info).map(([key, value]) => (
                    <div className="flex flex-wrap items-start" key={key}>
                      <h2 className="font-medium italic w-20">
                        {/* if value is not array jsut print it */}
                        {key}
                      </h2>
                      <div className="flex flex-1 flex-wrap gap-2">
                        {typeof value === 'string' ? (
                          <p>{value}</p>
                        ) : (
                          value.map((v: any) => (
                            <p key={v} className="leading-3">
                              {v},
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </aside>
              }
              key={experience.label}
            >
              <SectionLink
                key={experience.label}
                href={experience.url}
                text={experience.label}
                logo={experience.logo}
              />
            </Tooltip>
          ))}
        />
      </HomeSection>

      <HomeSection id="projects">
        <HomeArticle
          id="projects"
          title="Projects"
          content={PROJECTS.map(project => (
            <Tooltip
              content={
                <aside className="flex flex-col gap-1 w-96">
                  {Object.entries(project.info).map(([key, value]) => (
                    <div className="flex flex-wrap items-start" key={key}>
                      <h2 className="font-medium italic w-20">
                        {/* if value is not array jsut print it */}
                        {key}
                      </h2>
                      <div className="flex flex-1 flex-wrap gap-2">
                        {typeof value === 'string' ? (
                          <p>{value}</p>
                        ) : (
                          value.map((v: any) => (
                            <p key={v} className="leading-3">
                              {v},
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </aside>
              }
              key={project.label}
            >
              <SectionLink key={project.label} text={project.label} />
            </Tooltip>
          ))}
        />
      </HomeSection>

      {/* <HomeSection id="faq">
        <HomeArticle
          id="faq"
          title="FAQ"
          content={(
            <div className='flex flex-wrap gap-2'>
              <div>
                <h4 className='w-fit mb-2 border-b border-gray-400 border-opacity-40'>What is my motivation as a frontend developer?</h4>
                <p className='text-sm text-gray-400'>My motivation is driven by a passion for creating high-quality software for my company. And giving my experience to my collegues. I also like tos hare my experience with the community by writing articles. In frontend development everything get more complex and easier in time. As a part of this community I want to develop to solve these complex problems and make this easier than today. And also the other best motivated thing is thriving on the challenge of solving complex problems and seeing my work come to life in a polished, functional end-product.</p>
              </div>
            </div>
          )}
        />
      </HomeSection> */}
    </div >
  )
}
