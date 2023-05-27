import React from 'react';
import { createUseStyles } from 'react-jss';
import BubbleList from '../BubbleList';
import Education, { EducationProps } from '../Education';
import Experience, { ExperienceProps } from '../Experience';
import Masthead, { MastheadProps } from '../Masthead';
import Reflex from '../Reflex';
import Section from '../Section';

type ResumeProps = MastheadProps & {
  experience: ExperienceProps[];
  technicalSkills: string[];
  personalSkills: string[];
  education: EducationProps[];
};

const useStyles = createUseStyles(
  {
    layout: {
      justifyContent: 'space-between',
      columnGap: '48px',
    },

    content: {
      flexGrow: 1,
    },

    sidebar: {
      flexShrink: 1.33,
    },
  },
  { name: 'Resume' }
);

function Resume({
  name,
  tagline,
  website,
  profile,
  code,
  location,
  avatar,
  experience,
  technicalSkills,
  personalSkills,
  education,
}: ResumeProps) {
  const classes = useStyles();

  return (
    <>
      <Masthead
        name={name}
        tagline={tagline}
        website={website}
        profile={profile}
        code={code}
        location={location}
        avatar={avatar}
      />

      <main>
        <Reflex className={classes.layout} device="tablet">
          <div className={classes.content}>
            <Section title="Professional Experience">
              {experience.map((exp) => (
                <Experience key={`${exp.organization}-${exp.title}`} {...exp} />
              ))}
            </Section>
          </div>

          <div className={classes.sidebar}>
            <Section title="Technical Skills">
              <BubbleList variant="outlined" items={technicalSkills} />
            </Section>

            <Section title="Personal Skills">
              <BubbleList variant="outlined" items={personalSkills} />
            </Section>

            <Section title="Education">
              {education.map((ed) => (
                <Education key={`${ed.certification}`} {...ed} />
              ))}
            </Section>
          </div>
        </Reflex>
      </main>
    </>
  );
}

export default Resume;
