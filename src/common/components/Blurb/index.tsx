import React from 'react';
import { createUseStyles } from 'react-jss';
import ArticleHeader from '../ArticleHeader';
import ArticleSubHeader from '../ArticleSubHeader';
import BubbleList from '../BubbleList';
import Chip, { ChipProps } from '../Chip';
import List from '../List';

type BlurbProps = {
  title?: string;
  subtitle?: string;
  chips: ChipProps[];
  list: string[];
  tags?: string[];
};

const useStyles = createUseStyles(
  {
    root: {
      margin: '12px 0',
    },

    title: {},

    chips: {},

    content: {},

    footer: {},
  },
  { name: 'ArticleSubHeader ' }
);

function Blurb({ title, subtitle, chips, list, tags }: BlurbProps) {
  const classes = useStyles();

  return (
    <article className={classes.root}>
      {Boolean(title) && (
        <header className={classes.title}>
          <ArticleHeader text={title!} />
        </header>
      )}

      <div className={classes.chips}>
        {chips.map((chip) => (
          <Chip key={chip.text} {...chip} />
        ))}
      </div>

      <div className={classes.content}>
        <List items={list} />
      </div>

      {Boolean(tags) && (
        <footer className={classes.footer}>
          {Boolean(subtitle) && <ArticleSubHeader text={subtitle!} />}
          <BubbleList variant="filled" size="small" items={tags!} />
        </footer>
      )}
    </article>
  );
}

export default React.memo(Blurb);
